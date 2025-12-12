import Header from "../src/components/Header.tsx";
import Footer from "../src/components/Footer.tsx";
//import Search from "../src/components/Search.tsx";
import MovieList from "./components/Movies.tsx";



function App() {
    
    return (           
            <>
            <Header/>
            {/* <Search />    */}
            <MovieList />
            <Footer />
        </>     
    )
}
export default App;