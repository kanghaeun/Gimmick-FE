import styled from 'styled-components';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const CountdownFolder = () => {
  return (
    <CountdownFolderContainer>
      <TopLeftSectionView></TopLeftSectionView>
      <TopRightSectionView></TopRightSectionView>
      <BottomSectionWrapper>
        <IconboxWrapper>
          <IconView>🍔</IconView>
        </IconboxWrapper>
        <FoodTitleText>쉬림프 타코</FoodTitleText>
      </BottomSectionWrapper>
    </CountdownFolderContainer>
  );
};

export default CountdownFolder;

const CountdownFolderContainer = styled.View`
  padding: 70px;
  margin-bottom: 20px;
`;

const TopLeftSectionView = styled.View`
  position: absolute;
  width: 70px;
  height: 140px;
  background-color: #ffd5d5;
  border-radius: 20px;
  bottom: 0;
  margin-left: 10px;
`;
const TopRightSectionView = styled.View`
  position: absolute;
  width: 115px;
  height: 130px;
  background-color: #ffd5d5;
  border-radius: 20px;
  bottom: 0;
  margin-left: 13px;
`;

const BottomSectionWrapper = styled.View`
  position: absolute;
  padding: 15px;
  width: 140px;
  height: 113px;
  background-color: #fcc4c4;
  border-radius: 20px;
  bottom: 0;
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

const FoodTitleText = styled.Text`
  padding-top: 17px;
  opacity: 0.6;
  font-weight: 900;
  font-size: 17px;
`;
