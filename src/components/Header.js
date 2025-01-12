import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom"; // to link the page
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {


    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();


    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render only once
    // if dependency array is [btnNameReact] => is called everytime brnNameReact is updated
    useEffect(()=>{

    }, []) ;
    
    return (
        <div className="Header" >
            <div className="logo-container" >
                <img 
                 className="logo"
                 src= {LOGO_URL}
                 />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                        </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>    
                    <li>
                        <Link to="/cart">Cart</Link>
                        </li>
                    <button 
                    className="login" 
                    onClick={()=>{
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");  

                    }}
                    >
                        {btnNameReact}
                        </button>

                </ul>
            </div>
        </div>
    )
}

export default Header;