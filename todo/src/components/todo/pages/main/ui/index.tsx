import TodoForm from "../../components/todo/ToDoForm";
import { Title, Background } from "./styles/stylesPage";

export default function Main() {
  return (
    <Background>
      <Title>Too-Doo List</Title>
      <TodoForm/>
    </Background>
  );
}
