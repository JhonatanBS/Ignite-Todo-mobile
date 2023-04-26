import { useState } from "react";

import { Alert, FlatList } from "react-native";

import { Add, Container, Main } from "./styles";

import { TodosEmpty } from "@components/TodosEmpty";
import { Input } from "@components/Input";
import { Counter } from "@components/Counter";
import { Header } from "@components/Header";
import { Todo } from "@components/Todo";
import { Button } from "@components/Button";

export type ITodo = {
  description: string;
  isDone: boolean;
}

export function Home() {
  const [newDescription, setNewDescription] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleAddTodo() {
    if (newDescription.trim().length === 0) {
      return Alert.alert("Todo Empty!", "Your new Todo is Empty!");
    }

    const todoAlreadyExists = todos.some((todo) => todo.description === newDescription);

    if (todoAlreadyExists) {
      return Alert.alert("Todo Already Exists!", "You already create this Todo!");
    }

    const newTodo = {
      description: newDescription,
      isDone: false
    }

    setTodos([...todos, newTodo]);

    setNewDescription("");
  }

  function handleAlterDone(todo: ITodo) {
    const alterTodos = todos.map(alterTodo => {
      if (alterTodo.description === todo.description) {
        alterTodo.isDone ? (alterTodo.isDone = false) : (alterTodo.isDone = true);
      }
      return alterTodo;
    });

    setTodos(alterTodos)
  }

  function handleRemoveTodo(allTodos: ITodo) {
    const filterTodo = todos.filter((todo) => todo.description !== allTodos.description);

    setTodos(filterTodo);
  }

  return (
    <Container>
      <Header />
      <Main>
        <Add>
          <Input
            placeholder="Add a new Task"
            placeholderTextColor="#808080"
            onChangeText={setNewDescription}
            value={newDescription}
          />
          <Button
            onPress={handleAddTodo}
          />
        </Add>

        <Counter allTodos={todos}
        />

        <FlatList
          data={todos}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Todo propsTodo={item}
              alterTodo={handleAlterDone}
              removeTodo={handleRemoveTodo}
            />
            
          )}
          ListEmptyComponent={() => (<TodosEmpty />)}
        />

      </Main>
    </Container>
  )
}