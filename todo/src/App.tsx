import ToDoForm from "./components/todo/ToDoForm";

//import './App.css'

function App() {

  function ToDoList () {
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

  return <ToDoForm /> <ToDoList />;
}


export default App;