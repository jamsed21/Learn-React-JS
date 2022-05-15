import React, { Component } from 'react'
import './style.css'

export default class State extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment = () => {
        this.setState({
            count : this.state.count +1
        })
    }


    dicriment = () => {
        this.setState({
            count : this.state.count - 1
        })
    }



  render() {
      const {count} = this.state;
    return (
      <div>
          <h1>Count: {count}</h1>
          <button onClick={this.increment}> + </button>
          <button onClick={this.dicriment}> - </button>
      </div>
    )
  }
}
