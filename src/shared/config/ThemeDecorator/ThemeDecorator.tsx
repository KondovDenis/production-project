import { Story } from "@storybook/react";
import { Theme } from "../../../app/providers/ThemeProvider/lib/ThemeContext";


 const ThemeDecorator = (theme:Theme) =>(StoryComponent:Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent></StoryComponent>
    </div>
)



export default ThemeDecorator
