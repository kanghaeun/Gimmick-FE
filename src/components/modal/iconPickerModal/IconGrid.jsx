import {useState} from 'react';
import styled from 'styled-components/native';
import foodIconsObjectArray from '../../../assets/IconList';

const IconGrid = () => {
  const [setIcon, setSelectedIcon] = useState('0');

  return (
    <Container>
      <Grid>
        {foodIconsObjectArray.map(icon => (
          <IconComponent key={icon.index} emoji={icon.icon} />
        ))}
      </Grid>
    </Container>
  );
};

const IconComponent = ({emoji}) => {
  return (
    <IconContainer>
      <Icon>
        <IconText>{emoji}</IconText>
      </Icon>
    </IconContainer>
  );
};

const Container = styled.View`
  padding-bottom: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconContainer = styled.View`
  width: 20%;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.TouchableOpacity`
  /* background-color: aqua; */
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const IconText = styled.Text`
  font-size: 20px;
`;

export default IconGrid;
