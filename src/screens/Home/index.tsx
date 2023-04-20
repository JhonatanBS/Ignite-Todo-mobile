import { useState } from "react";

import { Container } from "./styles";

import { Add } from "@components/Add";
import { Counter } from "@components/Counter";
import { Header } from "@components/Header";
import { Todo } from "@components/Todo";
import { FlatList } from "react-native";

export function Home() {
  const [todo, setTodo] = useState(["Limpar a casa", "Limpar o carro","Jogar video game","Ir pra academia", "Tomar banho", "Ganhar dinheiro", "estudar","trabalhar", "dormir"]);

  return (
    <Container>
      <Header />
      <Add />
      <Counter
      />

      <FlatList
        data={todo}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Todo title={item}/>
        )}
      />
      
    </Container>
  )
}