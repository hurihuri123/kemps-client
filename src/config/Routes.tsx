import IRoute from "../types/IRoute";

// Components
import Home from "../components/home/home";

// Define all application routes
const routes: Array<IRoute> = [
    {
        path: '/',
        title: "Homepage",
        component: Home
    }
];


export default routes;