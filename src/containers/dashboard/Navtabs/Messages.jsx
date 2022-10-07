import React from 'react'
import { Box, Button, Avatar, ListItem, ListItemIcon, Menu, MenuItem, IconButton, Badge, ListItemText } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// import avatar from "../../../assets/img/avatar/avatar.jpg"
const dropDownMessage = [
    {label: 'King', icon: <Avatar src='https://www.unigreet.com/wp-content/uploads/2020/04/Sweet-girl-dp-1024x999.jpg' />
    },
    {label: 'Queen', icon: <Avatar src='https://www.unigreet.com/wp-content/uploads/2020/04/Sweet-girl-dp-1024x999.jpg' />
    },
    {label: 'Afg', icon: <Avatar src='https://www.unigreet.com/wp-content/uploads/2020/04/Sweet-girl-dp-1024x999.jpg' />
    },

]
const Message = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <IconButton aria-label="" id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'>
                

                <Badge badgeContent={3} color="primary">
                <MailOutlineIcon color="inherit" sx={{color:'white'}} />
                {/* <NotificationsIcon  /> */}
                 </Badge> 
            </IconButton>


            {/* <NotificationsActiveIcon sx={{color:'white'}}/> */}

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >{dropDownMessage.map((data, i) => <ListItem key={i} component={ListItem} onClick={handleClose}>
                <ListItemIcon> {data.icon}</ListItemIcon>&nbsp;&nbsp;&nbsp;
                <ListItemText primary={data.label} secondary={data.desc}></ListItemText>

            </ListItem>)}
            </Menu>
        </Box>
    )
}

export default Message