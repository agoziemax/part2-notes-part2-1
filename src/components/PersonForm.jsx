import React from 'react'

function PersonForm({onSubmit, value, onChange, numChange}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          Name:{' '}
          <input
            className="ms-3"
            type="text"
            placeholder="Enter a name"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          Number:{' '}
          <input
            type="number"
            value={phone}
            numChange={numChange}
          />
        </div>
        <div>
          <button className="btn bg-primary mb-3" type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
