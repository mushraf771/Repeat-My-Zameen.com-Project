import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link,Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import Alert from '../../pages/Alert';
import '../../css/features.css'
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {' All Copyright © '}
            <Link color="inherit" to="/">
                Zameen.com
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignIn=({ login, isAuthenticated })=>{
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated)
        return <Navigate to='/' />;
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    return (
        <>
            <Helmet>
                <title>Realest Estate - Login</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <ThemeProvider theme={theme} >
                <div className=" container-main-page">
                    <Container className='sign-in-card' component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className='mb-3'>
                        Sign in
                    </Typography>
                    <Typography component="" variant="h6" className='my-2'>
                        <Alert />
                    </Typography>
                        <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                                value={email}
                                onChange={e => onChange(e)}
                                required
                            fullWidth
                            id="email"
                            label="Email Address"
                                name="email"
                                type='email'
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                                id="password"                                
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/' variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                    <Link to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 3, mb: 2 }} />
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
}
SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignIn);
