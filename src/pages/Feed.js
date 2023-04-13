import React from "react";
import { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";

import Post from "../components/Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listPosts });
    const postsFromAPI = apiData.data.listPosts.items;
    setPosts(postsFromAPI);
    setIsLoading(false);
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
