import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"; // takes some configuaration like linking a path 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const Applayout = () => {
    return (
        <div className="app" >
            <Header />
            
            <Outlet /> 
            {/* contains all the condition of appRouter  */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [ // children routes
            {
                path: "/",
                element: <Body/>, // if "/" then header and Body
            },
            {
                path: "/about",
                element: <About/>, // if "/about" then header and About
            },
            {
                path: "/contact",
                element: <Contact/>, // if "/contact" then header and Contact
            },
            {
                path: "/restaurant/:resId", // :resId is dynamic id change acc to restaurant
                element: <RestaurantMenu/>, // if "/contact" then header and Contact
            },
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);