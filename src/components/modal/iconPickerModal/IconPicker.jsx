import {useState} from 'react';
import styled from 'styled-components/native';

const IconPicker = () => {
  const [icon, setIcon] = useState('🌮'); // 기본 이모티콘 설정

  // 이모티콘 선택 함수
  const selectIcon = icon => {
    setIcon('🌮');
  };

  return (
    <Container>
      {/* 선택된 이모티콘을 표시 */}
      <IconContainer>
        <IconText>{icon}</IconText>
        <PlusIcon>
          <PlusText>+</PlusText>
        </PlusIcon>
      </IconContainer>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

const IconContainer = styled.View`
  position: relative;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 50px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const IconText = styled.Text`
  font-size: 35px;
`;

const PlusIcon = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #b9b9b9;
`;

const PlusText = styled.Text`
  font-size: 15px;
  color: #888;
`;

export default IconPicker;
