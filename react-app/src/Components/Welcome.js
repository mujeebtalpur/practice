import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
    //   <h1>Hello, Welcome</h1>
    React.createElement('Div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,"Hello this is without jsx"))
    )
  }
}
