import React from 'react'
import Prp from './Prp'

const App = () => {
  const ab = ()=>{
    alert("clicked");
    
  }
  return (
    <div>
      <h1>Main function </h1>
      <Prp onc={ab} />
    </div>
  )
}

export default App