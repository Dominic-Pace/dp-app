import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.appBackground};
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  width: 100%;
`;

export const PortfolioSection = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;

