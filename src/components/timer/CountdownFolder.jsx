import styled from 'styled-components';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomText from '../CustomText';

const CountdownFolder = () => {
  return (
    <CountdownFolderContainer>
      <TopLeftSectionView />
      <TopRightSectionView />
      <BottomSectionWrapper>
        <IconboxWrapper>
          <IconView>🍔</IconView>
        </IconboxWrapper>
        <FoodTitleText weight="bold">쉬림프 타코</FoodTitleText>
      </BottomSectionWrapper>
    </CountdownFolderContainer>
  );
};

export default CountdownFolder;

const CountdownFolderContainer = styled.View`
  padding: ${scale(70)}px;
`;

const TopLeftSectionView = styled.View`
  position: absolute;
  width: ${scale(70)}px;
  height: ${scale(140)}px;
  background-color: #ffd5d5;
  border-radius: ${moderateScale(15)}px;
  bottom: 0;
  margin-left: ${scale(10)}px;
`;

const TopRightSectionView = styled.View`
  position: absolute;
  width: ${scale(119)}px;
  height: ${scale(131.5)}px;
  background-color: #ffd5d5;
  border-radius: ${moderateScale(15)}px;
  bottom: 0;
  margin-left: ${scale(12)}px;
`;

const BottomSectionWrapper = styled.View`
  position: absolute;
  padding: ${scale(15)}px;
  width: ${scale(140)}px;
  height: ${scale(117.5)}px;
  background-color: #fcc4c4;
  border-radius: ${moderateScale(15)}px;
  bottom: 0;
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

const IconView = styled(CustomText)`
  font-size: ${moderateScale(24)}px;
`;

const FoodTitleText = styled(CustomText)`
  padding-top: ${verticalScale(23)}px;
  opacity: 0.6;
  font-size: ${moderateScale(17)}px;
`;
