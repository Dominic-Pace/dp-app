import styled from 'styled-components';

export const Title = styled.h2`
  border-bottom: 3px solid ${props => props.borderColor || props.theme.colors.lightGrey};
  color: ${props => props.textColor || props.theme.colors.text.default};
  letter-spacing: 8px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing.l};
  padding-left: ${props => props.theme.spacing.xl};
  padding-right: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.l};
  text-transform: uppercase;
  width: max-content;
`;
