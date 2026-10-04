import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    if(localStorage.getItem("access_token") == null){
        return <Navigate to={"/login"}/>
    }
    return children
}

export default PrivateRoute
