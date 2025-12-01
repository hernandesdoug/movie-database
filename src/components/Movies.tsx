import api from "../services/api.ts";
import type { MovieProps } from "./Movie.ts";
import React, { useEffect, useState } from 'react';


    let category = "popular";
    let page = 1;
    const Movies: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps[]>([]);


    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjE0OTEzMTE2YzQ1YmYxNmNkNTUwZjAzNDkwNzgzNCIsIm5iZiI6MTc1NjEyNDE0NC40MTgsInN1YiI6IjY4YWM1M2YwNjc0MjNhYWU1YzZjZWFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vTUiCDlmoSNnGkHHvFo8INxf-DBltsmToBnNwJC2nuE";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get<MovieProps[]>(`movie/${category}?language=en-US&page=${page}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                if (response.status === 200) {
                    console.log(response.data)
                    setMovies(response.data);
                } else {
                    console.log("Fail loading data", response.status);
                }
            } catch (error) {
                console.error("Unexpected error!", error);
            }
        };
        fetchMovies();
    }, [])

    return (
        <>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" />
                        <h1>${movie.title}</h1>
                        <h4>Rating: </h4><p>${movie.vote_average.toFixed(1)}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Movies;