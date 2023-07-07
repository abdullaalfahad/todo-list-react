import { useState } from "react"
import TodoForm from "./components/TodoForm"


function App() {
  const [items, setItems] = useState([]);

  console.log(items);


  return (
    <>
      <TodoForm setItems={setItems} />
    </>
  )
}

export default App
