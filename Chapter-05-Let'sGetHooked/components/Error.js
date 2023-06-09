import { useRouteError } from "react-router-dom";
const Error = () =>{
    const error = useRouteError();
    console.log(error);
    return (
        <h2>
            Abye ja na bhutniii ke!!💩
            <p>{error.status+" : "+ error.statustext}</p>
        </h2>
    )
}

export default Error;