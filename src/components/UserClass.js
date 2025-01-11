 import React from "react";
 
 // class based component - it's a normal js class

 class UserClass extends React.Component {

    constructor(props){ // to receive argument from about page in class component
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "dummy photo",
            },
        };
    }


     async componentDidMount(){ // it is used to make API calls like useEffect()
        const data = await fetch("https://api.github.com/users/AdarshPatwa1");
        const json = await data.json();
        // console.log(json);
        
        this.setState({
            userInfo: json,
        });
    }


    componentWillUnmount() {
        // it is called when we switch the page. It is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
    }

    render() {

        // const {name} = this.props;
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact </h4>
            </div>
        )
    }
 }

 export default UserClass;