import styled from 'styled-components';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const CountdownTimer = () => {
  return (
    <TimerContainer>
      <TimerHeaderWrapper>
        <IconboxWrapper>
          <IconView>🍔</IconView>
        </IconboxWrapper>
        <Icon name="chevron-right" size={40} color="#61734D" />
      </TimerHeaderWrapper>
    </TimerContainer>
  );
};

export default CountdownTimer;

const TimerContainer = styled.View`
  width: 140px;
  height: 140px;
  background-color: #fbdf60;
  border-radius: 20px;
  padding: 15px;
`;

const TimerHeaderWrapper = styled.View`
  font-size: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconboxWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 13px;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
`;

const IconView = styled.Text`
  font-size: 24px;
`;
