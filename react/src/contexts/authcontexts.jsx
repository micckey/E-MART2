import { createContext, useContext, useEffect, useState } from "react";
import axiosauth from "../assets/axiosauth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const csrf = () => axiosauth.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axiosauth.get('/api/user');
        setUser(data);
    }

    const login = async ({ ...data }) => {
        await csrf();
        setErrors([]);
        try {
            await axiosauth.post('/login', data)
            await getUser();
            navigate('/dashboard')
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const register = async ({ ...data }) => {
        await csrf();
        setErrors([]);
        try {
            await axiosauth.post('/register', data)
            await getUser();
            navigate('/dashboard')
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const logout = () => {
        axiosauth.post('/logout').then(() => {
            setUser(null);
        })
    }

    useEffect(() => {
        if(!user){
          getUser();
        }
      }, [])

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
        {children}
    </AuthContext.Provider>

}

export default function useAuthContext(){
    return useContext(AuthContext);       
}