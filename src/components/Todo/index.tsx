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
      
      {propsTodo.isDone ? 
      <BackgroundDone onPress={() => alterTodo(propsTodo)} style={{backgroundColor: "#FFFFFF"}}>
        <CheckFull weight="fill"/> 
      </BackgroundDone>
      : 
      <BackgroundDone onPress={() => alterTodo(propsTodo)} >
        <CheckEmpty />
      </BackgroundDone>
      }

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