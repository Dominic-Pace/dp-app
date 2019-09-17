import React from 'react';
import { withTheme } from 'styled-components';

import { Title } from '../../../components/styled';

import {
  Container,
  ContactSection,
} from './styles';

const ContactMe = ({ theme }) => {
  return (
    <Container id="contact">
      <Title borderColor={theme.colors.secondary} textColor={theme.colors.white}>Reach out to me</Title>
      <ContactSection>
        Contact Me
      </ContactSection>
    </Container>
  );
};

export default withTheme(ContactMe);
