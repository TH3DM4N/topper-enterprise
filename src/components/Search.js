import React from "react";
import { useEffect, useState } from "react";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [authenticatedUserId, setAuthenticatedUserId] = useState(null);

  useEffect(() => {
    async function getAuthUser() {
      const user = await Auth.currentAuthenticatedUser();
      setAuthenticatedUserId(user.attributes.sub);
    }
    getAuthUser();
  }, []);

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
    console.log(apiData);
    let results = apiData.data.searchUsers.items;

    let filteredResult = results.filter(
      (user) => user.id !== authenticatedUserId
    );

    const completeUserList = filteredResult.map((user) => ({
      ...user,
      isAdded: false,
    }));
    console.log(completeUserList);
    setUsers(completeUserList);
  };

  async function followUser(targetUserId) {
    const updatedUserList = users.map((user) =>
      targetUserId === user.id ? { ...user, isAdded: true } : user
    );
    console.log(updatedUserList);
    setUsers(updatedUserList);

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
      <h2>Search</h2>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for users..."
          size="small"
          onChange={handleSearchChange}
        />
      </form>
      {users.length === 0 ? (
        <h3>No user found</h3>
      ) : (
        users.map((user) => (
          <List>
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Avatar src={user.name} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
              <ListItemButton>
                <Button
                  disabled={user.isAdded}
                  onClick={() => followUser(user.id)}
                >
                  <PersonAddIcon />
                  {user.isAdded ? "Added" : "Add"}
                </Button>
              </ListItemButton>
            </ListItem>
          </List>
        ))
      )}
    </div>
  );
};

export default withAuthenticator(Search);
