// import CarWidgets from "./CarWidgets";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import LinearScaleIcon from '@mui/icons-material/LinearScale'
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CarWidgets from "./CarWidgets";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import HomeIcon from '@mui/icons-material/Home';
import { ListItemIcon } from "@mui/material";
import ContactsIcon from '@mui/icons-material/Contacts';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Productos", "Contacto"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "lightblue",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1200,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Universal-Market
      </Typography>
      <Divider sx={{ background: "#373737" }} />
      
      <List component='nav'>
        <ListItem button sx={{ marginLeft:2 }}>
          <ListItemIcon>
            <HomeIcon sx={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText  primary= 'Home' sx={{ marginLeft:1.5 }}/>
        </ListItem>
        
        <ListItem button sx={{ marginLeft:2 }}>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon sx={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText  primary= 'Productos'/>
        </ListItem>

        <ListItem button  sx={{ marginLeft:2 }}>
          <ListItemIcon >
            <ContactsIcon sx={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText  primary= 'Contacto' sx={{ marginLeft:0.2 }}/>
        </ListItem>
        
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#b3d6e4" }}>
            <ShoppingCartTwoToneIcon />
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Divider sx={{ background: "#373737" }} />
        <ShoppingCartTwoToneIcon sx={{ color: "#fff", marginTop: 3 }} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "rgba(0, 0, 0, 0.3)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              color: "#fff",
              justifyContent: "left",
              flexGrow: 1,
            }}
          >
            <MenuOpenIcon />
            {/* <LinearScaleIcon /> */}
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="overline"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "grey",
              "&:hover": { color: "lightblue" },
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.5s ease-out",
            }}
          >
            UNIVERSAL-MARKET
          </Typography>

         

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "grey",
                  cursor: "pointer",
                  "&:hover": { color: "lightblue" },
                  transition: "all 0.5s ease-out",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <CarWidgets />
        
        </Toolbar>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
