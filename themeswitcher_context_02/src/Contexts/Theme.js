import React from "react";
import { createContext , useContext} from "react";

export const ThemeContext = createContext({        //Step 1 = Create contecxt      
    themeMode : "light" ,
    darkTheme : () => {} ,
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext)
}