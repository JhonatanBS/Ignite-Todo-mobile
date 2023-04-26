import { Container, Description, Icon,Title } from "./styles";

import todoEmpty from "@assets/Clipboard.png";

export function TodosEmpty() {
  return(
    <Container>
      <Icon source={todoEmpty}/>
      <Title>
        Você ainda não tem tarefas cadastradas
      </Title>
      <Description>
        Crie tarefas e organize seus itens a fazer
      </Description>
    </Container>
  )
}