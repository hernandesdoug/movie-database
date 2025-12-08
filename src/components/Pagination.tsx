import styled from "styled-components";
function Pagination() {

    return (
        <>
            <Container>
                <BtnPagination>Previous</BtnPagination>
                <NumberPage>1</NumberPage>
                <BtnPagination>Next</BtnPagination>
            </Container>
        </>
    )
}

const Container = styled.div`
    text-align: center;
  margin: 20px 0;
`;

const BtnPagination = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background: #444;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #666;
  }
`;

const NumberPage = styled(BtnPagination)`
    margin: 0 10px;
`;
export default Pagination;
