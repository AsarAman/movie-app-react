import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {query, setQuery} = useGlobalContext()
  const handleSubmit =(e) =>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e)=> setQuery(e.target.value)}></input>
      </form>

    </div>
  )
}

export default Search