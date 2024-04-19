"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  List,
  ListItem,
  Box,
} from "@mui/material";
import menuItems from "@/mocks/Footer";
import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />{" "}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Logo
            </a>
          </Typography>
        </Box>

        <List sx={{ display: { xs: "flex-col", md: "flex" } }}>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <a
                href={item.link}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.label}
              </a>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
