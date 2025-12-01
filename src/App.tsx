import Header from "../src/components/Header.tsx";
import Footer from "../src/components/Footer.tsx";
import Search from "../src/components/Search.tsx";
import MovieList from "./components/Movies.tsx";


function App() {
  
    return (
        <>
            <Header />
            <Search />
            <main>
                <div>
                    <button>Popular</button>
                    <button>Now Playing</button>
                    <button>Top Rated</button>
                    <button>Upcoming</button>
                </div>
                <div>
                
                    <div >
                        <MovieList />
                     </div>    
            
               
                
                </div>
                <div>
                    <button>Previous</button>
                    <span>1</span>
                    <button>Next</button>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default App;