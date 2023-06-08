import React from 'react'

export default function FunctionClick() {
    function clickFunction(){
        console.log("Click Button")
    }
  return (
    <button onClick={clickFunction}>Click Me!</button>
  )
}
