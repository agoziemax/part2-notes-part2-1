import React from 'react'

function Filter({value, onChange}) {
  return (
    <div className="mb-5 mt-3">
      filter names:{' '}
      <input
        type="text"
        placeholder="search for names"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Filter
