import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ButtonCom from "./ButtonCom";
const Img =
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F01%2F108004404.jpg";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box>
      <Card sx={{ maxWidth: 500 }}>
        <Box style={{ display: "flex" }}>
          <Box style={{ flex: "1", marginLeft: "5px" }}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography style={{ marginTop: "7px" }}>Vishal</Typography>
            </Stack>
          </Box>
          <Box style={{ padding: "5px" }}>
            <MessageIcon style={{ marginRight: "5px", cursor: "pointer" }} />
            <ScreenShareIcon
              style={{ marginRight: "5px", cursor: "pointer" }}
            />
            <MoreVertIcon style={{ marginRight: "5px", cursor: "pointer" }} />
          </Box>
        </Box>

        <Box style={{ padding: "20px" }}>
          <CardMedia
            component="img"
            height="300"
            width="100"
            image={Img}
            alt="Paella dish"
          />
        </Box>
        <Box style={{ display: "flex" }}>
          <Box
            style={{
              display: "flex",
              flex: "1",
              paddingBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <FavoriteIcon />
            <Typography>1</Typography>
            <LoyaltyIcon style={{ marginLeft: "10px" }} />
            <Typography>0</Typography>
            <Typography style={{ marginLeft: "30px" }}>$00.00 tips</Typography>
          </Box>
          <Box style={{ marginRight: "10px", display: "flex" }}>
            <Typography
              style={{
                background: "purple",
                borderRadius: "20px",
                color: "white",
                padding: "5px",
                marginBottom: "10px",
              }}
            >
              $ send to
            </Typography>
            <BookmarkBorderIcon style={{ padding: "5px" }} />
          </Box>
        </Box>
      </Card>
      <ButtonCom />
    </Box>
  );
}
