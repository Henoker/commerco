import React from 'react'
import Search from '../icons/Search'

function SearchFilter() {
  return (
    <>
    <button
    className="p-2 rounded-secondary hover:bg-slate-100 transition-colors"
    >
        <Search className="h-6 w-6" />
    </button>
    </>
  )
}

export default SearchFilter