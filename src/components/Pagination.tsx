import type { PaginationProps } from "./Pagination.ts";
import { BtnPagination, Container, NumberPage } from "../assets/css/pagination.tsx";

function Pagination({ page, totalPages, onNext, onPrev }: PaginationProps) {

    return (
        <>
            <Container>
                <BtnPagination disabled={page === 1} onClick={onPrev}>Previous</BtnPagination>
                <NumberPage>{page} of {totalPages}</NumberPage>
                <BtnPagination onClick={onNext}>Next</BtnPagination>
            </Container>
        </>
    )
}

export default Pagination;
