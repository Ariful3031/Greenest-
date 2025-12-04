import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout";
import HomePage from "../../Pages/HomePage";
import PlantsDetailLayout from "../../Layout/PlantsDetailLayout";
import Login from "../../Pages/Login";
import SignupPage from "../../Pages/SignupPage";
import PrivateRoute from "../../Context/PrivateRoute/PrivateRoute";
import ProfilePage from "../../Pages/ProfilePage";
import Plants from "../../Pages/Plants";
import AboutUs from "../../Pages/AboutUs";
import Support from "../../Pages/Support";
import Contact from "../../Pages/Contact";
import Error from "../../Pages/ErrorPage";
import ErrorPage from "../../Pages/ErrorPage";
import ErrorElementPage from "../../Pages/ErrorElementPage";


const router = createBrowserRouter([

    {
        path: '/',
        Component: HomeLayout,
        errorElement: <ErrorElementPage></ErrorElementPage> ,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('/Plants.json'),
            },
            {
                path: '/plants',
                element: <Plants></Plants>,
                loader: () => fetch('/Plants.json'),
            },
            {
                path: '/profile',
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignupPage></SignupPage>
            },
            {
                path: '/about-us',
                element: <PrivateRoute>
                    <AboutUs></AboutUs>
                </PrivateRoute>,
            },
            {
                path: '/support',
                element: <PrivateRoute>
                    <Support></Support>
                </PrivateRoute>,
            },
            {
                path: '/contact',
                element: <PrivateRoute>
                    <Contact></Contact>
                </PrivateRoute>,
            },

        ]
    },
    {
        path: '/view/details/:plantId',
        element: <PlantsDetailLayout></PlantsDetailLayout>,
        loader: () => fetch('/Plants.json'),
         errorElement: <ErrorElementPage></ErrorElementPage> ,
    },
    {
        path: "*",
        Component: ErrorPage
    }

])
export default router