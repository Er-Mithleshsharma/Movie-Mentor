import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img src={IMG_CDN+posterPath} alt="" />
    </div>
  )
}

export default MovieCard