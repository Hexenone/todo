import { useState } from 'react'
import { Obj, Button, Input } from "./styles";

function TodoList () {
  const [todos, setTodos] = useState([] as string[])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

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
  return (
    <div>
      <form>
        <Input type='text' value={inputValue} onChange={handleChange}/>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Obj key={index}>{todo}
          <Button onClick={() =>handleDelete(index)}>Delete</Button>
          </Obj>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;