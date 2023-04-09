import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, TextField } from "@mui/material";

import { Auth } from "aws-amplify";

import { createuser } from "../api/onboarding/create_user";
import { getuser } from "../api/onboarding/get_user";

function OnBoardPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [discipline, setDiscipline] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;
      const resp = await getuser("/user/" + userId);
      console.log(resp);

      if (resp.data.getUser != null) {
        navigate("/home");
      }
      setId(userId);
      setIsLoading(false);
    }
    fetchUser();
  }, [navigate]);

  async function createUser(e) {
    e.preventDefault();
    const userData = {
      id: id,
      name: name,
      username: username,
      bio: bio,
      discipline: discipline,
    };

    await createuser("/user", userData);
    navigate("/home");
  }

  if (isLoading) {
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
