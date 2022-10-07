
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import AdminNav from '../containers/dashboard/AdminNav'
import { Box, } from '@mui/material'
// import DashboardLeftDrawer from '../containers/dashboard/DashboardLeftNav'
import { useStyle } from '../containers/dashboard/dashboardStyles'
import SideNav from '../containers/dashboard/SideNav'
import { useState } from 'react'
// import MyRoute from '../Rutes'
// import RoutesDashboard from '../containers/dashboard/RoutesDashboard'
const Dashboard = () => {
    const classes = useStyle();
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen)
    }
    const handleDrawerClose = () => {
        setMobileOpen(false)

    }
    return (
        <div>
            <CssBaseline />
            {/* <div> */}
            <AdminNav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} />
            {/* </div> */}
            {/* <div> */}
            <SideNav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            {/* </div> */}
            <Box className={classes.wrapper}>
                <Outlet />
            </Box>
        </div>
    )
}
export default Dashboard;