import { Hidden,Box,Drawer} from '@mui/material'
import { useStyle } from './dashboardStyles'
import SideNavData from './Navtabs/SideNavData'
const SideNav = ({ mobileOpen, handleDrawerOpen, handleDrawerClose
}) => {
    // alert(mobileOpen)
    const classes = useStyle()
    const drawerWidth = 234;
  return (
            <>  <Box 
                  component="nav"
                  sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                  aria-label="mailbox folders"
              className={classes.drawer}
             
              >
            <Hidden   mdDown implementation='css'>
        
                  {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                  <Drawer
                     
                    //   container={Paper}
                      variant="temporary"
                      anchor={"left"}
                      open={mobileOpen}
                      onClose={handleDrawerOpen}
                      ModalProps={{
                          keepMounted: true, // Better open performance on mobile.
                      }}
                      sx={{
                          marginTop: '66px',
                        //   display: { xs: 'block', sm: 'none' },
                          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                      }}
                  >
                      <SideNavData handleDrawerClose={handleDrawerClose} />
                  </Drawer>
              </Hidden>
              <Hidden mdDown implementation='css'>
                  <Drawer
                      
                      variant="permanent"
                      sx={{
                        //   display: { xs: 'none', sm: 'block' },
                          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,marginTop:'66px' },
                      }}
                     
                      anchor={"left"}
                      open={mobileOpen}
                      onClose={handleDrawerOpen}
                    //   open
                      
                  >
                      <SideNavData handleDrawerClose={handleDrawerClose} />
                  </Drawer>
      </Hidden>
              </Box>
      </>
  )
}
export default SideNav;
