import { useState } from "react";
import { InputDefault } from "./styles";

export default function Input() {
  const [inputValue, setInputValue] = useState('');
  return (
    <InputDefault value={inputValue}  onChange={e => setInputValue(e.target.value)}></InputDefault>
  );
}