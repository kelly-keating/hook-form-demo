import React, { useState } from 'react'

function Form ({ setInfo }) {
  const [formData, setData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (evt) => {
    setData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setInfo(formData)
  }

  return (
    <div>
      <h2>The form part</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} />
        <br/> {/* don't @ me */}
        <input type='text' name='email' placeholder='Email' onChange={handleChange} />
        <br/> {/* i couldn't be bothered doing css */}
        <input type='submit' value='Save' />
      </form>
    </div>
  )
}

export default Form
