// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


function Box({className, size, style, ...otherProps}) {

  const boxSizeClassName = size ? `box--${size}` : ''
  return <div
    className={`box ${className} ${boxSizeClassName}`}
    style={{fontStyle:'italic', backgroundColor: 'green', ...style}} // adding style last allows the user to have priority
    {...otherProps}
    />
} // this is a styled component
// leave style as an implementation detail to the box component

function App() {

  return (
    <div>
      <Box size='small' className="try" >small default color box</Box>
      <Box className='box--small' style={{backgroundColor:'lightblue'}}>small lightblue box</Box>
      <Box className='box--medium' style={{backgroundColor:'pink'}}>medium pink box</Box>
      <Box className='box--large' style={{backgroundColor:'orange'}}>large orange box</Box>
    </div>
  )
}

export default App
