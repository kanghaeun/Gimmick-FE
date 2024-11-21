import styled from 'styled-components';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const CountdownTimer = () => {
  return (
    <TimerContainer>
      <TimerHeaderWrapper>
        <IconboxWrapper>
          <IconView>🍔</IconView>
        </IconboxWrapper>
        <Icon name="chevron-right" size={moderateScale(40)} color="#61734D" />
      </TimerHeaderWrapper>
      <FoodTitleText>쉬림프 타코</FoodTitleText>
      <TimerText>12:30</TimerText>
    </TimerContainer>
  );
};

export default CountdownTimer;

const TimerContainer = styled.View`
  width: ${scale(140)}px;
  height: ${scale(140)}px;
  background-color: #fbdf60;
  border-radius: ${moderateScale(20)}px;
  padding: ${scale(15)}px;
  margin-bottom: ${scale(20)}px;
`;

const TimerHeaderWrapper = styled.View`
  font-size: ${moderateScale(24)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconboxWrapper = styled.View`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  background-color: #ffffff;
  border-radius: ${moderateScale(13)}px;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
`;

const IconView = styled.Text`
  font-size: ${moderateScale(24)}px;
`;

const FoodTitleText = styled.Text`
  padding-top: ${verticalScale(18)}px;
  opacity: 0.5;
  font-weight: bold;
  font-size: ${moderateScale(17)}px;
`;

const TimerText = styled.Text`
  padding-top: ${verticalScale(1)}px;
  font-weight: bold;
  font-size: ${moderateScale(33)}px;
`;
