import { Link } from "react-router-dom";

const     Error =()=> {
    return (
        <div className=" bg-items  d-flex justify-content-center">



           <div>
           <p className="p-5 display-1">404 ERROR</p>
             <h1 className="text-danger ">Oops! You seem to be lost.</h1>
            <p  className="text-success ">Here are some helpful links:</p>
            <Link   className="text-success " to='/'>Home</Link>
            </div>
        </div>
    )
}
export default Error;