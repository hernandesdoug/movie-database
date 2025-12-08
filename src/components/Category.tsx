import styled from 'styled-components';
import React,  { useState } from 'react';


function Category() {
    const [category, setCategory] = useState("popular");
    return (
        <>
            <Container>
                <BtnCategory onClick={() => setCategory("popular")}>Popular</BtnCategory>
                <BtnCategory onClick={() => setCategory("now_playing")}>Now Playing</BtnCategory>
                <BtnCategory onClick={() => setCategory("top_rated")}>Top Rated</BtnCategory>
                <BtnCategory onClick={() => setCategory("upcoming")}>Upcoming</BtnCategory>
            </Container>
        </>
    )
}

const Container = styled.div`
  padding: 10px;
  text-align: left;
`;

const BtnCategory = styled(Container)`
 padding: 10px;
  border: none;
  border-radius: 5px;
  background: #e50914;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
`;
export default Category;