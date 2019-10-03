import React, { Component } from 'react'

import ExampleComponent from 'xampr-svg-icons'

export default class App extends Component {
  render () {
    let temp=['view-module','view-quilt','home']
    return (
      <div>
        {temp.map((item,index)=> (
          <ExampleComponent name={item} size='24px' color='grey' />
        ))}
         
      </div>
    )
  }
}
