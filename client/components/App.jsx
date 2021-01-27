import React, { useState } from 'react'
import Display from './Display'

import Form from './Form'

function App () {
  const [info, setInfo] = useState(null)

  return (
    <>
      <h1>Gimme your deets</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Form setInfo={setInfo} />
        {info && <Display info={info} />}
      </div>
    </>
  )
}

export default App
