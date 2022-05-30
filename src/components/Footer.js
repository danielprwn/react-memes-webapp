import * as React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Icon, Toolbar, Typography } from "@material-ui/core";
import { Pinterest } from "@material-ui/icons";

export default function SimpleBottomNavigation() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        bgcolor: "#3c0f72",
        color: "#FFFFFF",
        p: 1,
      }}
    >
      <Toolbar
        style={{
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="caption">
          <Icon>
            <FacebookIcon color="primary" fontSize="large" />
            <InstagramIcon color="secondary" fontSize="large" />
            <TwitterIcon color="primary" fontSize="large" />
            <Pinterest color="secondary" fontSize="large" />
          </Icon>
        </Typography>
      </Toolbar>

      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">
          Copyright By Prwn REACT FRONTEND ALK © 2022
        </Typography>
      </Toolbar>
    </Box>
  );
}
