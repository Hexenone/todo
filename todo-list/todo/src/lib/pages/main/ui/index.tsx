import { FormEvent } from "react";
import MainForm from "$lib/features/main/ToDoForm";
import { Title, Background } from "./styles";

export default function Main() {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  return (
    <Background>
      <Title>Too-Doo List</Title>
      <MainForm onSubmit={submitHandler} />
    </Background>
  );
}
