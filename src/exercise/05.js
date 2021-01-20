// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', style = {}, size = 'small', children}) => {
  const finalClassName = `box box--${size} ${className}`
  const finalStyle = {fontStyle: 'italic', ...style}
  return (
    <div className={finalClassName} style={finalStyle}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{background: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{background: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{background: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
