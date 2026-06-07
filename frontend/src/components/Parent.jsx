import React from 'react'
import Childs from './Childs'
const Parent = () => {
  return (
<div>
        <Childs name="nandhini" age={18}
        marks={[90,92,94,96,98]}
        person={{name:"naini",dept:["CT"]}}/>
        
    </div>
  )
}

export default Parent
