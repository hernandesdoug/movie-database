
interface MovieProps {
    poster_path: string;
    title: string;
    vote_average: number;
    searchMovie: () => void;
}

function Movie({ }: MovieProps) {
    return (
        <>
        </>
    )
}

export default Movie;