import { FormEvent } from "react";
import Button from "$lib/shared/ui/button/Button";
import Input from "$lib/shared/ui/input/Input";

export default function MainForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(event);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input />
      <Button>Add</Button>
    </form>
  );
}
