import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                loader: ()=> fetch('/news.json'),
                element: <CategoryNews></CategoryNews>,
            },
        ]
    },
    {
        path:'/auth',
        element: <h2> Authentication</h2>
    },
    {
        path:'/news',
        element: <h2> News Layout </h2>
    },
    {
        path:'/*',
        element: <h2> Error 404</h2>
    }
])

export default router;