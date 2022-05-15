import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

class ConditonalRendaring extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       logedIn : false
    }
  }
  render() {
   const {logedIn} = this.state;
   let element;
   element = logedIn ? <HomePage /> : <LoginPage />

   return(
     <div>
      {element}
     </div>
   )
   
  }

  
}


export default ConditonalRendaring;
