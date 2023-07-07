import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoLists from "./components/TodoLists";
import { useEffect } from "react";


function App() {
  const [items, setItems] = useState(() => {

    const localValue = localStorage.getItem("ITEMS");

    if (localValue == null) return [];

    return JSON.parse(localValue)

  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items))
  }, [items])

  return (
    <div>
      <TodoForm setItems={setItems} />
      <TodoLists items={items} setItems={setItems} />
    </div>
  )
}

export default App
