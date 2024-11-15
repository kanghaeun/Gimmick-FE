import styled from 'styled-components';
import React, {useState} from 'react';
import CountdownTimer from '../Components/CountdownTimer';
import CountdownFolder from '../Components/\bCountdownFolder';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';

const MainPage = () => {
  return (
    <MainContainer>
      <HeaderWrapper>
        <Header type="main" />
      </HeaderWrapper>
      <CountdownTimerWrapper>
        <CountdownTimer />
        <CountdownFolder />
        <CreateCountdownTimerBtn>
          <Icon name="plus" size={25} color="#3562D6" />
        </CreateCountdownTimerBtn>
      </CountdownTimerWrapper>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.View`
  padding: 20px;
  flex-direction: column;
  height: 100%;
`;
const HeaderWrapper = styled.View`
  heigth: 30px;
  flex: 1;
`;
const CountdownTimerWrapper = styled.View`
  padding: 10px;
  flex: 7;
`;
const CreateCountdownTimerBtn = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px dashed #3562d6;
  justify-content: center;
  align-items: center;
`;
