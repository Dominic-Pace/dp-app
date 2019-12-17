import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.appBackground};
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  width: 100%;
`;

export const PortfolioSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 16px;
  width: 1000px;
`;

