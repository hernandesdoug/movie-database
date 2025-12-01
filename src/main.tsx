import { createRoot } from 'react-dom/client'
import GlobalStyles from  "../GlobalStyles";
import App from "./App";

createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyles />
        <App />
    </>

)
