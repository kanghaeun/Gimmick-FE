import styled from 'styled-components/native';
import React, {useState, useEffect} from 'react';
import {scale} from 'react-native-size-matters';
import {ScrollView} from 'react-native';
import Header from '../components/common/Header';
import CountdownTimer from '../components/timer/CountdownTimer';
import CountdownFolder from '../components/timer/CountdownFolder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import initialMockData from '../data/initialMockData';

const MainPage = () => {
  const [timers, setTimers] = useState([]);
  const [folders, setFolders] = useState([]);

  const loadData = async () => {
    try {
      const storedTimers = await AsyncStorage.getItem('timers');
      if (storedTimers) {
        setTimers(JSON.parse(storedTimers));
      }

      const storedFolders = await AsyncStorage.getItem('folders');
      if (storedFolders) {
        setFolders(JSON.parse(storedFolders));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, []),
  );
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    AsyncStorage.setItem('timers', JSON.stringify(initialMockData), () => {
      console.log('유저정보 저장 완료');
    });

    // 저장된 데이터를 AsyncStorage에서 가져오기
    AsyncStorage.getItem('timers', (err, result) => {
      const storedData = JSON.parse(result);
      if (storedData) {
        setMockData(storedData);
      }
    });
  }, []);

  return (
    <MainContainer>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Header type="main" />
        <CountdownTimerWrapper>
          <TimersAndFoldersContainer>
            {timers.map((timer, index) => (
              <React.Fragment key={index}>
                <CountdownTimer timer={timer} />
              </React.Fragment>
            ))}
            {folders.map(folder => (
              <CountdownFolder key={folder.id} />
            ))}
          </TimersAndFoldersContainer>
        </CountdownTimerWrapper>
      </ScrollView>
    </MainContainer>
  );
};

// ... styled components 코드는 동일 ...

export default MainPage;

const MainContainer = styled.View`
  flex-direction: column;
  height: 100%;
`;

const CountdownTimerWrapper = styled.View``;

const TimersAndFoldersContainer = styled.View`
  flex-direction: row;
  gap: ${scale(26)}px;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: ${scale(20)}px;
`;
