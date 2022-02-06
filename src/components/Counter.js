import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/giphyReducer'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.giphy.count)

  function onCountClick() {
    dispatch(setCount(1))
  }

  return (
    <div className='Counter'>
      <h1>{count}</h1>
      <button onClick={() => onCountClick()}>COUNT</button>
    </div>
  )
}

export default Counter
