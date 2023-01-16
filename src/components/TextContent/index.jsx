import React from 'react';
import './style.css';

function TextContent({ children}) {
  return (
    <div className="container-joke">
      <textarea name="" id="" cols="30" rows="10" disabled value={children}></textarea>
    </div>
  )
}

export default TextContent;
