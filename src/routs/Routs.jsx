import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import AddCraftItems from "../pages/addCraftItems/AddCraftItems";
import MyArtAndCrafts from "../pages/MyArtAndCraft/MyArtAndCrafts";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ErrorPage from "../pages/eroorPage/ErrorPage";
import CraftDetails from "../pages/craftDetails/CraftDetails";
import UpdateCraft from "../pages/MyArtAndCraft/UpdateCraft";
import SubCetegory from "../pages/Home/subCategory/SubCetegory";
import ViewSubcategory from "../pages/viewSubcategory/ViewSubcategory";
import ViewMoreSub from "../pages/viewMoreSub/ViewMoreSub";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://art-and-craft-store-hazel.vercel.app/crafts')

            },

            {
                path: '/details/:id',
                element: <PrivateRoutes><CraftDetails></CraftDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://art-and-craft-store-hazel.vercel.app/craftdata/${params.id}`),

            },
            {
                path: '/subcategory',
                element: <SubCetegory></SubCetegory>,
                loader: () => fetch('https://art-and-craft-store-hazel.vercel.app/subcategorydata')

            },

            {
                path: '/view/:id',
                element: <ViewSubcategory></ViewSubcategory>,
                loader: () => fetch('https://art-and-craft-store-hazel.vercel.app/subcategorydata'),

            },
            {
                path: '/viewmore/:id',
                element: <PrivateRoutes><ViewMoreSub></ViewMoreSub>,</PrivateRoutes>,
                loader: ({ params }) => fetch(`https://art-and-craft-store-hazel.vercel.app/subdata/${params.id}`),
            },


            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },

            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },

            {
                path: '/allArtAndCraft',
                element: <PrivateRoutes> <AllArtAndCraft></AllArtAndCraft></PrivateRoutes>,
                loader: () => fetch('https://art-and-craft-store-hazel.vercel.app/crafts'),
            },


            {
                path: '/addCraftItems',
                element: <AddCraftItems></AddCraftItems>
            },

            {
                path: '/update/:id',
                element: <UpdateCraft></UpdateCraft>,




            },

            {
                path: '/myArtAndCraft',
                element: <MyArtAndCrafts></MyArtAndCrafts>,

            }
        ]
    },
]);
export default router;  