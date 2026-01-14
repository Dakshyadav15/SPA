import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false);

  const containerStyle = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div className="app-container" style={containerStyle}>
      <h2>Theme Toggle SPA</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
