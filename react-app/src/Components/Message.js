import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
        
    }
    changeMesage(){
        this.setState({
            message:'Thank you for Subscribing'
        })
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMesage()}>Suscribe</button>
        </div>
      
    )
  }
}
