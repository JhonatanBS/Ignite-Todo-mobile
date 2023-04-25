
import { ITodo } from "@screens/Home";
import { Container, HalfContainer, NameCounter, NumberOfCounter, BackgroundNumber } from "./styles";

interface ITodos {
  allTodos: ITodo[]
}

export function Counter({ allTodos }: ITodos) {

  const allCheckDone = allTodos.filter((todo) => todo.isDone === true);

  return (
    <Container>
      <HalfContainer>

        <NameCounter type="PRIMARY">
          Created
        </NameCounter>

        <BackgroundNumber>
          <NumberOfCounter>
            {allTodos.length}
          </NumberOfCounter>
        </BackgroundNumber>

      </HalfContainer>

      <HalfContainer>

        <NameCounter type="SECONDARY">
          Completed
        </NameCounter>

        <BackgroundNumber>
          <NumberOfCounter>
            {allCheckDone.length}
          </NumberOfCounter>
        </BackgroundNumber>

      </HalfContainer>

    </Container>
  )
}
