import React from 'react';
import { useState } from 'react';
import {
    List, ListItemIcon,
    ListItemButton,
    ListItemText, IconButton,Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { NavLink } from 'react-router-dom';
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = ["homes", "shops", "plots", "maps", "addproperty", "login", "signup"]
// const classes = makeStyles()
  return (
    <>
      <SwipeableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Typography className='p-2'>
          <img
            src="https://9bfb164cc130fa80219f-0951aea74e48cd703ee2eb5ca90acd24.ssl.cf1.rackcdn.com/partners_zam_logo.png"
            alt="logo-full-screen"
          />
        </Typography>
        <List sx={{ background: "#33A137", paddingTop: "30px", mx: "auto",height:'auto' }}>
          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              button
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon
                sx={{
                  width: "200px",
                  padding: "5px 30px",
                  mx: "auto",
                  margin: "5px 10px",
                }}
              >
                <ListItemText sx={{ color: "#FFFFFF" }}>
                  <NavLink
                    to={page}
                    sx={{
                      color: "white",
                    }}
                    // className={classes.logo}
                  >
                    {page}
                  </NavLink>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: "auto", color: "#FFFFFF" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComp;