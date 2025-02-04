
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label for="name">Enter your name:</label><br/><br/>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <h1>Hello {name}!</h1>}
    </div>
  )
}

export default App
