import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomGiphy } from '../../redux/actions/getRandomGiphyAction'
import './random.css'

const RandomGiphy = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.randomGiphy.data)

  console.log(data)

  useEffect(() => {
    dispatch(getRandomGiphy())
  }, [dispatch])

  return (
    <div className='random'>
      <img className='random-img' src={data.images?.downsized.url} alt='gif' />
    </div>
  )
}

export default RandomGiphy
