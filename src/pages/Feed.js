import React from "react";
import { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { View, withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";

import Post from "../components/Post";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box } from "@mui/system";
import { Grid } from "@mui/material";

function Feed() {
  const matches = useMediaQuery("(min-width:600)");
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
