import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
export const useStyle = makeStyles(() => ({
    toolbar: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },
    navlist: {
        minWidth: '250px',
        maxWidth: '300px',
        
    },
    navAvatar: {
        minwidth: '35px',
        maxwidth: '35px',
        minheight: '35px',
        maxheight: '35px',
    },
    ulAvatar: {
        background:'#f57c00',
        color:'white'
    },
    // drawerNav of side nav 
    drawerNav: {
        marginTop: '60px',
        border:'2px solid red'
    },
    // wraper of dashboard
    wrapper: {
        padding: useTheme().spacing(9.2, 2, 2, 32.5),
        [useTheme().breakpoints.down('md')]: {
            padding:useTheme().spacing(9.2, 2, 2,2)
        }
    },
    // dashboard side nav link    
    NavLinks: {
        color: 'gray',
        " & :hover , &:hover div " : {
        
            // color: 'blue',
        }, "& div ": {
            color:'gray'
        }
    },
    activeNavLink: {
        color: 'green', "& div": {
            color:'green'
        }
    },
    navButton: {
        width: '100%',
        
    }

    // dashboard dashboard page design
    
}));
