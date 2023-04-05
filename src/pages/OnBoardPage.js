import React from "react";
import { useEffect, useState } from "react";
import { View, withAuthenticator } from "@aws-amplify/ui-react";
import { Button, TextField, Box } from "@mui/material";

import { Auth, API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { getUser } from "../graphql/queries";
import { createUser as createUserMutation } from "../graphql/mutations";

function OnBoardPage() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [discipline, setDiscipline] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;

      const apiData = await API.graphql({
        query: getUser,
        variables: { id: userId },
      });
      const userData = apiData.data.getUser;
      if (userData) {
        navigate("/home");
      }
      setId(userId);
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  async function createUser(e) {
    e.preventDefault();
    const userData = {
      id: id,
      name: name,
      username: username,
      bio: bio,
      discipline: discipline,
    };

    await API.graphql({
      query: createUserMutation,
      variables: { input: userData },
    });
    navigate("/home");
  }

  if (isLoading) {
    //setloading turnunit
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>OnBoardPage</h1>
      <form onSubmit={createUser}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Discipline"
          variant="outlined"
          onChange={(e) => setDiscipline(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Create User
        </Button>
      </form>
    </div>
  );
}

export default withAuthenticator(OnBoardPage);
