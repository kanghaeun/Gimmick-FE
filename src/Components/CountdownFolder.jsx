import styled from 'styled-components';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const CountdownFolder = () => {
  return (
    <CountdownFolderContainer>
      <TopLeftSectionView></TopLeftSectionView>
      <TopRightSectionView></TopRightSectionView>
      <BottomSectionView></BottomSectionView>
    </CountdownFolderContainer>
  );
};

export default CountdownFolder;

const CountdownFolderContainer = styled.View`
  padding: 100px;
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

const BottomSectionView = styled.View`
  position: absolute;

  width: 140px;
  height: 113px;
  background-color: #fcc4c4;
  border-radius: 20px;
  bottom: 0;
`;
