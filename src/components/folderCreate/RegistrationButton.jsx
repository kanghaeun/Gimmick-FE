import styled from 'styled-components/native';

const RegistrationButton = ({style}) => {
  const registration = () => {
    // 등록 함수 구현
  };

  return (
    <Container style={style}>
      <Button onPress={registration}>
        <ButtonText>등록</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #ffc15b;
  height: 27px;
  padding: 0 25px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 800;
`;

export default RegistrationButton;
