import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding: 120px 0;
  width: 100%;
`;

export const ContactSection = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;
