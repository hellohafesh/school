import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Aboutschool from "../Pages/Aboutschool/Aboutschool";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <Aboutschool></Aboutschool>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
]);


export default router;