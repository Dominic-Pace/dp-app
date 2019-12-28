import styled from 'styled-components';

import { device } from '../../../../utils/styles';

export const BackgroundImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ColorOverlay = styled.div`
  align-items: center;
  background-color: white;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: 0.5s opacity ease-in-out;
  width: 100%;
  
  &:hover {
    opacity: 0.95;
    transition: 0.5s opacity ease-in-out;
    
    .company-name {
      top: 23%;
      transition: 0.5s top ease-out;
    }
    
    .learn-more-btn {
      transform: scale(1);
      transition: 0.5s transform ease-out;
      
      &:hover {
        transform: scale(1.1);
        transition: 0.25s transform ease-in;
      }
    }
    
    .technologies-used {
      bottom: 23%;
      transition: 0.5s bottom ease-out;
    }
  }
`;

export const Container = styled.div`
  border: 1px solid gainsboro;
  display: flex;
  flex: 1;
  height: 250px;
  max-width: 34%;
  min-width: 30%;
  margin: 8px;
  position: relative;
  
  @media ${device.tablet} {  
    width: 90%;
    flex: auto;
    margin: 8px auto;
    max-width: 90%;
  }
`;

export const LearnMoreButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
  cursor: pointer;
  height: fit-content;
  padding: 10px 20px;
  text-transform: uppercase;
  transform: scale(0.2);
  transition: 0.5s transform ease-in;
`;

export const Name = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  transition: 0.5s top ease-in;
`;

export const TechText = styled.span`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 14px;
  margin-right: 4px;
`;

export const TechUsed = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  position: absolute;
  bottom: 0;
  text-align: center;
  transition: 0.5s bottom ease-in;
  width: 80%;
`;

