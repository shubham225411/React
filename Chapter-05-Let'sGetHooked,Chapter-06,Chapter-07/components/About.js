import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
const About = () =>{
    return (


        <div>
            <h2>About us Page</h2>
            <Outlet />
            <ProfileClassComponent args={"Shubham"} surname={"Kumar"}/>
        </div>
        

    )
}


export default About;
