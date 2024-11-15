import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styled from 'styled-components/native';

// Styled Components for Header
const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.Image`
  width: 90px;
  height: 30px;
  object-fit: contain;
`;

const IconContainer = styled.View`
  flex-direction: row;
  margin-top: 3px;
`;

const IconButton = styled(TouchableOpacity)`
  margin-left: ${props => (props.applyMargin ? '14px' : '0px')};
`;

const StyledIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const BackButtonIcon = styled(StyledIcon)`
  margin-right: auto;
`;

const TitleText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const Header = ({type}) => {
  if (type === 'main') {
    return (
      <HeaderContainer>
        <Logo source={require('../assets/images/header/logo.png')} />
        <IconContainer>
          <IconButton
            onPress={() => {
              //TODO: 즐겨찾기 버튼
            }}>
            <StyledIcon
              source={require('../assets/images/header/heart-icon.png')}
            />
          </IconButton>
          <IconButton
            applyMargin={true}
            onPress={() => {
              //TODO: 새로 만들기 버튼
            }}>
            <StyledIcon
              source={require('../assets/images/header/pencil-icon.png')}
            />
          </IconButton>
          <IconButton
            applyMargin={true}
            onPress={() => {
              //TODO: 설정 버튼
            }}>
            <StyledIcon
              source={require('../assets/images/header/settings-icon.png')}
            />
          </IconButton>
        </IconContainer>
      </HeaderContainer>
    );
  } else if (type === 'detail') {
    return (
      <HeaderContainer>
        <IconButton
          onPress={() => {
            //TODO: 뒤로가기 버튼
          }}>
          <BackButtonIcon
            source={require('../assets/images/header/back-icon.png')}
          />
        </IconButton>
        <TitleText>타이머 제목</TitleText>
        <IconButton
          onPress={() => {
            //TODO: 즐겨찾기 버튼
          }}>
          <StyledIcon
            source={require('../assets/images/header/heart-icon.png')}
          />
        </IconButton>
      </HeaderContainer>
    );
  }
};

export default Header;
