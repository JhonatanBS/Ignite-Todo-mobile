import { Container, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";

export function Button({...rest}: TouchableOpacityProps) {
  return(
    <Container {...rest}>
      <Icon />
    </Container>
  )
}