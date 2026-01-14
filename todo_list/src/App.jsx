import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [tasks, SetTasks]= useState([]);

  const addTask =() => {
    SetTasks([...tasks, task]); setTask("");
  }
  return (
    <>
      <div>
        <h2>To-do SPA</h2>
        <input value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((t,i)=><li key={i}>{t}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
