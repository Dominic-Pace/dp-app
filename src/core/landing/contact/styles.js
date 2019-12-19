import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  margin-top: 24px;
  width: 33%;
`;

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
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
`;

export const Input = styled.input`
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 8px;
  width: 33%;
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
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  height: 160px;
  margin: 0 auto;
  padding: 8px;
  resize: none;
  width: 33%;
`;
