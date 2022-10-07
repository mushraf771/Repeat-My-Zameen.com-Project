import React from 'react'
import { Box, Button, Avatar,List, ListItem, ListItemIcon, Menu, MenuItem, IconButton, Badge, ListItemText } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStyle } from '../dashboardStyles';
const dropDownNotification = [{
    label: 'Adil',desc:'likes your feed ... '
},
    {
        label: 'yousaf', desc: 'likes your feed ... '
    },
    {
        label: 'Shahid', desc: 'likes your feed ... '
    },
    {
        label: 'Talha', desc: 'likes your feed ... '
    },

]
const Notification = () => {
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
            <Button aria-label="" id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
                >

                <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="inherit" sx={{color:'white'}} />
                {/* <NotificationsIcon  /> */}
                </Badge>
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
            ><List className={classes.navlist}>
                {dropDownNotification.map((data, i) => <ListItem key={i} component={ListItem} onClick={handleClose}>
                <ListItemIcon>
                        <Avatar sx={{ backgroundColor:'#f57c00'}}>{data.label[0].toUpperCase()}</Avatar>
                    </ListItemIcon>
                    
                <ListItemText primary={data.label} secondary={data.desc}></ListItemText>

                </ListItem>)}</List>
            </Menu>
        </Box>
    )
}

export default Notification