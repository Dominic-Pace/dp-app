import styled, { css } from 'styled-components';

import { device } from '../../../utils/styles';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  margin-top: 24px;
  width: 33%;
  
  @media ${device.tablet} {
    width: 90%;
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding-bottom: 64px;
  padding-top: 180px;
  width: 100%;
  
  @media ${device.tablet} {
    padding: 0;
    padding-bottom: 48px;
    padding-top: 108px;
  }
`;

export const ContactSection = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
  
  @media ${device.tablet} {
    width: 100vw;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 8px;
  width: 33%;
  
  @media ${device.tablet} {
    width: 90%;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: -8px;
  padding: 12px 32px;
  text-transform: uppercase;
  width: fit-content;
  
  ${props => props.isDisabled && css`
    opacity: 0.4;
    pointer-events: none;
  `}
  
  @media ${device.tablet} {
    margin-right: 0;
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  height: 160px;
  margin: 0 auto;
  padding: 8px;
  resize: none;
  width: 33%;
  
  @media ${device.tablet} {
    width: 90%;
  }
`;

export const ThankYouText = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
`;
