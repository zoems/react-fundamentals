// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const userNameInputRef = React.useRef()
  const [error, setError] = React.useState(null) // use state hook maintains some state for us
  const [username, setUsername] = React.useState('') // maybe not supposed to use 2 states?

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
    console.log(event)
    console.dir(event.target.elements.usernameInput.value)
  }

  // const eventTarget =event.target.element.id

  function handleChange(event) {
    // console.dir(event.target)
    const {value} = event.target
    setUsername(value.toLowerCase())
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
      <div style={{color: 'red'}}>{error}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
