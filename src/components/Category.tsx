import styled from 'styled-components';

interface CategoryProps {
    onChangeCategory: (category: string) => void;
}
function Category({ onChangeCategory }: CategoryProps) {

    return (
        <>
            <Container>
                <button onClick={() => onChangeCategory("popular")}>Popular</button>
                <button onClick={() => onChangeCategory("now_playing")}>Now Playing</button>
                <button onClick={() => onChangeCategory("top_rated")}>Top Rated</button>
                <button onClick={() => onChangeCategory("upcoming")}>Upcoming</button>
            </Container>
        </>
    )
}

const Container = styled.div`
  padding: 10px;
  text-align: left;

 button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #e50914;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
 }
  
`;
export default Category;