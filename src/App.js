import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { View, withAuthenticator } from "@aws-amplify/ui-react";

import ButtonAppBar from "./components/AppBar";
import Post from "./components/Post";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const App = () => {
  return (
    <View className="App">
      <ButtonAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4} xsOffset={4}>
            <Post />
          </Grid>
          <Grid xs={4} xsOffset={4}>
            <Post />
          </Grid>
          <Grid xs={4} xsOffset={4}>
            <Post />
          </Grid>
          <Grid xs={4} xsOffset={4}>
            <Post />
          </Grid>
        </Grid>
      </Box>
    </View>
  );
};

export default withAuthenticator(App);
