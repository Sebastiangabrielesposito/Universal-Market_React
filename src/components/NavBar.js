// import CarWidgets from "./CarWidgets";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import {useMyContext} from '../app/Context/CarContext';


interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Home", "Contacto"];

export default function NavBar(props: Props ) {
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

  // const [search,setSearch] = useMyContext("");
  // const handleSearch = (event) => { // changed the "handleSearch()" function
  //   props.click(value)
  // }
  
  
  
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
      marginLeft: theme.spacing(),
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
      <Typography variant="h6" component={Link} to="/Universal-Market_React" className="titleNavBar" sx={{ my: 2 }}>
      <FitnessCenterIcon style={{fontSize:18}}/>Universal-Marke<SportsGymnasticsIcon style={{marginTop:10}}/>
      
      </Typography>
      
      <Divider className="titleNav" sx={{ background: "#5e6580", marginTop:4 }} />

      <List component="nav">
        
        <ListItem button component={Link} to="/Universal-Market_React" sx={{ marginLeft: 0}}>
          <ListItemIcon>
            <HomeIcon  sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ marginLeft: 2.5 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Home</Typography>
      {/* <ListItemText primary="Home"   sx={{ marginLeft: 1.5}} /> */}
        </ListItem>
        
        
        <ListItem button component={Link} to="/Universal-Market_React/productos" sx={{ marginLeft: 0 }}>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ marginRight: 0 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Productos</Typography>
          {/* <ListItemText  primary="Productos" /> */}
        </ListItem>

        <ListItem button component={Link} to="/Universal-Market_React/contacto" sx={{ marginLeft: 0 }}>
          <ListItemIcon>
            <ContactsIcon sx={{ color: "white" }} />
          </ListItemIcon>
            <Typography sx={{ marginLeft: 0.5 ,fontSize:22, fontFamily:'cursive',textAlign:'center' }}>Contacto</Typography>
        </ListItem>
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
          </IconButton>
          <Typography
            variant="overline"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
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
                fontSize:{sm:11, md: 14.5 ,lg:14.5},          
              }}
            >
              <Link className="titleNav" to="/Universal-Market_React">
              <FitnessCenterIcon style={{fontSize:12}}/>UNIVERSAL-MARKE<SportsGymnasticsIcon style={{fontSize:17}}/></Link>
             
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
          
          {/* <input type="text" placeholder="Buscar... " onChange={e => setSearch(e.target.value.toLowerCase())}/> */}
          <div>
          <Search sx={{marginRight:{sm:0,md:10}}}
              
              // value={""}
          >
            <SearchIconWrapper >
              <SearchIcon style={{color:'white'}} />
            </SearchIconWrapper>
            <StyledInputBase   sx={{color:'white'}}
              // onChange={(event) => {
              //   setSearch(event.target.value.toLowerCase())}}
              // delete the value={search}
              placeholder="Buscar productos…"
              inputProps={{ "aria-label": "Buscar productos…" }}
              // onClick={handleSearch}
            />
          </Search>
          </div>      
          
          <Box sx={{ display: { xs: "none", sm: "block" },
          // marginLeft:{sm:-1} 
          }}>
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
            <Link className="HomeBar" to="/Universal-Market_React" 
            >Home</Link>
            </Button>

            <Button
              id="ButtonProducts"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                color: "grey",
                gap: 0,
                fontFamily: " cursive",
                "&:hover": { color: "lightblue" },
                fontSize:{sm:11, md: 16 ,lg:16}
              }}
              ><Link className="ProductosBar" to="/Universal-Market_React/productos">Productos
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
              className="MenuNavItem"
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#8cbcd8",
                  cursor: "pointer",
                  fontFamily: " cursive",
                }}
              >
                <Link className="MenuProductos" to="/Universal-Market_React/productos/proteinas">
                  Proteinas
                </Link>
              </MenuItem>

              <Divider sx={{ my: 0.5, color: "grey" }} />

              <MenuItem
                onClick={handleClose}
                sx={{ color: "#8cbcd8", fontFamily: " cursive" }}
              >
                <Link className="MenuProductos" to="/Universal-Market_React/productos/creatinas">
                  Creatinas
                </Link>
              </MenuItem>

              <Divider sx={{ my: 0.5, color: "grey" }} />

              <MenuItem
                onClick={handleClose}
                sx={{ color: "#8cbcd8", fontFamily: " cursive" }}
              >
                <Link className="MenuProductos" to="/Universal-Market_React/productos/ganadoresdepeso">
                  Ganadores de peso
                </Link>
              </MenuItem>
            </Menu>

            <Button
              sx={{
                color: "grey",
                gap: 0,
                fontFamily: "cursive",
                "&:hover": { color: "lightblue" },
                fontSize:{sm:11, md: 16 ,lg:16},
                
              }}
            >
            <Link className="ContactoBar" to="/Universal-Market_React/contacto" >Contacto</Link>
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
            keepMounted: true, 
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
