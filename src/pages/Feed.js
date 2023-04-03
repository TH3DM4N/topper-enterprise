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
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listPosts });
    const postsFromAPI = apiData.data.listPosts.items;
    setPosts(postsFromAPI);
  }
  if (!posts) {
    return <div>Loading...</div>;
  }

  if (matches) {
    return (
      <Grid sx={{ maxWidth: "55%" }}>
        <Box>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Post />
      </Grid>
    );
  }
}

export default withAuthenticator(Feed);
