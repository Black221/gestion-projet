import { createContext, ReactNode, useState } from "react";
import { useAutoTheme } from "../hooks/useAutoTheme";

interface ThemeProps {
    theme: string;
    dark: boolean;
    touchRipple?: boolean;
    autoThemeDetection?: boolean;
    setTheme?(theme: string): void;
    setDark?(dark: boolean): void;
    setTouchRipple?(touchRipple: boolean): void;
    setAutoThemeDetection?(autoThemeDetection: boolean): void;
}


export const ThemeContext = createContext<ThemeProps>({
    theme: 'material',
    dark: true,
    touchRipple: true,
});

export const ThemeProvider = ({ children } : { children: ReactNode}) => {

    const [theme, setTheme] = useState('material');
    const [dark, setDark] = useState(false);
    const [touchRipple, setTouchRipple] = useState(true);
    const [autoThemeDetection, setAutoThemeDetection] = useState(true);
  
    const currentTheme = useAutoTheme(theme, autoThemeDetection);

    return (
        <ThemeContext.Provider value={{ 
            theme: currentTheme, setTheme,
            dark,  setDark,
            touchRipple, setTouchRipple,
            autoThemeDetection, setAutoThemeDetection
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
