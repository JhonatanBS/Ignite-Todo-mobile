import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  
  min-height: 54px;
  max-height: 54px;
  width: 271px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;

  padding: 16px;
`;
