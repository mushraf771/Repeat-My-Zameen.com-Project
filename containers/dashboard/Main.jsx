import React from 'react'
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme();
const useStyle = makeStyles((theme) => ({
  logo: {
    color: "red",
  },
}));
const Main = () => {
  const classes = useStyle();
  return (
    <div >
      <h2 className={classes.logo}>Main</h2></div>
  )
}

export default Main