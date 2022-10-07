import { useRoutes } from "react-router-dom";
import Error404 from "../features/Error404";
import Dashboards from "./Body/dashboard";
import Link from "./Body/Link";
import BlogPost from "./Body/BlogPost";
import Notification from "./Body/Notification";
import Dashboard from "../../pages/Dashboard";
import Logout from "./Body/Logout";
const RoutesDashboard = () => {
    let routes = useRoutes([
        { path: "/dashboards", element: < Dashboards /> },
        {
            path: "/dashboard", element: < Dashboard />
            , children: [
                { path: "blogpost", element: < BlogPost /> },
                { path: "notification", element: < Notification /> },
                { path: "logout", element: < Logout /> },
                { path: "link1", element: < Link /> }
            ]
        },
        { path: "*", element: < Error404 /> }
    ])
    return routes
};
export default RoutesDashboard;