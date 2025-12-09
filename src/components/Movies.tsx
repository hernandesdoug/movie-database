import api from "../services/api.ts";
import type { MovieProps, Movie } from "./Movie.ts";
import Pagination from "./Pagination.tsx";
import Category from "./Category.tsx";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("popular");
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useState(false);

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
        <Category onChangeCategory={setCategory} />
        <GridMovies>
                {movies.map(movie => (
                    <MovieCard key={movie.id} 
                    onClick={() => openModal(movie)}>
                        <PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <Rating>Rating: </Rating><VoteAvg>{movie.vote_average.toFixed(1)}</VoteAvg>
                    </MovieCard>
                ))}
        </GridMovies>
         <Pagination page={page} onNext={handleNext} onPrev={handlePrev} />
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

const MovieModal = styled.div`
  display: flex;
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ModalContent = styled.div`
 background: #222;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  color: #fff;
  position: relative;

  img {
    height: 400px;
    border-radius: 6px;
  }

  h2 {
    margin: 15px 0 10px;
  }
  
  p {
    margin: 8px 0;
  }

`;

const CloseButton = styled.button`
  top: 10px;
  right: 15px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;
export default Movies;