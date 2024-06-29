import  {createContext, useState} from "react";
import { UserModel } from "../types/models";

interface AuthContext {
    login: (data: UserModel) => void;
    logout: () => void;
    getUser: () => UserModel;
    getRole: () => string;
    isLogged: () => boolean;
}

export const AuthStateContext = createContext<AuthContext>({} as AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<UserModel>({} as UserModel);

    const login = (data: UserModel) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        setUser({} as UserModel);
        localStorage.removeItem('user');
    }

    const getUser = () => {
        if (user.id) {
            return user;
        } else {
            const user = localStorage.getItem('user');
            if (user) {
                return JSON.parse(user);
            }
        }

        return {} as UserModel;
    }

    const getRole = () => {
        return getUser().role;
    }

    const isLogged = () => {
        return !!getUser().id;
    }

    return (
        <AuthStateContext.Provider value={{
            getUser, login, logout, getRole, isLogged
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}