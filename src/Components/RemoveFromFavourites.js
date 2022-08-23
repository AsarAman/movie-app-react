import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

const RemoveFromFavourites = () => {
  return (
     <div>
        <span className='fav'>Remove From Favourites <span><AiOutlineDelete className='heart'/></span></span>

    </div>
  )
}

export default RemoveFromFavourites