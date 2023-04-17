import React from "react";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";

import Navbar from "../components/AppBar";
import { withAuthenticator } from "@aws-amplify/ui-react";
import image1 from "../assets/climb1.png";
import image2 from "../assets/climb2.png";

import { Auth } from "aws-amplify";

import { getuser } from "../api/onboarding/get_user";

function Profile() {
  //check if this this page gets a user, if not get current authenticated
  const user = { username: "Dylan", followers: 60, following: 20 };
  const posts = [
    { id: 1, imageUrl: image2, caption: "cap1" },
    { id: 2, imageUrl: image2, caption: "cap2" },
    { id: 3, imageUrl: image2, caption: "cap2" },
  ];
  const [user1, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;
      const resp = await getuser("/user/" + userId);
      //console.log(resp);
      setUser(resp.data.getUser);
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                  <Grid>{user1.name}</Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid>{user1.username}</Grid>
                    <Grid>{user1.username}</Grid>
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
              <Grid>{user1.discipline}</Grid>
              <Grid>
                <h2>Highest Grade: 7A</h2>
              </Grid>
              <Grid>{user1.bio}</Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* <Grid>
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
        </Grid> */}
      </Grid>
    </div>
  );
}

export default withAuthenticator(Profile);
