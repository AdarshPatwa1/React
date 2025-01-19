import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// Class Component
class About extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount(){ // it is used to make API calls like useEffect()
        
    }


    render() {
        return (

            <div>
                <h1>About</h1>
                {/* <User name={"Adarsh"}/>  */}
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Adarsh"}/>
            </div>
        );
    }
}
// there are two phases - 1=>Render , 2=>commit
// Render -> constructor,render of all whether it is parent or child
// After that React updates DOM and refs then commit phase begin
// commit -> Mounting of all child then parents 



// Functional component
// const About = () => {
//     return (

//         <div>
//             <h1>About</h1>
//             {/* <User name={"Adarsh"}/>  */}

//             <UserClass name={"Adarsh"}/>
//         </div>
//     );
// };







export default About;
