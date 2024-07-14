import TodoForm from "../TodoForm/ToDoForm";
import { Title, Background } from "./styles";

export default function Main() {
  return (
    <Background>
      <Title>Too-Doo List</Title>
      <TodoForm/>
    </Background>
  );
}
