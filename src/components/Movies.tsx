import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import Pagination from "./Pagination.tsx";
import Category from "./Category.tsx";
import React, { useEffect, useState } from 'react';
import {GridMovies, MovieCard, PosterMovie, MovieTitle, Rating, 
        MovieModal, ModalContent, VoteAvg, CloseButton, InputSearch,
        BtnSearch, NoResults} from "../assets/css/movies.tsx";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieSearch, setMovieSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("popular");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchSearch = async (pageNumber = page) => {
    if (!movieSearch.trim()) return;
    try {
      const response = await api.get<MovieProps>(`search/movie`,
        {
          params: {
            language: `en-US`,
            page: pageNumber,
            include_adult: false,
            query: movieSearch
          }
        })
      if (response.status === 200) {
        setMovies(response.data.results);
        setPage(pageNumber);
        setTotalPages(response.data.total_pages);
      } else {
        console.log("Fail loading data", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  const fetchMovies = async (pageNumber = page) => {
    try {
      const response = await api.get<MovieProps>(`movie/${category}`,
        {
          params: {
            language: `en-US`,
            page: pageNumber,
            include_adult: false
          }
        })
      if (response.status === 200) {
        setMovies(response.data.results);
        setPage(pageNumber);
        setTotalPages(response.data.total_pages);
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

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div>
        <InputSearch type="text" id="srch-movie"
          placeholder="Search movie by title..."
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
        />
        <BtnSearch onClick={() => fetchSearch(1)}>Search</BtnSearch>
      </div>
      <Category onChangeCategory={setCategory} />
    
          {movies.length === 0 ? (
            <NoResults>No results</NoResults>
          ) : (
      <GridMovies>
        {movies.map(movie => (
          <MovieCard key={movie.id}
            onClick={() => openModal(movie)}>
            <PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <MovieTitle>{movie.title}</MovieTitle>
            <Rating>Rating: </Rating><VoteAvg>{movie.vote_average.toFixed(1)}</VoteAvg>
          </MovieCard>
        ))}
      </GridMovies>
      )}
      <Pagination page={page} totalPages={totalPages} onNext={handleNext} onPrev={handlePrev} />
      {showModal && selectedMovie && (
        <MovieModal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h2>{selectedMovie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
            <p><strong>Rating:</strong> {selectedMovie.vote_average.toFixed(1)}</p>
            <p><strong>Overview:</strong> {selectedMovie.overview}</p>
            <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
          </ModalContent>
        </MovieModal>
      )}
    </>
  )
}

export default Movies;