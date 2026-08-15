import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { HomePage } from "../components/landing_page/home/HomePage.jsx";
import { Signup } from "../components/landing_page/signup/Signup.jsx";
import {About} from "../components/landing_page/about/About.jsx";
import { Support } from "../components/landing_page/support/Support.jsx";
import { PricingPage } from "../components/landing_page/pricing/PricingPage.jsx";
import {  Products } from "../components/landing_page/products/Products.jsx";
import Login from "../pages/Login.jsx"
import SignupPage from "../pages/signup.jsx"


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>,

            },
            {
                path:"/login",
                element:<Login/>
            },
            {
               path:"/signup",
               element:<SignupPage/>
            },
            {
              path:"/signuppage",
              element:<Signup/>
            },
            {
              path:"/about",
              element:<About/>
            },
            {
              path:"/pricing",
              element:<PricingPage/>
            },
            {
                path:"/support",
                element:<Support/>
            },
            {
                path:"/product",
                element:<Products></Products>
            }
        ],

    }
])
export default router;