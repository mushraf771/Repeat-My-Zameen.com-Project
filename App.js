import MyRoute from './Rutes'
import { useStyle } from './containers/dashboard/dashboardStyles';
import { Box } from '@mui/material';
// import RoutesDashboard from './containers/dashboard/RoutesDashboard';
function App() {
  const classes = useStyle()
  return (
    <>
      <Box >
        <MyRoute />
        {/* <RoutesDashboard/> */}
        
      </Box>
    </>
  );
}
export default App;
