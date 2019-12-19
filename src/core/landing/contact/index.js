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
  ThankYouText,
} from './styles';

const ContactMe = ({ theme }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [hasUserReachedOut, setHasUserReachedOut] = useState(false);
  const [messageValue, setMessageValue] = useState('');

  const handleEmailSend = () => {
     window.emailjs.send(
        'gmail', 'send_contact_email',
       {
         content: messageValue,
         fromEmail: emailValue,
         fromName: nameValue,
       }
      ).then(res => {
       setHasUserReachedOut(true);
      })
      // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  };

  if (hasUserReachedOut) {
    return (
      <Container id="contact">
        <Title borderColor={theme.colors.secondary} textColor={theme.colors.white}>Reach out to me</Title>
        <ContactSection>
          <ThankYouText>
            Thank you for reaching out! I will get back to you shortly.
          </ThankYouText>
        </ContactSection>
      </Container>
      )
  }
  return (
    <Container id="contact">
      <Title borderColor={theme.colors.secondary} textColor={theme.colors.white}>Reach out to me</Title>
      <ContactSection>
        <Input onChange={e => setNameValue(e.target.value)} placeholder="Name" value={nameValue} />
        <Input onChange={e => setEmailValue(e.target.value)} placeholder="Email" value={emailValue} />
        <TextArea onChange={e => setMessageValue(e.target.value)} placeholder="Message" value={messageValue} />
        <ButtonContainer>
          <SubmitButton isDisabled={!nameValue || !emailValue || !messageValue} onClick={handleEmailSend}>Submit</SubmitButton>
        </ButtonContainer>
      </ContactSection>
    </Container>
  );
};

export default withTheme(ContactMe);
