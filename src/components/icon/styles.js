import styled from 'styled-components';

export const Link = styled.a`
  cursor: pointer;
  transform: scale(1);
  transition: 0.5s transform ease-in;

  &:hover {
    transform: scale(1.08);
    transition: 0.25s transform ease-out;
  }
`;
