import styled, { css } from "styled-components/native";

import { Circle, CheckCircle, Trash } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  min-height: 64px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

  border-radius: 8px;

  align-items: center ;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const BackgroundDone= styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  margin: 0 12px 0 18px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;

export const CheckFull = styled(CheckCircle).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.PURPLE_DARK,
}))`
`;

export const CheckEmpty = styled(Circle).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.BLUE
}))`
`;

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    width: 235px;
    padding: 10px 0;
  `}
`;

export const TrashIcon = styled(Trash).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.DANGER
}))`
  
`;

export const BackgroundTrash = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  border-radius: 5px;

  margin-left: 20px;

  justify-content: center;
  align-items: center;
`;

