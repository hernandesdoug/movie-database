import styled from 'styled-components';

function Header() {
    return (
        <>
            <HeaderPage>
                <Title>Movie Database</Title>
                <nav>
                    <InputSearch type="text" id="srch-movie" placeholder="Search movie by title..." />
                    <BtnSearch >Search</BtnSearch>
                </nav>
            </HeaderPage>
        </>
    )
}
const HeaderPage = styled.header`
  margin: 10px 0 0;
  padding: 10px;
`;

const Title = styled.h1`
  width: 300px;
  text-align: center;
`;

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
export default Header;