import React from 'react';

function Submit({ handleSubmit }) {
 
    return (
        <center>
         <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
        </center>
     
    );
  }

export default Submit;