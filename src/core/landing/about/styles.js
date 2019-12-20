import styled from 'styled-components';

import { device } from '../../../utils/styles';

import OliverImageSource from '../../../assets/img/oliver.jpeg';
import ProfileImageSource from '../../../assets/img/dp-avatar.jpg';

export const AboutSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing.xl};
  width: 1200px;
  
  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.appBackground};
  display: flex;
  flex-direction: column;
  padding: 180px 0;
  width: 100%;
  
  @media ${device.tablet} {
    padding: 0;
    padding-top: 108px;
	}
`;

export const Header = styled.h4`
  color: ${props => props.theme.colors.text.default};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.l};
  text-transform: uppercase;
`;

export const InfoSection = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.l};
`;

export const InfoText = styled.p`
  color: ${props => props.theme.colors.text.default};
  font-weight: 500;
  text-align: left;
`;

export const OliverImage = styled.div`
  background-image: url(${OliverImageSource});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  flex: 1;
  height: 150px;
  margin: auto;
  width: 150px;
`;

export const OliverImageContainer = styled.div`
  flex: 1;
  margin: auto;
  padding: ${props => props.theme.spacing.s} 0;
`;

export const ProfileImage = styled.div`
  background-image: url(${ProfileImageSource});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  flex: 1;
  height: 300px;
  margin: auto;
  width: 300px;
`;

export const ProfileImageContainer = styled.div`
  flex: 1;
  margin: auto;
`;

export const Title = styled.h2`
  border-bottom: 3px solid ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.black};
  letter-spacing: 8px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.xl};
  padding-right: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.l};
  text-transform: uppercase;
  width: max-content;
`;
