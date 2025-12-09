import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import Pagination from "./Pagination.tsx";
import type { CategoryProps } from "./Category.ts";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Movies: React.FC = ({category}) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    const token = import.meta.env.VITE_TOKEN;

    const fetchMovies = async (pageNumber = page, ) => {
        try {
            const response = await api.get<MovieProps>(`movie/${category}?language=en-US&page=${pageNumber}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            if (response.status === 200) {
                console.log(response.data)
                setMovies(response.data.results);
                setPage(pageNumber);
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

    const handleNext = () => fetchMovies(page + 1);
    const handlePrev = () => {
      if (page > 1) fetchMovies(page - 1);
    };

    return (
        <>
        <GridMovies>
                {movies.map(movie => (
                    <MovieCard key={movie.id}>
                        <PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/>
                        <MovieTitle>${movie.title}</MovieTitle>
                        <Rating>Rating: </Rating><VoteAvg>${movie.vote_average.toFixed(1)}</VoteAvg>
                    </MovieCard>
                ))}
        </GridMovies>
         <Pagination page={page} onNext={handleNext} onPrev={handlePrev} />
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