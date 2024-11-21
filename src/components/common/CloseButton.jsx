import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const CloseButton = ({style}) => {
  const close = () => {
    // 등록 함수 구현
  };

  return (
    <Container style={style}>
      <Button onPress={close}>
        <Icon name="close" size={18} color="gray" />
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

export default CloseButton;
