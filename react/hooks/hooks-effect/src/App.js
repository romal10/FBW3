import React ,{useState , useEffect} from 'react';

import './App.css';

function App() {
  const [counter, setCounter]= useState (0);
  useEffect(()=>{
    document.title= `you clicked ${counter}`;
  })

  return (
    <div className="App">
    <p>
      you clicked counter {counter} times
    </p>
    <button onClick={()=> setCounter(counter+2)}> button</button>
      
    </div>
  );
}

export default App;
