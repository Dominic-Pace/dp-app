import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { Title } from '../../../components/styled';

import {
  ButtonContainer,
  Container,
  ContactSection,
  Input,
  SubmitButton,
  TextArea,
} from './styles';

const ContactMe = ({ theme }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  return (
    <Container id="contact">
      <Title borderColor={theme.colors.secondary} textColor={theme.colors.white}>Reach out to me</Title>
      <ContactSection>
        <Input onChange={e => setNameValue(e.target.value)} placeholder="Name" value={nameValue} />
        <Input onChange={e => setEmailValue(e.target.value)} placeholder="Email" value={emailValue} />
        <TextArea onChange={e => setMessageValue(e.target.value)} placeholder="Message" value={messageValue} />
        <ButtonContainer>
          <SubmitButton>Submit</SubmitButton>
        </ButtonContainer>
      </ContactSection>
    </Container>
  );
};

export default withTheme(ContactMe);
