import { CheckEmpty, CheckFull, Container, Description, TrashIcon } from "./styles"

interface Props {
  title: string;
}

export function Todo({ title }: Props) {
  return(
    <Container>
      <CheckEmpty />
      <Description>
        { title }
      </Description>
      <TrashIcon />
    </Container>
  )
}