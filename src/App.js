import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"; // takes some configuaration like linking a path 
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking - break down app into smaller chunks ex-> small files not only one big file
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const Grocery = lazy(() => import("./components/Grocery")); // now it is not bundled in main index.js. it gets new js file when we load the page. now grocery.js is a seperate bundle 
const About = lazy(() => import("./components/About"))


const Applayout = () => {


    const[userName, setUserName] = useState();
    useEffect(() => {
        const data= {
            name: "Adarsh",
        }
        setUserName(data.name);
    },[])



    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app" >
            <Header />
            
            <Outlet /> 
            {/* contains all the condition of appRouter  */}
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

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
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>, // if "/about" then header and About
            },
            {
                path: "/contact",
                element: <Contact/>, // if "/contact" then header and Contact
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>, // if "/grocery" then header and Contact  Suspense used b/w curr page and grocery page to load it 
            },
            {
                path: "/restaurant/:resId", // :resId is dynamic id change acc to restaurant
                element: <RestaurantMenu/>, // if "/contact" then header and Contact
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);