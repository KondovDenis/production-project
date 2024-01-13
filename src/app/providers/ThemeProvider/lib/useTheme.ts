import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)



    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK? Theme.LIGHT : Theme.DARK
        

	document.body.className = newTheme
	localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        
        setTheme?.(newTheme)


    }

    return {theme: theme || Theme.LIGHT, 
            toggleTheme,
        }

}
