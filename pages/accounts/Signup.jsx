
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { axios } from 'axios'
import Alert from '../../pages/Alert';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import PropTypes from 'prop-types';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'All Copyright © '}
      <Link color="inherit" to='/'>
        Zamee.Com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();
const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    // is_agent:false,
  });
  const { name, email, password, password2, } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value,[e.target.checked]:e.target.checked });
  console.log(formData);
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2)
      setAlert('Passwords does not match', 'danger');
    else
      signup({ name, email, password, password2, });
  };
  if (isAuthenticated){
    return <Navigate to='/homes' />;}
  return (
    <>
      <Helmet>
        <title>Realest Estate -SignUP</title>
        <meta
          name='description'
          content='login page'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="container-main-page">
          <Container component="main" maxWidth="xs" className='sign-in-card'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography component="h6" variant="h6">
            <Alert />
          </Typography>
          <Box component="form"  onSubmit={e => onSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                    required
                    value={name}
                    onChange={e => onChange(e)}
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  // onChange={(e) => setuserData({ ...userData, firstName: e.target.value })}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                
                  fullWidth
                  id="email"
                  label="Email Address"
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required 
                    inputProps={{ style: { textTransform: "lowercase" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                    autoComplete="new-password"
                    value={password2}
                    onChange={e => onChange(e)}
                    minLength='6'
                
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                      control={<Checkbox  color="primary"
                        name="is_agent"
                        Checked={is_agent}
                      onChange={e => onChange(e)}/>}
                  label="Registered as Agent ...?"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login" variant="body2">
                  'Already' have an account ? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
          </Container>
        </div>
    </ThemeProvider></>
  );
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, signup })(SignUp);
