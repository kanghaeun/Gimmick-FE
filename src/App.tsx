import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForderCreateModal from './Pages/FolderCreateModal';
import CreateSelectModal from './Pages/CreateSelectModal';
import MainPage from './Pages/MainPage';

function App(): React.JSX.Element {
  return (
    <View>
      <MainPage />
      <ForderCreateModal />
      <CreateSelectModal />
    </View>
  );
}

export default App;
