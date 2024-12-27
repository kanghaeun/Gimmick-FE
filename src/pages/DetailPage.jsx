import React from 'react';
import CurrentFire from '../components/detail/CurrentFire';
import CircularProgress from '../components/detail/CircularProgress';
import Header from '../components/common/Header';
import styled from 'styled-components/native';
import CustomText from '../components/CustomText';
import {scale} from 'react-native-size-matters';
import useTimerStore from '../store';

const DetailPage = () => {
  const {time, isRunning, startTimer, stopTimer, resetTimer} = useTimerStore(
    state => state,
  );

  const handleTimerToggle = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <DetailLayout>
      <HeaderWrapper>
        <Header type="detail" title="고구마 삶기" />
      </HeaderWrapper>
      <ContentContainer>
        <CircularProgress />
        <CurrentFire />
        <TimerDisplay weight="semi-bold">
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </TimerDisplay>
        <ButtonContainer>
          <Button onPress={resetTimer}>
            <ResetButtonImage
              source={require('../assets/images/detail/reset-icon.png')}
            />
          </Button>
          <Button onPress={handleTimerToggle}>
            <StartButtonImage
              source={
                isRunning
                  ? require('../assets/images/detail/stop-icon.png') // 타이머 실행 중이면 stop-icon
                  : require('../assets/images/detail/start-icon.png') // 타이머 멈춤이면 start-icon
              }
            />
          </Button>
        </ButtonContainer>
      </ContentContainer>
      <SwifeContainer>
        <SwifeButtonImage
          source={require('../assets/images/detail/swife-arrow.png')}
        />
        <SwifeText weight="semi-bold">스와이프하여 전체 정보 확인</SwifeText>
      </SwifeContainer>
    </DetailLayout>
  );
};

export default DetailPage;

// Layout 스타일 정의
const DetailLayout = styled.View`
  height: 100%;
`;

const HeaderWrapper = styled.View``;
const ContentContainer = styled.View`
  height: 90%;
  margin-top: ${scale(-50)}px;
  align-item: center;
  justify-content: center;
`;

const TimerDisplay = styled(CustomText)`
  font-size: ${scale(56)}px;
  color: #6c7386;
  text-align: center;
  margin-bottom: ${scale(7)}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${scale(24)}px;
`;

const Button = styled.TouchableOpacity`
  padding: ${scale(12)}px ${scale(40)}px;
  background-color: #ffc15b;
  border-radius: ${scale(12)}px;
  margin: ${scale(0)}px ${scale(10)}px;
  flex-direction: row;
  align-items: center;
`;

const ResetButtonImage = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(24)}px;
`;

const StartButtonImage = styled.Image`
  width: ${scale(14)}px;
  height: ${scale(17)}px;
`;

const SwifeContainer = styled.View`
  flex-direction: row; /* 요소를 한 줄로 배치 */
  justify-content: center; /* 수평 정렬: 가운데 */
  align-items: center; /* 수직 정렬: 가운데 */
  margin-top: ${scale(10)}px; /* 상단 여백 추가 */
`;

const SwifeButtonImage = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(10)}px;
  margin-right: ${scale(10)}px; /* 텍스트와 버튼 이미지 사이 간격 */
`;

const SwifeText = styled(CustomText)`
  color: #6c7386;
  font-size: ${scale(15)}px;
`;
