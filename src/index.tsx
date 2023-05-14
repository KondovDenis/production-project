import {render} from "react-dom";
import Counter from "./components/Counter";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ThemeProvider from './theme/ThemeProvider';



const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App></App>
        </ThemeProvider>
    </BrowserRouter>,
        )



