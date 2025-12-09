  import api from "../services/api.ts";
  import type { MovieProps, Movie } from "./Movie.ts";
  import Pagination from "./Pagination.tsx";
  import React, { useState } from 'react';
  import styled from 'styled-components';

  const Search: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [movieSearch, setmovieSearch] = useState("");
    const [modeSearch, setmodeSearch] = useState(false);

    const token = import.meta.env.VITE_TOKEN;

    const fetchSearch = async (pageNumber = page) => {
      if (!movieSearch.trim()) return;
      try {
        const response = await api.get<MovieProps>(`search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=${pageNumber}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        if (response.status === 200) {
           setmodeSearch(true);
           setMovies(response.data.results);
           setPage(pageNumber);
        } else {
           console.log("Fail loading data", response.status);
        }
      } catch (error) {
         console.error("Unexpected error!", error);
      }
    };

    const handleNext = () => fetchSearch(page + 1);
    const handlePrev = () => {
      if (page > 1) fetchSearch(page - 1);
    };

    return (
      <div>
        <div>
          <InputSearch type="text" id="srch-movie" 
          placeholder="Search movie by title..." 
          value={movieSearch}
          onChange={(e) => setmovieSearch(e.target.value)}
          />
          <BtnSearch onClick={() => fetchSearch(1)}>Search</BtnSearch>
        </div>
        {modeSearch && (
          <>
          {movies.length === 0 ? (
            <NoResults>No results</NoResults>
          ) : (
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
          
            </>
        )}
        <Pagination page={page} onNext={handleNext} onPrev={handlePrev} />
        </>
        )} 
      </div>

    );
  }

  const InputSearch = styled.input`
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border: none;
  `;

  const BtnSearch = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background: #e50914;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-left: 5px;
  `;

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

  const NoResults = styled.p`
    grid-column: span 5;
    text-align: center;
  `;

  export default Search;