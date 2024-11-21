import {useState} from 'react';
import styled from 'styled-components/native';

const InputComponent = ({style}) => {
  const [text, setText] = useState('');

  const onChangeText = inputText => {
    setText(inputText);
  };

  return (
    <Container style={style}>
      <Input
        value={text}
        onChangeText={onChangeText}
        placeholder="폴더명을 입력해주세요."
        placeholderTextColor="#808080"
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 36px;
  width: 100%;
  border-radius: 10px;
  border-color: #808080;
  border-width: 1px;
  text-align: left;
  padding: 0 10px;
  font-size: 12px;
`;

export default InputComponent;
