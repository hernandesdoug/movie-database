import styled from "styled-components";
import type { PaginationProps } from "./Pagination.ts";

function Pagination({ page, total_pages, onNext, onPrev }: PaginationProps) {

    return (
        <>
            <Container>
                <BtnPagination disabled={page === 1} onClick={onPrev}>Previous</BtnPagination>
                <NumberPage>{page} of {total_pages}</NumberPage>
                <BtnPagination onClick={onNext}>Next</BtnPagination>
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
