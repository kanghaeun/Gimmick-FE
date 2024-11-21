import {useState} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import BackButtom from '../../common/BackButtom';
import IconGrid from './IconGrid';
const IconPickerModal = () => {
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
          <Title>
            <StyledbackButton />
            <TitleText>아이콘</TitleText>
          </Title>
          <IconView>
            <IconGrid />
          </IconView>
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
  height: 70%;
  padding: 10px 10px 30px 10px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  /* background-color: aliceblue; */
  width: 100%;
`;

const TitleText = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

const StyledbackButton = styled(BackButtom)`
  position: absolute;
  left: -20px;
`;

const IconView = styled.ScrollView``;

export default IconPickerModal;
