import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import CreatePost from "./CreatePost";

const Menu = ({ signOut }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  function navigateHomePage() {
    navigate("/home");
  }

  function navigateProfilePage() {
    navigate("/profile");
  }

  return (
    <List>
      <ListItem>
        <ListItemText primary="Topper" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Home" onClick={navigateHomePage} />
      </ListItem>
      <ListItem button onClick={navigateProfilePage}>
        <ListItemText primary="Profile" />
      </ListItem>

      <ListItem button onClick={handleOpen}>
        <ListItemText primary="Create Post" />
      </ListItem>
      <CreatePost open={open} setOpen={setOpen} />

      <ListItem button onClick={signOut}>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
};

export default withAuthenticator(Menu);
