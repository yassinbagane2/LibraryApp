import axios from 'axios';
import useAuth from'./useAuth';

export const useRefreshToken = () => {
    const {setAuth} = useAuth();
    const refresh = async () => {
        const response = await axios.get('http://localhost:8080/refresh',{
            withCredentials: true
        });
        setAuth(prev => {
            console.log("from refresh hook",JSON.stringify(prev?.accessToken));
            console.log("response data:",response.data);
            return {...prev, accessToken: response.data}
        });
        return response.data
    }


    return refresh;

} 

export default useRefreshToken;