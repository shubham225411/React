//*  Class Based components are normal js class at the end of the day
// TODO React class component lifecycle- first of all the constructor is called, then rendered , then componentdidMount
// just like functional component we used to make api calls after rendering the component to make the application faster, 
// in the same way here we will make api calls inside componentdidmount bcz in this way it will be called afer the rendering
import React from "react";

class ProfileClassComponent extends React.Component{

    constructor(props){
        super(props)

        // decalring a local state variable in class based component
        // TODO In Calss Based Component, we always declare the state variable inside the constructor
    this.state = {
            count: 0,
            count2: 2
    }
}
componentDidMount(){
    //best place to make api calls
}
    render(){
        return (
            <>
            <h1>I am a class Based component!.</h1>
            <h2>My name is {this.props.args} {this.props.surname}</h2>
            <h3>printing state variable {this.state.count}{this.state.count2}</h3>
                {/* below is how we change the value of state variable in class based component */}
            <button onClick={()=> this.setState({count:1, count2: 3})}>setCount</button>
            </>
        )
    }
}


export default ProfileClassComponent;