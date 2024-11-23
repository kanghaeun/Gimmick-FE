import styled from 'styled-components';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import ForderCreateModal from './pages/FolderCreateModal';
import CreateSelectModal from './components/modal/createSelectModal/CreateSelectModal';
import MainPage from './pages/MainPage';
function App(): React.JSX.Element {
  return (
    <BaseLayout>
      <MainPage />
      <ForderCreateModal />
      <CreateSelectModal />
    </BaseLayout>
  );
}

export default App;

const BaseLayout = styled.View`
  padding: 0 ${scale(22)}px;
  padding-top: ${verticalScale(40)}px;
`;
