import React from "react";
import { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Auth } from "aws-amplify";

import Post from "../components/Post";
import { getrelations } from "../api/relation/get_relations";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      //know who my friends are
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;
      console.log(userId);

      const data = await getrelations("/follow/" + userId);
      const friends = data.data.searchRelations.items;

      console.log(friends);
      const friendIds = friends.map((item) => item.receiverId);

      friendIds.forEach(async (id) => await getFriendPosts(id));
      //request the posts of my friends
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  async function getFriendPosts(id) {
    const query = /* GraphQL */ `
      query SearchPosts {
        searchPosts(limit: 5, filter: { userId: { eq: "${id}" } }) {
          items {
            id
            title
            image
            grade
            location
            userId
          }
        }
      }
    `;

    const apiData = await API.graphql({ query: query });
    const postsFromAPI = apiData.data.searchPosts.items;
    setPosts(postsFromAPI);
  }

  return (
    <div className="feed-container">
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => <Post key={index} postData={post} />)
      )}
    </div>
  );
}

export default withAuthenticator(Feed);
