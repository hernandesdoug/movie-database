import styled from 'styled-components';

function Header() {
    return (
        <>
            <HeaderPage>
                <Title>Movie Database</Title>
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

export default Header;