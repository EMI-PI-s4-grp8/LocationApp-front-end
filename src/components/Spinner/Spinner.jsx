import React from 'react'

function Spinner() {
    return (
        <div>
        <div className="spinner-border" style={{
            width: "3rem", height: "3rem"
        }} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            <div className="spinner-grow text-primary" role="status" size="md">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
{/* <div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div> */}
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-grow text-dark spinner-grow-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
    )
}

export default Spinner;
