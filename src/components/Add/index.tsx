import { Container, Input, Button, Icon } from "./styles";

export function Add() {
  return(
    <Container>
      <Input 
        placeholder="Add a new Task"
        placeholderTextColor="#808080"
      />
      <Button>
        <Icon />
      </Button>
    </Container>
  )
}