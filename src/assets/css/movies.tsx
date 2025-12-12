import styled from "styled-components";

export const GridMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
`;
export const MovieCard = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
`;

export const PosterMovie = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h1`
  margin: 10px 0 0;
  font-size: 14px;
  color: #f5f5f5;
`;

export const Rating = styled.h4`
  margin: 10px 0 0;
  font-size: 14px;
  color: #f5f5f5;
  display: inline-block;
`;

export const VoteAvg = styled(Rating)``;

export const MovieModal = styled.div`
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

export const ModalContent = styled.div`
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

export const CloseButton = styled.button`
  top: 10px;
  right: 15px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const InputSearch = styled.input`
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border: none;
`;

export const BtnSearch = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background: #e50914;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-left: 5px;
  `;
