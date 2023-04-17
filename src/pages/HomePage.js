import React from "react";
import { Container, Grid } from "@mui/material";

import { withAuthenticator } from "@aws-amplify/ui-react";

import Feed from "./Feed";
import Menu from "../components/Menu";
import Search from "../components/Search";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid item xs={6}>
          <Feed />
        </Grid>
        <Grid item xs={3}>
          <Search />
        </Grid>
      </Grid>
    </Container>
  );
}

export default withAuthenticator(HomePage);
