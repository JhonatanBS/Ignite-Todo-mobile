import { CheckEmpty, CheckFull, Container, Description, TrashIcon , BackgroundDone, BackgroundTrash} from "./styles"
import { ITodo } from "@screens/Home";

interface PropsTodo {
  propsTodo: ITodo;
  alterTodo(alterDone: ITodo): void;
  removeTodo(deleteTodo: ITodo): void;
}

export function Todo({ propsTodo, alterTodo, removeTodo}: PropsTodo) {

  return(
    <Container >
      
      <BackgroundDone onPress={() => alterTodo(propsTodo)}>
      {propsTodo.isDone ? 
      <CheckFull weight="fill"/> : <CheckEmpty />}

      </BackgroundDone>

      {propsTodo.isDone ?
      <Description style={{textDecorationLine: "line-through", color: "#808080"}}>
       {propsTodo.description}
      </Description>
      :
      <Description>
       {propsTodo.description}
      </Description>
      }
      <BackgroundTrash onPress={() => removeTodo(propsTodo)}>
        <TrashIcon />
      </BackgroundTrash>
    </Container>
  )
}