import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 0 24px;
  width: 100%;
`;

export const Add = styled.View`
  flex-direction: row;
  width: 100%;
  position: relative;
  top: -27px;
`;

