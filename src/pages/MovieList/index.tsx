import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";

function MovieList() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <button>Popular</button>
                    <button>Now Playing</button>
                    <button>Top Rated</button>
                    <button>Upcoming</button>
                </div>
                <div>

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
export default MovieList;