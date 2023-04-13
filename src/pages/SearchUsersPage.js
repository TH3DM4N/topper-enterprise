import React from "react";
import { useEffect, useState } from "react";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Navbar from "../components/AppBar";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from "@mui/material";

import { Auth, API } from "aws-amplify";
import { createfollow } from "../api/follow/create_follow";

function SearchUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const query = /* GraphQL */ `
      query SearchUsers {
        searchUsers(limit: 5, filter: { name: { wildcard: "*${searchTerm}*" } }) {
          items {
            id
            name
            username
            profileImage
          }
        }
      }
    `;

    const apiData = await API.graphql({ query: query });
    let results = apiData.data.searchUsers.items;
    setUsers(results);
  };

  async function followUser(targetUserId) {
    const sourceUser = await Auth.currentAuthenticatedUser();
    const sourceUserId = sourceUser.attributes.sub;

    const data = {
      requesterId: sourceUserId,
      receiverId: targetUserId,
    };

    await createfollow("/follow", data);
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSearchSubmit}>
        <TextField
          label="Search users"
          variant="outlined"
          onChange={handleSearchChange}
          fullWidth
        />
      </form>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar src={user.name} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
            <ListItemButton>
              <Button onClick={() => followUser(user.id)}>
                <PersonAddIcon />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default withAuthenticator(SearchUsersPage);
