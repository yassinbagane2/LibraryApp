import { useContext } from "react";
import AuthContext from '../store/auth-context'

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;