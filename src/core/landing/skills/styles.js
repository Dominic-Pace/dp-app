import styled from 'styled-components';

import { device } from '../../../utils/styles';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgroundGrey};
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  width: 100%;
  
  @media ${device.tablet} {
    padding: 0;
    padding-top: 108px;
	}
`;

export const Overview = styled.p`
  color: ${props => props.theme.colors.text.default};
  margin: 0 auto;
  max-width: 60%;
  
  @media ${device.tablet} {
    margin-bottom: 32px;
    max-width: 90%;
	}
`;

export const SkillsSection = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  
  @media ${device.tablet} {
    width: 90%;
	}
`;
