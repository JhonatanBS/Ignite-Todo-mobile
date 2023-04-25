import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { PlusCircle } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  
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