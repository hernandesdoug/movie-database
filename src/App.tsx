import Header from "../src/components/Header.tsx";
import Footer from "../src/components/Footer.tsx";
import Search from "../src/components/Search.tsx";
import MovieList from "./components/Movies.tsx";
import Pagination  from "./components/Pagination.tsx";
import Category from "./components/Category.tsx";


function App() {
 
    return (

            
            <>
            <Header />
            <Search />
            <Category />    
            <MovieList />
            <Pagination />    
            <Footer />
        </>

          
            
    )
}
export default App;