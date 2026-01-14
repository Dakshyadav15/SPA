import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <div>
        <h2>Form SPA</h2>
        <input placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
        <p> Hello, {name}</p>
      </div>
    </>
  );
}

export default App;
