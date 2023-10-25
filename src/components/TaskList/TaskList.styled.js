import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
