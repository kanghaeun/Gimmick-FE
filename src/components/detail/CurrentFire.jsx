import React from 'react';
import {scale} from 'react-native-size-matters';
import CustomText from '../CustomText';
import styled from 'styled-components/native';

const CurrentFire = () => {
  return (
    <CurrentFireContainer>
      <FireWrapper>
        <FireText weight="bold">약불</FireText>
      </FireWrapper>
    </CurrentFireContainer>
  );
};

export default CurrentFire;

const CurrentFireContainer = styled.View`
  align-items: center;
  margin-top: ${scale(30)}px;
  margin-bottom: ${scale(20)}px;
`;

const FireText = styled(CustomText)`
  font-size: ${scale(18)}px;
  color: #fff;
`;

const FireWrapper = styled.View`
  background-color: #ffa034;
  padding: ${scale(5)}px ${scale(23)}px;
  border-radius: ${scale(11)}px;
`;
