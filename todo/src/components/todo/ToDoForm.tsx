import { useState } from 'react'
import { Obj, Button, Input } from "./styles";
import ToDoList from "./ToDoList";

function TodoForm () {
    const [inputValue, setInputValue] = useState('')

    function handleChange(e){
        setInputValue(e.target.value)
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
  
  export default TodoForm;