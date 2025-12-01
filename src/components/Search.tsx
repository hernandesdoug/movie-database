import styled from 'styled-components';

function Search() {

    return (
        <>
          <InputSearch type="text" id="srch-movie" placeholder="Search movie by title..." />
         <BtnSearch >Search</BtnSearch>
        </>
    )
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