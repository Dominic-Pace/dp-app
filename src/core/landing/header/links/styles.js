import styled, { css } from 'styled-components';

export const AnimatedLink = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 1px 1px 4px ${props => props.theme.colors.primary};
  transform: scale(1);
  transition: 0.6s ease-in transform;
  
  &:hover {
    color: ${props => props.theme.colors.white};
    transform: scale(1.05);
    transition: 0.4s ease-out transform; 
  }
`;

export const Container = styled.div`
  bottom: 0;
  position: absolute;
  height: 80px;
  transform: height 1s ease-in-out;
  width: 100%;
  z-index: 20;
  
  ${props => props.isFixed && css`
    height: 100px;
    position: fixed;
    transform: height 1s ease-in-out;
    top: 0;
  `}
`;

export const LinkSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: calc(50% - 100px);
`;

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
`;

export const LogoSpace = styled.div`
  height: 100%;
  width: 160px;
`;
