import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import NormalLayout from "../Layout/NormalLayout";
import Aboutschool from "../Pages/Aboutschool/Aboutschool";
import Contact from "../Pages/Contact/Contact";
import Employee from "../Pages/Employee/Employee";
import ExEmployee from "../Pages/ExEmployee/ExEmployee";
import ExTeahers from "../Pages/ExTeahers/ExTeahers";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Notice/Notice";
import Result from "../Pages/Result/Result";
import Teachers from "../Pages/Teachers/Teachers";

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
                path: '/teachers',
                element: <Teachers></Teachers>
            },
            {
                path: '/exTeachers',
                element: <ExTeahers></ExTeahers>
            },
            {
                path: '/employee',
                element: <Employee></Employee>
            },
            {
                path: '/exEmployee',
                element: <ExEmployee></ExEmployee>
            },
            {
                path: '/notice',
                element: <Notice></Notice>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: '/result',
        element: <NormalLayout></NormalLayout>,
        children: [
            {
                path: '/result',
                element: <Result></Result>
            },
        ]
    }
]);


export default router;