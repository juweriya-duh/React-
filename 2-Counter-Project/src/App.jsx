import { useState } from 'react'

import './App.css'

function App() {

const [counter, setCounter]= useState(7)

  //let counter = 7
  const addValue = () => {
  //  counter = counter + 1
  //   console.log(counter);

  /*Batching: all the values will be updated just once as a batch.
  if we want to fix this we will have to use a new arrow func 
  inside the setCounter() method

  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  */

 setCounter((prevCounterrrrr) => prevCounterrrrr +1)
 setCounter((prevCounterrrrr) => prevCounterrrrr +1)
 setCounter((prevCounterrrrr) => prevCounterrrrr +1)
 setCounter((prevCounterrrrr) => prevCounterrrrr +1)


  //these cant be baatched because they are dependent on the prev values.
  }

  const removeValue = () => {
    setCounter(counter-1)
  }



  return (
    <>
    <h1>React Course With Juwe {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button> {"   "}
    <button onClick={removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
     </>
  )
}

export default App
