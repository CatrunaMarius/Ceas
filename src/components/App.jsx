import React, {useState} from "react";


function App() {

  let now = new Date().toLocaleTimeString("ro-RO");
  const [times, setTime] = useState(now)

 

  function incres(){
    const newtime = new Date().toLocaleTimeString("ro-RO");
    setTime(newtime) 
  }
 
  setInterval(incres, 1000);
  

  return (
    <div className="container">
      <h1>{times}</h1>
      <button onClick={incres}>Get Time</button>
    </div>
  );
}

export default App;
