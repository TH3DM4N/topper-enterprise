import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ signOut }) => {
  const navigate = useNavigate();

  function navigateCreatePostPage() {
    navigate("/createpost");
  }

  function navigateHomePage() {
    navigate("/home");
  }

  function navigateProfilePage() {
    navigate("/profile");
  }

  function navigateSearchUserPage() {
    navigate("/search");
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => alert("Menu")}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Topper
        </Typography>
        <Button color="inherit" onClick={signOut}>
          Sign Out
        </Button>
        <Button color="inherit" onClick={navigateCreatePostPage}>
          Create Post
        </Button>
        <Button color="inherit" onClick={navigateHomePage}>
          Home
        </Button>
        <Button color="inherit" onClick={navigateProfilePage}>
          Profile
        </Button>
        <Button color="inherit" onClick={navigateSearchUserPage}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withAuthenticator(Navbar);
