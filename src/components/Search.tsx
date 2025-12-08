import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import React, { useState } from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [movieSearch, setmovieSearch] = useState("");
  const [modeSearch, setmodeSearch] = useState(false);

  const token = import.meta.env.VITE_TOKEN;

  const fetchSearch = async () => {
    try {
      const response = await api.get<MovieProps>(`search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=${page}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      if (response.status === 200) {
        console.log(response.data)
        setmodeSearch(true);
        setMovies(response.data.results);
      } else {
        console.log("Fail loading data", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  return (
    <div>
      <div>
        <InputSearch type="text" id="srch-movie" placeholder="Search movie by title..." />
        <BtnSearch >Search</BtnSearch>

        {movies.length === 0 ? (
        <div>
            <p>No results found.</p>
        </div>
        ) : (
        <>
            <div>
              <div>
                {movies.map(movie => (
                  <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h1>${movie.title}</h1>
                    <h4>Rating: </h4><p>${movie.vote_average.toFixed(1)}</p>
                  </div>
                ))}
              </div>
            </div> 
        </> 
      )}   
      </div>
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

export default Search;