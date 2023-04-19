import { Container, HalfContainer, NameCounter,  NumberOfCounter } from "./styles";

export function Counter() {
  return(
    <Container>
      <HalfContainer>
        
      <NameCounter type="PRIMARY">
        Created
      </NameCounter>

      <NumberOfCounter>
        {0}
      </NumberOfCounter>

      </HalfContainer>

      <HalfContainer>
        
      <NameCounter type="SECONDARY">
        Completed
      </NameCounter>

      <NumberOfCounter>
        {0}
      </NumberOfCounter>
      
      </HalfContainer>

    </Container>
  )
}