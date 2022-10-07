import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
import Homes from "./pages/Homes";
import Shops from "./pages/Shops";
import Plots from "./pages/Plots";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import Layout from "./Layout";
import MyMaps from "./pages/MyMaps";
import Signin from "./pages/accounts/Signin";
import Signup from "./pages/accounts/Signup";
import PropertyDetails from "./containers/listinings/PropertyDetails";
import PrivateRoute from "./containers/listinings/privateRoute";
import Error404 from "./containers/features/Error404";
import PasswordResetEmail from "./pages/accounts/PasswordResetEmail";
import PasswordResetChange from "./pages/accounts/PasswordResetChange";
import Dashboards from "./containers/dashboard/Body/dashboard";
import Link from "./containers/dashboard/Body/Link";
import BlogPost from "./containers/dashboard/Body/BlogPost";
import Notification from "./containers/dashboard/Body/Notification";
import Logout from "./containers/dashboard/Body/Logout";
import Dashboard from './pages/Dashboard'
const MyRoute = () => {
    let routes = useRoutes([
        { path:"/", element:< Layout />, children: [
            { path: '/', element: < Home /> },
            { path: '/homes', element: < Homes /> },
            { path: 'plots', element: < Plots /> },
            { path: 'maps', element: < MyMaps /> },
            { path: 'shops', element: < Shops /> },
            { path: 'signup', element: < Signup /> },
            { path: 'login', element: < Signin /> },
        ]
        },
        {
            path: "private", element: < PrivateRoute />, children: [
                { path: 'property_details/:id', element: <PropertyDetails /> },
                { path: 'addproperty', element: < AddProperty /> },
                { path: 'passwordresetemail', element: < PasswordResetEmail /> },
                { path: 'passwordresetchange', element: < PasswordResetChange /> },
        ]
        },
        { path: "/dashboards", element: < Dashboards /> },
        {
            path: "/dashboard", element: < Dashboard />
            , children: [
                { path: "/dashboard", element: < Dashboards /> },
                { path: "blogpost", element: < BlogPost /> },
                { path: "notification", element: < Notification /> },
                { path: "logout", element: < Logout /> },
                { path: "link1", element: < Link /> }
            ]
        },
        { path:"*" ,element:< Error404 /> }
    ])
    return routes
};
export default MyRoute;