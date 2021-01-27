import React, { useState } from 'react'

function Display ({ info }) {

  return (
    <div>
      <h2>The display part</h2>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
    </div>
  )
}

export default Display
