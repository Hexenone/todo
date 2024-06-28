import { useState } from 'react'
import { Obj, Button, Input } from "./styles";

function TodoList () {
  const [todos, setTodos] = useState([] as string[])
  const [inputValue, setInputValue] = useState('')

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}

}

export default TodoList;