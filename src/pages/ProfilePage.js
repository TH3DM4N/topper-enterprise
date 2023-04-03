import React from "react";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
import Navbar from "../components/AppBar"; 

import image1 from "../assets/climb1.png";
import image2 from "../assets/climb2.png";

const Profile = () => {
  const user = { username: "Dylan", followers: 60, following: 20 };
  const posts = [
    { id: 1, imageUrl: image2, caption: "cap1" },
    { id: 2, imageUrl: image2, caption: "cap2" },
    { id: 3, imageUrl: image2, caption: "cap2" },
  ];
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Avatar src={image1} />
            <Typography variant="h6">{user.username}</Typography>
            <div>
              <Typography variant="subtitle1">
                <strong>{posts.length}</strong> posts
              </Typography>
              <Typography variant="subtitle1">
                <strong>{user.followers}</strong> followers
              </Typography>
              <Typography variant="subtitle1">
                <strong>{user.following}</strong> following
              </Typography>
            </div>
          </Paper>
        </Grid>
        {posts.map((post) => (
          <Grid key={post.id} item xs={4}>
            <img src={post.imageUrl} alt={post.caption} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Profile;
