import React, { Children } from "react";
import UserContext from "./userContext";

const UserContextProvider=({Children}) =>{
    const[user,setUser] = React.useState(null)
    return(
        <UserContext.Provide value={{user,setUser}}>
            {Children}
        </UserContext.Provide>
    )

}
export default UserContextProvider;