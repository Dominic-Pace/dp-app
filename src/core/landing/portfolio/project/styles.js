import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: 1;
  height: 250px;
  max-width: 34%;
  min-width: 33%;
`;
