import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgroundGrey};
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  width: 100%;
`;

export const Overview = styled.p`
  color: ${props => props.theme.colors.text.default};
`;

export const SkillsSection = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;
