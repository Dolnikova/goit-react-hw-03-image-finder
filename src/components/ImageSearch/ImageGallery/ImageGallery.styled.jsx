import styled from 'styled-components';

export const ImageHolder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 50px 0;
  justify-content: center;
`;

export const ImageItem = styled.li`
  :not(:last-child) {
    margin: 0 10px 10px 0;
  }
`;
