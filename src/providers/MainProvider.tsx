/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react";

interface Obj {
    [key: string]: any | Obj;
}

export const MainContext = createContext<{
    search: string, setSearch: (search: string) => void,
    sidebar:string, setSidebar: (sidebar: string) => void,
    screenSize: number, setScreenSize: (size: number) => void,
    largeScreen: boolean, setLargeScreen: (isLarge: boolean) => void,
    notifications: Obj[], setNotifications: (notifications: Obj[]) => void,
    messages: Obj[], setMessages: (messages: Obj[]) => void,
}>({
    search: '', setSearch: () => {return;},
    sidebar: '', setSidebar: () => {return;},
    screenSize: 0, setScreenSize: () => {return;},
    largeScreen: false, setLargeScreen: () => {return;},
    notifications: [], setNotifications: () => {return;},
    messages: [], setMessages: () => {return;},
});



export const MainProvider = ({ children } : { children: ReactNode}) => {

    const [search, setSearch] = useState<string>('');
    const [sidebar, setSidebar] = useState<string>('');

    const [screenSize, setScreenSize] = useState<number>(0);
    const [largeScreen, setLargeScreen] = useState<boolean>(false);

    const [notifications, setNotifications] = useState<Obj[]>([]);
    const [messages, setMessages] = useState<Obj[]>([]);

    return (
        <MainContext.Provider value={{
            sidebar, setSidebar,
            search, setSearch,
            screenSize, setScreenSize,
            largeScreen, setLargeScreen,
            notifications, setNotifications,
            messages, setMessages,
        }}>
            {children}
        </MainContext.Provider>
    );
};  