import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const BtnPagination = styled.button`
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

export const NumberPage = styled(BtnPagination)`
    margin: 0 10px;
`;
