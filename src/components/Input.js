import React from 'react';
import '../App.css'


function Input({ value, handleChange }) {
  return (
    <div className="inputfields">
    <input type="email" placeholder='Email' value={value} onChange={handleChange} required/>
    </div>
 
  )
}

export default Input;