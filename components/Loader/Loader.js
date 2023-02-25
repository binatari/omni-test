import React from 'react'

const Loader = ({isGreen, isBig}) => {
  return (
<div class={`spinner ${isGreen ? 'green' : 'white'} ${isBig ? 'big' : 'small'}`}></div>
  )
}

export default Loader