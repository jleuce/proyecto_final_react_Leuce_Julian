import { createContext, useState } from "react";
import {checkUser} from '../context/FunctionsFireBase'

const UserContext = createContext([]);

export default UserContext;

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loginOk, setLoginOk] = useState(false);

    const login = (usuarioInput,contraseñaInput) => {
        checkUser(usuarioInput,contraseñaInput,setUser,setLoginOk)
    }

    //funcion deslogin
    const deslogin = () => {
        setUser(null);
        setLoginOk(false);
    }

    const fUser={
        login,
        deslogin,
        user,
    }

    return (
        <UserContext.Provider value={fUser}>
            {children}
        </UserContext.Provider>
      );
    
}