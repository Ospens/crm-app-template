import { Navigate } from "react-router-dom"

const PublicRoute = ({children}) => {

    if(localStorage.getItem("access_token") !== null){
        return <Navigate to={"/"}/>
    }
    return children
}

export default PublicRoute
