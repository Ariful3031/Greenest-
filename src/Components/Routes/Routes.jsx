import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout";
import HomePage from "../../Pages/HomePage";
import PlantsDetailLayout from "../../Layout/PlantsDetailLayout";
import Login from "../../Pages/Login";
import SignupPage from "../../Pages/SignupPage";
import PrivateRoute from "../../Context/PrivateRoute/PrivateRoute";
import ProfilePage from "../../Pages/ProfilePage";


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

        ]
    },
    {
        path: '/view/details/:plantId',
        element:
            <PrivateRoute>
                <PlantsDetailLayout></PlantsDetailLayout>
            </PrivateRoute>,
        loader: () => fetch('/Plants.json'),
    }

])
export default router