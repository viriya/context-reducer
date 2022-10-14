import { useContext } from 'react'
import { CountContext } from './CounterProvider'
const Component1 = () => {
    const { count, dispatch } = useContext(CountContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={ () => dispatch({type: "INCREMENT"})}>Add 1</button>
        <button onClick={ () => dispatch({type: "DECREMENT"})}>Subtract 1</button>
        <button onClick={ () => dispatch({type: "ADD_BY_NUM", payload: 5})}>Add 5</button>
    </div>
  )
}

export default Component1