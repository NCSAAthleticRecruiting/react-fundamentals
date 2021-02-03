// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

        //   function handleSubmit(event) {
        //     event.preventDefault()
        //     const username = event.target.elements.usernameInput.value
        //     onSubmitUsername(username)
        //   }

        //   return (
        //     <form onSubmit={handleSubmit}>
        //       <div>
        //         <label htmlFor="usernameInput">Username:</label>
        //         <input id="usernameInput" type="text" />
        //       </div>
        //       <button type="submit">Submit</button>
        //     </form>
        //   )
        // }

        // function App() {
        //   const onSubmitUsername = username => alert(`You entered: ${username}`)
        //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
        // }



          // VALIDATE LOWER CASE
        //   const [error, setError] = React.useState(null)
        //   const inputRef = React.useRef(null)

        //   function handleSubmit(event) {
        //     event.preventDefault()
        //     const username = inputRef.current.value
        //     onSubmitUsername(username)
        //   }

        //   function handleChange(event) {
        //     const username = inputRef.current.value
        //     const isValid = username === username.toLowerCase()
        //     setError(isValid ? null : 'Username must be lower case')
        //   }

        //   return (
        //     <form onSubmit={handleSubmit}>
        //       <div>
        //         <label htmlFor="usernameInput">Username:</label>
        //         <input onChange={handleChange} ref={inputRef} id="usernameInput" type="text" />
        //         <div role="alert" style={{color: 'red'}}>{error}</div>
        //       </div>
        //       <button disabled={Boolean(error)} type="submit">Submit</button>
        //     </form>
        //   )
        // }

        // function App() {
        //   const onSubmitUsername = username => alert(`You entered: ${username}`)
        //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
        // }



  // CONTROL THE INPUT VALUE
  const [username, setUsername] = React.useState('')
  const inputRef = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const username = inputRef.current.value
    setUsername(username.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          id="usernameInput"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
