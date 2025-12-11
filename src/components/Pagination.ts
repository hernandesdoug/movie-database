export interface PaginationProps {
  page: number;
  total_pages: number;
  onNext: () => void;
  onPrev: () => void;
}
