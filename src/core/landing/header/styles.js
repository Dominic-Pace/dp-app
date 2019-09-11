import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export const BackgroundImage = styled.div`
  background-image: url(https://aquilacommercial.com/wp-content/uploads/2018/12/Downtown-Austin.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;
`;

export const BackgroundOverlay = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
`;
