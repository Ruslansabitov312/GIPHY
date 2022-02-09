import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGiphy } from '../../redux/actions/getGiphyAction'
import './trending.css'

const Giphy = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.giphy.data)
  console.log(data)

  useEffect(async () => {
    await dispatch(getGiphy())
  }, [dispatch])

  return (
    <div className='trending'>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img className='trending-img' src={el.images.fixed_height.url} />
          </div>
        )
      })}
    </div>
  )
}

export default Giphy
