import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContactsIcon from "@mui/icons-material/Contacts";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    position: "relative",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      },
    ],
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleDrawerClose(); // Close drawer after clicking
    }
  };

  const navigationItems = [
    { text: "HOME", icon: <HomeIcon />, id: "home" },
    { text: "SKILLS", icon: <BuildIcon />, id: "skills" },
    { text: "FEATURED PROJECTS", icon: <BuildIcon />, id: "featured" },
    { text: "CONTACT", icon: <ContactsIcon />, id: "contact" },
  ];

  return (
    <Box 
      sx={{ 
        display: { xs: 'block', md: 'none' }, // Only show on mobile
        position: 'relative',
        zIndex: 1100 
      }}
    >
      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          display: open ? 'none' : 'flex',
          color: 'inherit'
        }}
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        sx={{
          display: { xs: 'block', md: 'none' }, // Only show on mobile
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: 'var(--header-bg-color)', // Match header background
            color: 'var(--header-text-color)', // Match header text
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'inherit' }}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleScroll(item.id)}>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}