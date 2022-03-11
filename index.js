import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <div>
    <h1 style={{backgroundColor: "purple" , color: "white", padding: "2rem", textAlign: 'center',borderRadius : "5rem"}}> hello this is in line css in jSX</h1>
  </div>,
  document.getElementById('inlineCSS')
);

const internalStyle = {

      backgroundColor: "black" ,
      color: "white",
      padding: "1rem", 
      textAlign: 'center',
      borderRadius : "7rem"
}

ReactDOM.render(
  <div>
    <h1 style={internalStyle}> hello this is internal css in jSX</h1>
  </div>,
  document.getElementById('internalCSS')
);

ReactDOM.render(
  <div>
   <p className='con'> here i using external style sheet </p>
    
  </div>,
  document.getElementById('extarnalCSS')
);

