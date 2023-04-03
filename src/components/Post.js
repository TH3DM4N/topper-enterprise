import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import image1 from "../assets/climb1.png";
import image2 from "../assets/climb2.png";
import { CategorySharp } from "@mui/icons-material";

const Post = ({ post }) => {
  const username = "Dylan";
  const caption = "Welcome to my first post";

  return (
    <Card>
      <CardHeader avatar={<Avatar src={image1} />} title={caption} />
      <img
        src={image2}
        alt={caption}
        style={{ width: "100%", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {caption}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {post.grade}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.location}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
