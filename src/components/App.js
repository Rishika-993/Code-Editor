import React, { useState } from 'react';
import Editor from './Editor';

function App() {
  const[html, setHtml] = useState("")
  // const[html, setHtml] = useState("")
  // const[html, setHtml] = useState("")

  return (
    <>
    <div className='pane top-pane'>
      <Editor 
        language = 'xml'
        displayName='HTML'
        value={html}
        onchange={setHtml}
      />
      <Editor />
      <Editor />
    </div>
    <div className='pane'>
      <iframe 
        title='output'
        sandbox='allow-scripts'  //fro security reasons to avoid cookies of iframe
        width="100%"
        height="100%"

      />
    </div>
    </>
  )
}

export default App;
