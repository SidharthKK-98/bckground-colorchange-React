import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState("black")
  const setBgColor=(e)=>{
    setColor(e.target.value)
    
  }
 

  return (
    <>
            <h2 className='d-block text-center mt-2 text-warning'>Background Color Changer</h2>

     <div className="container mt-4 rounded shadow d-flex justify-content-around align-items-center " style={{width:"100%",height:"90vh",backgroundColor:`${color}`}}>
          <button onClick={setBgColor} value={"red"} className='btn btn-danger shadow'>Red</button>
          <button onClick={setBgColor} value={"blue"} className='btn btn-primary shadow'>Blue</button>
          <button onClick={setBgColor} value={"green"} className='btn btn-success shadow'>Green</button>
          <button onClick={setBgColor} value={"yellow"} className='btn btn-warning shadow'>Yellow</button>
     </div>

    </>
  )
}

export default App
