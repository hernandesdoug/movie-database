import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import React, { useEffect, useState } from 'react';



const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [category, setCategory] = useState("popular");
    const [page, setPage] = useState(1);
    const [isModalOpen, setisModalOpen] = useState(false);

    const token = import.meta.env.VITE_TOKEN;

    const fetchMovies = async () => {
        try {
            const response = await api.get<MovieProps>(`movie/${category}?language=en-US&page=${page}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            if (response.status === 200) {
                console.log(response.data)
                setMovies(response.data.results);
            } else {
                console.log("Fail loading data", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page, category])

    return (
        <>
        {isModalOpen && <h1>Modal</h1>}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <h1>${movie.title}</h1>
                        <h4>Rating: </h4><p>${movie.vote_average.toFixed(1)}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Movies;