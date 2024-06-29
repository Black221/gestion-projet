import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";


export default function IsAuth () {

    const { isLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged()) {
            navigate('/app');
        }
    }, [isLogged, navigate]);

    
    return <Outlet />
}