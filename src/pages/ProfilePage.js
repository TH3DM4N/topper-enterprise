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
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid>
          <Paper>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <Avatar src={image1} />
              </Grid>
              <Grid>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid>
                    <h1>Dylan Picus</h1>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid>
                      <h2>15 Posts</h2>
                    </Grid>
                    <Grid>
                      <h2>60 Followers</h2>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid>
          <Paper>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <h2>Boulderer</h2>
              </Grid>
              <Grid>
                <h2>Highest Grade: 7A</h2>
              </Grid>
              <Grid>
                <h2>"Je doet niks"</h2>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Paper>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <h2>Posts:</h2>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid>
                  <h2>Post 1</h2>
                </Grid>
                <Grid>
                  <h2>Post 2</h2>
                </Grid>
                <Grid>
                  <h2>Post 3</h2>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
