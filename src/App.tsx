import Header from "../src/components/Header.tsx";
import Footer from "../src/components/Footer.tsx";
import Search from "../src/components/Search.tsx";
import MovieList from "./components/Movies.tsx";
import { useState } from "react";


function App() {
    const [modeSearch, setmodeSearch] = useState(false);
    return (           
            <>
            <Header/>
            <Search setmodeSearch={setmodeSearch}/>   
            {modeSearch === false && (<MovieList />)}
            <Footer />
        </>     
    )
}
export default App;