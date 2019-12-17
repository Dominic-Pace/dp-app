import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.appBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PortfolioSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-top: 16px;
  width: 1000px;
`;

