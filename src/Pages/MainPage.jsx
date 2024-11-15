import styled from 'styled-components';
import React, {useState} from 'react';
import CountdownTimer from '../Components/CountdownTimer';
import CountdownFolder from '../Components/\bCountdownFolder';
import Icon from 'react-native-vector-icons/AntDesign';

const MainPage = () => {
  return (
    <MainContainer>
      <HeaderWrapper></HeaderWrapper>
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

const MainContainer = styled.View``;
const HeaderWrapper = styled.View``;
const CountdownTimerWrapper = styled.View``;
const CreateCountdownTimerBtn = styled.View``;
