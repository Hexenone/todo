import TodoList from "../../../features/main/ToDoForm";
import { Title, Background } from "./styles";

export default function Main() {
  return (
    <Background>
      <Title>Too-Doo List</Title>
      <TodoList/>
    </Background>
  );
}
