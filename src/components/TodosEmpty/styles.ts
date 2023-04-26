import styled , { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 208px;

  justify-content: center;
  align-items: center;

  border-top-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_400};
`;

export const Icon = styled.Image`
  height: 56px;
  width: 56px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_300}
  `}
`;

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR}
    color: ${theme.COLORS.GRAY_300}
  `}
`;