import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText,Button } from '@mui/material'
import { useStyle } from '../dashboardStyles'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom'
const ListItemData = [{
    label: "DashBoard",link:'/dashboard/', icon: < DashboardIcon />},
    { label: "Blog Post", link:'/dashboard/blogpost', icon: < BookIcon />}, 
    { label: "Link 1", link:'/dashboard/link1', icon: < PostAddIcon />},
    { label: "Notification", link:'/dashboard/notification', icon: < NotificationsActiveIcon />},
    { label: "Logout", link:'/dashboard/logout', icon: < ExitToAppIcon/>},
]
const SideNavData = ({ handleDrawerClose }) => {
    const classes = useStyle()
  return (
      <>
          <List>
              {/* style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "green" };
          }}  */}
              {ListItemData.map((data, i) => (
                  <Button size='small' onClick={() => handleDrawerClose()}
                      className={classes.navButton}
                  >
                      <ListItem
                          className={classes.NavLinks}
                          key={i} component={NavLink}
                      to={data.link} exact 
                    //   activeClassName={classes.activeNavLink}
                          style={({ isActive }) => {
                              return { border: isActive ? "1px solid blue" : "" };
                          }} 
                    >
                      <ListItemIcon>{data.icon}</ListItemIcon>
                      <ListItemText>{data.label}</ListItemText>
                      </ListItem> 
                  </Button>
              ))}
             
      </List>
      </>
  )
}

export default SideNavData;