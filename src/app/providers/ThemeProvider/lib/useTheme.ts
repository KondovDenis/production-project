import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { defaults } from "lodash";



interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)



    const toggleTheme = () => {
	let newTheme: Theme

	switch(theme){
	    case Theme.DARK:
		newTheme = Theme.LIGHT
	    	break
	    case Theme.LIGHT:
		newTheme = Theme.DARK
	    	break
	    default:
		newTheme = Theme.LIGHT
	}
        

	document.body.className = newTheme
	localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        
        setTheme?.(newTheme)


    }

    return {theme: theme || Theme.LIGHT, 
            toggleTheme,
        }

}
