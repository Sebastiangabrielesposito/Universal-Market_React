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
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import LinearScaleIcon from '@mui/icons-material/LinearScale'
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CarWidgets from "./CarWidgets";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import { ListItemIcon } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
// import logo from '../assets/img/um.png'
import '../styles/NavBar.css'
import {Link} from 'react-router-dom'



interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Home", "Contacto"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);

  };

  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      cursor:'pointer',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "lightblue",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1200,
        padding:1
        
      }}
    >
      <Typography variant="h6" component={Link} to="/" className="titleNavBar" sx={{ my: 2 }}>
        Universal-Market
      </Typography>
      
      <Divider className="titleNav" sx={{ background: "#5e6580", marginTop:4 }} />

      <List component="nav">
        
        <ListItem button component={Link} to="/" sx={{ marginLeft: 0}}>
          <ListItemIcon>
            <HomeIcon  sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ marginLeft: 2.5 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Home</Typography>
      {/* <ListItemText primary="Home"   sx={{ marginLeft: 1.5}} /> */}
        </ListItem>
        
        
        <ListItem button component={Link} to="/productos" sx={{ marginLeft: 0 }}>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ marginRight: 0 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Productos</Typography>
          {/* <ListItemText  primary="Productos" /> */}
        </ListItem>

        <ListItem button component={Link} to="/contacto" sx={{ marginLeft: 0 }}>
          <ListItemIcon>
            <ContactsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ marginLeft: 0.5 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Contacto</Typography>
          {/* <ListItemText primary="Contacto" sx={{ marginLeft: 0.2 }} /> */}
        </ListItem>

        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#b3d6e4" }}>
            <ShoppingCartTwoToneIcon />
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Divider sx={{ background: "#5e6580", marginTop:2 }} />
        <ShoppingCartTwoToneIcon className="Car" sx={{ color: "#fff", marginTop: 4, fontSize:35, marginLeft: 0.9}} />
      </List>
    </Box>
  );

   
  
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "rgba(0, 0, 0, 0.9)" }}>
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
              // color: "grey",
              // "&:hover": { color: "lightblue" },
              // textAlign: "left",
              // cursor: "pointer",
              // transition: "all 0.5s ease-out",
            }}
          >
            {/* UNIVERSAL-MARKET   */}
            
            <Button   
              className="titleNav"
              variant="overline"
              component="div"
              sx={{
                "&:hover": { color: "lightblue" },
                textAlign: "left",
                cursor: "pointer",
                transition: "all .5s ease-out",
          
                fontFamily: "cursive",
                fontWeight: 900,
                // fontFamily:'Inspiration, cursive'
                fontSize:{sm:11, md: 14.5 ,lg:14.5},
                
              
              }}
            >
              <Link className="titleNav" to="/">UNIVERSAL-MARKET</Link>
             
              {/* <Box 
              component="img"
              sx={{
              height: 33,
              width: 60,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              }}
              src={logo}alt=""
              /> */}
            </Button>
          </Typography>
          

          <Search sx={{marginRight:{sm:0,md:12}}}>
            <SearchIconWrapper >
              <SearchIcon style={{color:'white'}} />
            </SearchIconWrapper>
            <StyledInputBase sx={{color:'white'}}
              placeholder="Buscar productos…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* <HomeTwoToneIcon sx={{cursor:'pointer', '&:hover':{color:'lightblue'}}} />     */}
          <Box sx={{ display: { xs: "none", sm: "block" },
          // marginLeft:{sm:-1} 
          }}>
            {/* {navItems.map((item) => (
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
            ))} */}
  
            <Button
              startIcon={
                <HomeTwoToneIcon 
                  fontSize="large"
                  sx={{
                    color: "grey",
                    "&:hover": { color: "lightblue" },
                  }}
                />
              }
              sx={{
                color: "grey" ,
                gap: 0,
                "&:hover": { color: "lightblue" },
                fontFamily: " cursive",
                fontSize:{sm:11, md: 16 ,lg:16}
              }} 
            >
            <Link className="HomeBar" to="/" 
            >Home</Link>
            </Button>

            <Button
              id="ButtonProducts"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                color: "grey",
                // background: "pink",
                gap: 0,
                fontFamily: " cursive",
                // fontSize: 16,
                // fontWeight:700,
                "&:hover": { color: "lightblue" },
                fontSize:{sm:11, md: 16 ,lg:16}
              }}
            ><Link className="ProductosBar" to="/productos">Productos
            </Link>
            </Button>

               
            <Menu
              anchorElm={anchorElm}
              open={open}
              onClose={handleClose}
              elevation={0}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ marginTop: 4.2, marginLeft: 84}}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#8cbcd8",
                  cursor: "pointer",
                  fontFamily: " cursive",
                }}
              >
                Proteinas
              </MenuItem>

              <Divider sx={{ my: 0.5, color: "grey" }} />

              <MenuItem
                onClick={handleClose}
                sx={{ color: "#8cbcd8", fontFamily: " cursive" }}
              >
                Creatinas
              </MenuItem>

              <Divider sx={{ my: 0.5, color: "grey" }} />

              <MenuItem
                onClick={handleClose}
                sx={{ color: "#8cbcd8", fontFamily: " cursive" }}
              >
                Ganadores de peso
              </MenuItem>
            </Menu>

            <Button
              sx={{
                color: "grey",
                gap: 0,
                fontFamily: "cursive",
                // fontSize: 16,
                // fontWeight:700,
                "&:hover": { color: "lightblue" },
                fontSize:{sm:11, md: 16 ,lg:16},
                
              }}
            >
            <Link className="ContactoBar" to="/contacto" >Contacto</Link>
            </Button>
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
