import { createRoot } from 'react-dom/client'
import GlobalStyles from  "../GlobalStyles";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyles />
        <ToastContainer />
        <App />
    </>

)
