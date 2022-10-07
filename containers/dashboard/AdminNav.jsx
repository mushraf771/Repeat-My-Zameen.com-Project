import React from "react";
// import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    // Tabs,
    // Tab,
    // useMediaQuery,
    // useTheme,
    Box,
    // Button,
    // MenuItem,
    // Menu,
    Hidden, IconButton
    // Fragment
} from "@mui/material";
// import Avatar from '@mui/material/Avatar';
// // import DrawerComp from "./Drawer";
// import Stack from '@mui/material/Stack';
// import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../actions/auth'
import PropTypes from "prop-types";
import '../../css/navbar.css'
import Profile from "./Navtabs/Profile";
import Notification from "./Navtabs/Notification";
import Message from "./Navtabs/Messages";
import { useStyle } from "./dashboardStyles";
import MenuIcon from '@mui/icons-material/Menu';

const AdminNav = ({ handleDrawerOpen}) => {
    // alert(handleDrawerOpen,mobileOpen);
    const classes = useStyle();
    return (
        <>
            <Box className="" sx={{ flexGrow: 1 }}>
                <AppBar sx={{ background: "#33a137", height: "65px" }} position="fixed">
                    <Toolbar className={classes.toolbar}>

                        <Typography>
                            <img
                                src="https://9bfb164cc130fa80219f-0951aea74e48cd703ee2eb5ca90acd24.ssl.cf1.rackcdn.com/partners_zam_logo.png"
                                alt="logo-full-screen"
                            />
                        </Typography>
                        <Hidden mdDown>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <Notification />
                                <Message />
                                <Profile />
                            </Box>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton color="inherit" onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
AdminNav.propTypes = {
    handleDrawerOpen: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(AdminNav);
