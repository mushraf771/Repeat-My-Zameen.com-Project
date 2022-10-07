import React, { Fragment } from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Box,
  Button,

  // Fragment
} from "@mui/material";
import DrawerComp from "./Drawer";
import Stack from '@mui/material/Stack';
import { NavLink , Link} from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../actions/auth'
import PropTypes from "prop-types";
// css
import '../../css/navbar.css'
const Navbar = (
  { auth: { isAuthenticated, loading }, logout }
) => {
  // const [value, setvalue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const PAGES = ["homes", "shops", "plots", "maps", "addproperty"];

  const authLinks = (
    <>
      <a
        className="text-white text-uppercase nav-link-auth"
        sx={{ cursor: "pointer", color: "white" }}
        onClick={logout}
        href="#!"
      >
        Logout
      </a>
      &nbsp; &nbsp;
      <Button
        component={NavLink}
        to="/profile"
        className=" text-white text-uppercase nav-link-auth"
        sx={{ cursor: "pointer", color: "white" }}
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#fff" : "" };
        }}
      >
        profile
      </Button>
    </>
  );

  const guestLinks = (
    <Fragment>
      <Button
        component={NavLink}
        className="text-white nav-link-auth text-uppercase pr-3"
        to="/login"
        sx={{ cursor: "pointer", color: "white" }}
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#fff" : "" };
        }}
      >
        Login
      </Button>
      &nbsp; &nbsp;
      <Button
        component={NavLink}
        className="pr-3 text-white text-uppercase nav-link-auth"
        to="/signup"
        sx={{ cursor: "pointer", color: "white" }}
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#fff" : "" };
        }}
      >
        Sign Up
      </Button>
    </Fragment>
  );
  // const activeNavLink = {
  //   backgroundColor: '#fff',
  //   color:'#000'
  // }
  return (
    <>
      <Box className="" sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "#33a137", height: "65px" }} position="fixed">
          <Toolbar>
            {isMatch ? (
              <>
                <Typography>
                  <img
                    src="https://9bfb164cc130fa80219f-0951aea74e48cd703ee2eb5ca90acd24.ssl.cf1.rackcdn.com/partners_zam_logo.png"
                    alt="logo"
                    className=""
                  />
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Typography>
                  <img
                    src="https://9bfb164cc130fa80219f-0951aea74e48cd703ee2eb5ca90acd24.ssl.cf1.rackcdn.com/partners_zam_logo.png"
                    alt="logo-full-screen"
                  />
                </Typography>
                {/* <Tabs
                  textColor="inherit"
                  className="text-white "
                  value={value}
                  onChange={(e, value) => setvalue(value)}
                  sx={{ mx: "auto" }}
                  indicatorColor="primary"
                
                >
                  {PAGES.map((page, index) => (
                    <Tab
                      textColor="inherit"
                      key={index}
                      label={page}
                      component={NavLink}
                      to={page}
                      className="nav-link-main"
                      style={(isActive) => {
                        return { backgroundColor: isActive ? "#f3f3" : "#fff" };
                      }}
                    />
                  ))}
                </Tabs> */}
                <Stack
                  direction="row"
                  sx={{ margin: "auto" }}
                  spacing={1}

                  // textColor="inherit"
                >
                  <Button
                    component={NavLink}
                    to="/homes"
                    sx={{ color: "white" }}
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#fff" : "" };
                    }}
                  >
                    Homes
                  </Button>
                  <Button
                    component={NavLink}
                    to="/shops"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#fff" : "" };
                    }}
                    sx={{ color: "white" }}
                  >
                    Shops
                  </Button>
                  <Button
                    component={NavLink}
                    to="/plots"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#fff" : "" };
                    }}
                    sx={{ color: "white" }}
                  >
                    Plots
                  </Button>
                  <Button
                    component={NavLink}
                    to="/maps"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#fff" : "" };
                    }}
                    sx={{ color: "white" }}
                  >
                    Maps
                  </Button>
                  <Button
                    component={NavLink}
                    to="/private/addproperty"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#fff" : "" };
                    }}
                    sx={{ color: "white" }}
                  >
                    AddProperty
                  </Button>
                </Stack>
                <Stack direction="row" sx={{ marginRight: "0px" }} spacing={2}>
                  <Typography sx={{ color: "white" }}>
                    {!loading && (
                      <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                      </Fragment>
                    )}
                  </Typography>
                </Stack>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
