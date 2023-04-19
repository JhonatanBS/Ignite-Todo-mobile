import { Container } from "./styles";

import { Add } from "@components/Add";
import { Counter } from "@components/Counter";
import { Header } from "@components/Header";

export function Home() {

  return(
    <Container>
      <Header />
      <Add />
      <Counter 
      />
    </Container>
  )
}