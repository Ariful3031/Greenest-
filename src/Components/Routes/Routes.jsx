import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout";
import HomePage from "../../Pages/HomePage";
import PlantsDetailLayout from "../../Layout/PlantsDetailLayout";
import Login from "../../Pages/Login";
import SignupPage from "../../Pages/SignupPage";

const router = createBrowserRouter([

    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('/Plants.json'),
            },
            {
                path: '/plants',
                element: <h1> This is Plants sections</h1>
            },
            {
                path: '/profile',
                element: <h1> This is  My Profile</h1>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignupPage></SignupPage>
            },
        ]
    },
    {
        path: '/view/details/:plantId',
        Component: PlantsDetailLayout,
        loader: () => fetch('/Plants.json'),
    }

])
export default router