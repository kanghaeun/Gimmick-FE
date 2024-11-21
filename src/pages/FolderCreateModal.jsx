import {useState} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import ColorPicker from '../components/common/ColorPicker';
import RegistrationButton from '../components/folderCreate/RegistrationButton';
import InputComponent from '../components/folderCreate/InputComponent';
import IconPicker from '../components/modal/iconPickerModal/IconPicker';
import CloseButton from '../components/common/CloseButton';

const ForderCreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onPressModalOpen = () => {
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent={true}>
      <Container>
        <ModalView>
          <StyledCloseButton />
          <IconPicker />
          <StyledInputComponent />
          <RegistrationContainer>
            <ColorPicker />
            <StyledRegistrationButton />
          </RegistrationContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ModalView = styled.View`
  border-radius: 10px;
  width: 80%;
  padding: 30px;
  justify-content: center;
  align-items: center;
  top: -8%;
  background-color: white;
`;

const StyledInputComponent = styled(InputComponent)`
  margin: 20px 0;
`;

const RegistrationContainer = styled.View`
  flex-direction: row;
`;

const StyledRegistrationButton = styled(RegistrationButton)`
  margin-left: 15px;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: -20px;
`;

export default ForderCreateModal;
