import { Container } from "./styles";

import { Add } from "@components/Add";
import { Header } from "@components/Header";

export function Home() {

  return(
    <Container>
      <Header />
      <Add />
    </Container>
  )
}