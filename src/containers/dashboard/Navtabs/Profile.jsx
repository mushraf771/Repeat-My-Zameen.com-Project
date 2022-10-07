import React from 'react'
import { Box ,Button,Avatar,ListItem,ListItemIcon,Menu , MenuItem,IconButton,Badge,ListItemText } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
// import avatar from "../../../assets/img/avatar/avatar.jpg"
import { useStyle } from '../dashboardStyles';
const dropDownProfile = [{
  label: 'Setting', icon: <SettingsIcon />
},
{ label: 'Logout', icon: <LogoutIcon /> }
]
const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyle()
  return (
    <Box>
      <Button aria-label=""  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.navAvatar}
        // color='inherit'
        startIcon={<Avatar className={classes.navAvatar} sx={{ width: 35, height: 35 }} src='https://www.unigreet.com/wp-content/uploads/2020/04/Sweet-girl-dp-1024x999.jpg' ></Avatar>}>
        
        {/* <Badge badgeContent={4} color="primary"> */}
          {/* <NotificationsIcon color="inherit" sx={{color:'white'}} /> */}
          {/* <NotificationsIcon  /> */}
        {/* </Badge> */}
      </Button>
      
    
{/* <NotificationsActiveIcon sx={{color:'white'}}/> */}
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{dropDownProfile.map((data, i) => <MenuItem key={i}  onClick={handleClose}>
        <ListItemIcon> {data.icon}</ListItemIcon>
        <ListItemText> {data.label}</ListItemText>
        
      </MenuItem> )}
      </Menu>
    </Box>
  )
}

export default Profile