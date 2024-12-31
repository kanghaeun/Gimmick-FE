import {useState, useEffect} from 'react';
import {Platform, Alert} from 'react-native';
import {scale} from 'react-native-size-matters';
import CustomText from '../components/CustomText';
import styled from 'styled-components/native';
import ColorPicker from '../components/common/ColorPicker';
import InputComponent from '../components/folderCreate/InputComponent';
import IconPicker from '../components/common/IconPicker';
import DetailTimer from '../components/timerCreate/DetailTimer';
import PlusButton from '../components/timerCreate/PlusButton';
import TotalTimer from '../components/timerCreate/TotalTimer';
import Header from '../components/common/Header';
import IconPickerModal from '../components/modal/iconPickerModal/IconPickerModal';

const TimerCreatePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('🌮');
  const [timerName, setTimerName] = useState('');
  const [id, setId] = useState(0);

  const [timerColor, setTimerColor] = useState('#f7e485');
  const [detailTimers, setDetailTimers] = useState([
    {id: 0, timeData: ['00', '00'], fireData: '약불', memoData: ''},
  ]);
  const [totalTime, setTotalTime] = useState(['00', '00']);

  useEffect(() => {
    const calculateTotalTime = () => {
      let totalMinutes = 0;
      let totalSeconds = 0;

      detailTimers.forEach(timer => {
        const [minutes, seconds] = timer.timeData.map(Number);
        totalMinutes += minutes;
        totalSeconds += seconds;
      });

      totalMinutes += Math.floor(totalSeconds / 60);
      totalSeconds = totalSeconds % 60;

      setTotalTime([
        String(totalMinutes).padStart(2, '0'),
        String(totalSeconds).padStart(2, '0'),
      ]);
    };

    calculateTotalTime();
  }, [detailTimers]);

  const onPressModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setIsModalVisible(false);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const addDetailTimer = id => {
    setId(id + 1);
    setDetailTimers([
      ...detailTimers,
      {id: id + 1, timeData: ['00', '00'], fireData: '약불', memoData: ''},
    ]);
  };

  return (
    <TimerCreateContainer
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <BaseLayout>
        <Header type="timerCreate" title="타이머 생성" />
        <IconPicker icon={selectedIcon} onPress={onPressModalOpen} />
        <InsertContainer>
          <TimerCreateText weight="semi-bold">타이머 이름</TimerCreateText>
          <InputWrapper value={timerName} onChangeText={setTimerName} />
          <TimerCreateText weight="semi-bold">타이머 색상</TimerCreateText>
          <ColorPicker color={timerColor} onChangeColor={setTimerColor} />
        </InsertContainer>
      </BaseLayout>

      <DetailTimerWrapper>
        {detailTimers.map((timer, index) => (
          <DetailTimer
            key={timer.id}
            timeData={timer.timeData}
            fireData={timer.fireData}
            memoData={timer.memoData}
            onDelete={index => {
              if (detailTimers.length > 1) {
                const newDetailTimers = detailTimers.filter(
                  detailTimer => detailTimer.id !== timer.id,
                );
                setDetailTimers(newDetailTimers);
              } else {
                Alert.alert('최소 1개의 타이머가 설정 되어야합니다.');
              }
            }}
            onTimeChange={newTimeData => {
              const newDetailTimers = [...detailTimers];
              newDetailTimers[index].timeData = newTimeData;
              setDetailTimers(newDetailTimers);
            }}
            onFireChange={newFireData => {
              const newDetailTimers = [...detailTimers];
              newDetailTimers[index].fireData = newFireData;
              setDetailTimers(newDetailTimers);
            }}
            onMemoChange={newMemoData => {
              const newDetailTimers = [...detailTimers];
              newDetailTimers[index].memoData = newMemoData;
              setDetailTimers(newDetailTimers);
            }}
          />
        ))}
      </DetailTimerWrapper>

      <BaseLayout>
        <PlusButtonWrapper>
          <PlusButton
            onPress={() => {
              addDetailTimer(id);
            }}
          />
        </PlusButtonWrapper>
        <TotalTimerContainer>
          <TotalTimer totalTime={totalTime} />
        </TotalTimerContainer>

        {isModalVisible && (
          <IconPickerModal
            onSelectIcon={handleIconSelect}
            onClose={handleModalClose}
          />
        )}
      </BaseLayout>
    </TimerCreateContainer>
  );
};

const TimerCreateContainer = styled.ScrollView`
  width: 100%;
  height: 100%;

  position: relative;
`;

const BaseLayout = styled.View`
  padding: 0 ${scale(22)}px;
  padding-top: ${Platform.select({ios: scale(25), android: scale(12)})}px;
`;

const DetailTimerWrapper = styled.View`
  border-bottom-width: ${scale(10)}px;
  border-bottom-color: #f3f5f7;
`;

const InsertContainer = styled.View`
  margin: ${scale(20)}px 0;
`;

const InputWrapper = styled(InputComponent)``;

const TimerCreateText = styled(CustomText)`
  margin: ${scale(20)}px 0 ${scale(10)}px 0;
  font-size: ${scale(16)}px;
`;

const PlusButtonWrapper = styled.View`
  margin: ${scale(20)}px 0;
`;

const TotalTimerContainer = styled.View`
  margin: ${scale(20)}px 0;
`;

export default TimerCreatePage;
