import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";

import { v4 as uuidv4 } from "uuid";

import { Auth, Storage } from "aws-amplify";

import { createpost } from "../api/post/create_post";

const CreatePost = ({ open, setOpen }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const imageName = uuidv4();

    const data = {
      title: title,
      grade: grade,
      location: location,
      image: imageName,
      userId: user.attributes.sub,
      contentStatus: "Pending",
    };

    await Storage.put(imageName, imageFile);
    await createpost("/post", data);

    //setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <IconButton component="span">
                <AddAPhoto />
              </IconButton>
            </label>
            {image && (
              <Box mt={2}>
                <Typography variant="subtitle2">Image Preview:</Typography>
                <img
                  src={image}
                  alt="preview"
                  style={{ width: "100%", maxHeight: 200, objectFit: "cover" }}
                />
              </Box>
            )}
          </Box>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            size="small"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePost;
