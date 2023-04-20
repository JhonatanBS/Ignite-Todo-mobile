import styled , { css } from "styled-components/native";

export type TextTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TextTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;
  height: 19px;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const HalfContainer = styled.View`
  width: 110px;
  flex-direction: row;
`;

export const NameCounter= styled.Text<Props>`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`;

export const NumberOfCounter = styled.Text`
  width: 25px;
  height: 19px;
  border-radius: 999px;

  text-align: center;
  margin-left: 8px;
  
  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_400};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`