import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: flex;
  height: ${props => props.theme.spacing.xxl};
  justify-content: center;
  padding: 0 ${props => props.theme.spacing.m};
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.white};
  margin: 0 ${props => props.theme.spacing.xs};
  transform: scale(1);
  transition: transform 0.75s ease;
   
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease; 
  }
`;
