import { Grid } from "@mui/material";
import { Button, TextField, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Navbar from "../components/AppBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { API, Auth, Storage } from "aws-amplify";
import { createPost as createPostMutation } from "../graphql/mutations";

function CreatePostPage() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  async function createPost(e) {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    const imageName = uuidv4();

    const data = {
      title: title,
      grade: grade,
      location: location,
      image: imageName,
      userId: user.attributes.sub,
    };

    await API.graphql({
      query: createPostMutation,
      variables: { input: data },
    });

    await Storage.put(imageName, selectedImage);

    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={createPost}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={8}>
            <input
              accept="image/*"
              type="file"
              id="select-img"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-img">
              <Button variant="contained" component="span">
                Select an image
              </Button>
            </label>

            {imageUrl && <img style={{ maxWidth: "600px" }} src={imageUrl} />}
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Grade"
                variant="outlined"
                onChange={(e) => setGrade(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button variant="contained" type="submit">
                Create Post
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreatePostPage;
