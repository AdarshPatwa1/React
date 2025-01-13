import { useState } from "react";
import { use } from "react"

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location</h3>
            <h4>Contact</h4>
        </div>
    )
}

export default User;