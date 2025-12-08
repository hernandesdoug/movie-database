import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [category, setCategory] = useState("popular");
    const [page, setPage] = useState(1);

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
    
        <GridMovies>
            <MovieCard>
                {movies.map(movie => (
                    <div key={movie.id}>
                        <PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/>
                        <MovieTitle>${movie.title}</MovieTitle>
                        <Rating>Rating: </Rating><VoteAvg>${movie.vote_average.toFixed(1)}</VoteAvg>
                    </div>
                ))}
            </MovieCard>
        </GridMovies>
        </>
    )
}
const GridMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
`;

const PosterMovie = styled.img`
 width: 100%;
  height: auto;
`;

const MovieTitle = styled.h1`
  margin: 10px 0 0;
  font-size: 14px;
  color: #f5f5f5;
`;

const Rating = styled.h4`
  margin: 10px 0 0;
  font-size: 14px;
  color: #f5f5f5;
  display: inline-block;
`;

const VoteAvg = styled(Rating)``;

export default Movies;