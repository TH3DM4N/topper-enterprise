import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [followers, setFollowers] = useState(120);
  const [following, setFollowing] = useState(350);
  const [discipline, setDiscipline] = useState("Computer Science");
  const [highestGrade, setHighestGrade] = useState("PhD");
  const [bio, setBio] = useState("Software Developer");
  const [profilePicture, setProfilePicture] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleEditInfo = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save the updated user info here
    setOpen(false);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar
          alt={name}
          src={profilePicture}
          sx={{ width: 100, height: 100, marginBottom: 1 }}
        />
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {followers} followers - {following} following
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleEditInfo}
          sx={{ mt: 1 }}
        >
          Edit Info
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-evenly" mb={3}>
        <Typography variant="body1">
          <strong>Discipline:</strong> {discipline}
        </Typography>
        <Typography variant="body1">
          <strong>Highest Grade:</strong> {highestGrade}
        </Typography>
        <Typography variant="body1">
          <strong>Bio:</strong> {bio}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="div" mb={2}>
          Posts
        </Typography>
        <Grid container spacing={2}>
          {posts.map((post, index) => (
            <Grid item xs={4} key={index}>
              {/* Render the user's posts here */}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Info</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Highest Grade"
            value={highestGrade}
            onChange={(e) => setHighestGrade(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
