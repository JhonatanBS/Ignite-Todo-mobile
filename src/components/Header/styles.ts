import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 173px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;