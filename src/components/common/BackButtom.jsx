import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const BackButtom = ({style}) => {
  const back = () => {
    // 뒤로 가기 함수 구현
  };

  return (
    <Container style={style}>
      <Button onPress={back}>
        <Icon name="chevron-back-outline" size={24} color="gray" />
      </Button>
    </Container>
  );
};

const Container = styled.View``;

const Button = styled.TouchableOpacity`
  height: 30px;
  padding: 0 30px;
  justify-content: center;
  align-items: flex-start;
`;

export default BackButtom;
