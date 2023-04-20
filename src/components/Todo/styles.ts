import styled, { css } from "styled-components/native";

import { Circle, CheckCircle, Trash } from "phosphor-react-native";

export const Container = styled.View`
  width: 327px;
  min-height: 64px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

  border-radius: 8px;

  align-items: center ;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const CheckFull = styled(CheckCircle).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.PURPLE_DARK
}))`
  margin: 0 12px 0 8px;
`;

export const CheckEmpty = styled(Circle).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.BLUE
}))`
  margin: 0 12px 0 8px;
`;

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    width: 235px;
  `}
`;

export const TrashIcon = styled(Trash).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_300
}))`
  margin: 0 8px 0 12px;
`;


