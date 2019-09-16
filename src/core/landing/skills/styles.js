import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundGrey};
  display: flex;
  justify-content: center;
  min-height: 800px;
  width: 100%;
`;
