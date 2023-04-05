import React from "react";
import { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import { Image } from "@aws-amplify/ui-react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import image1 from "../assets/climb1.png";
import image2 from "../assets/climb2.png";

import { Storage } from "aws-amplify";

const Post = (props) => {
  const [image, setImage] = useState(null);
  const post = props.postData;

  useEffect(() => {
    fetchImage();
  }, []);

  async function fetchImage() {
    const image = await Storage.get(post.image);
    setImage(image);
  }
  return (
    <Card>
      <CardHeader avatar={<Avatar src={image1} />} title={post.title} />
      {image && (
        <Image src={image} style={{ width: "100%", objectFit: "cover" }} />
      )}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.grade}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.location}
        </Typography>
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
