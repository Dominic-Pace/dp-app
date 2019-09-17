import styled, { css } from 'styled-components';

import HeaderBackground from '../../../assets/img/header.jpg';
import LogoImage from '../../../assets/img/logo.png';

export const BackgroundImage = styled.div`
  background-color: ${props => props.theme.colors.primary};
  background-image: url(${HeaderBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export const Divider = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 6px;
  margin: 0 auto;
  width: 400px;
`;

export const FixedHeaderBG = styled.div`
  background-color: ${props => props.theme.colors.primary};
  bottom: -10px;
  height: ${props => props.headerHeight}px;
  opacity: ${props => props.opacityAmount};
  pointer-events: none;
  position: absolute;
  transition: bottom 0.1s ease-in;
  width: 100%;
  
  ${props => (props.windowHeight - props.headerHeight + 10) - props.scrollPosition < 0 && css`
    opacity: 1;
    position: fixed;
    transition: opacity 0.25s ease-in;
    top: 0;
  `}
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 33vh;
  width: 100%;
`;

export const Logo = styled.div`
  background-color: ${props => props.theme.colors.quaternary};
  background-image: url(${LogoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid white;
  border-radius: 120px;
  height: 160px;
  margin: 0 auto;
  width: 160px;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  bottom: -80px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 1;
  
  ${props => props.isFixed && css`
    position: fixed;
    top: 0;
  `}
`;

export const Name = styled.h1`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: ${props => props.theme.spacing.l};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 4px ${props => props.theme.colors.primary};
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  letter-spacing: 8px;
  margin-top: ${props => props.theme.spacing.l};
  text-transform: uppercase;
  text-shadow: 1px 1px 4px ${props => props.theme.colors.primary};
`;
