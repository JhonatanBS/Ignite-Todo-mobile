import styled from "styled-components/native";
import { PlusCircle } from "phosphor-react-native";

export const Container = styled.View`
  min-height: 54px;
  max-height: 54px;
  
  padding: 0 24px;

  flex-direction: row;

  justify-content: center;

  position: relative;
  top: -27px;
`;

export const Input = styled.TextInput`
  flex: 1;
  
  min-height: 54px;
  max-height: 54px;
  

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;

  padding: 16px;

`;

export const Button = styled.TouchableOpacity`
  
  min-height: 52px;
  max-height: 52px;
  width: 52px;


  background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
  
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  margin-left: 4px;
`;

export const Icon = styled(PlusCircle).attrs(({theme}) => ({
  size: 16,
  color: theme.COLORS.WHITE
}))``;

