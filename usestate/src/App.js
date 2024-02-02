// import logo from './logo.svg';
// import './App.css';
import Reaact, {useState} from 'react'

function App() {
  //useState returns an array with two values
  // const [count, setCount] = useState(4) // count = current state, setCount = function to update that  current state
  // useState(4) 4 = default state

  // This is a faster way of passing state
  const [count, setCount] = useState(() => { //the function runs only one time the your component renders
    console.log('run function')
    return 10
  }) 

  const [state, setState] = useState(
    {
      count: 4,
      theme: 'blue'
    }
  )

  // Destructure
  const count2 = state.count
  const theme = state.theme




  const decrementCount = () => {
    // setCount(count -1) //it's not a good way to update a value based on previous value
    // setCount(prevCount => prevCount - 1) //pass a function  which takes in previous state value
    setState(prevState => {
      return { ...prevState,count: prevState.count - 1} //to avoid overwriting include ...prevState
    })
  }
  
  const incrementCount = () => {
    // setCount(prevCount => prevCount + 1)
    setState(prevState => prevState + 1)
  }
  return (
    <>
      <button onClick={decrementCount}>Decrement</button>
      <span>{count2}</span>
      <span>{theme}</span>

      <button onClick={incrementCount}>Increment</button>
    </>
  );
}

export default App;
