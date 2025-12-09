import styled from 'styled-components';

interface CategoryProps {
    onChangeCategory: (category: string) => void;
}
function Category({ onChangeCategory }: CategoryProps) {

    return (
        <>
            <Container>
                <BtnCategory onClick={() => onChangeCategory("popular")}>Popular</BtnCategory>
                <BtnCategory onClick={() => onChangeCategory("now_playing")}>Now Playing</BtnCategory>
                <BtnCategory onClick={() => onChangeCategory("top_rated")}>Top Rated</BtnCategory>
                <BtnCategory onClick={() => onChangeCategory("upcoming")}>Upcoming</BtnCategory>
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