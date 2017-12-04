import React, { Component } from "react"
import { createStore } from 'redux'


class ReduxDemo extends Component {
  constructor(props) {
      super(props)

    }
  render(){

    const reducer = function(state, action){
      if(action.type ==='ATTACK'){
        return action.payload
      }
     return state
    }



    const store = createStore(reducer, 'peace')


     store.subscribe(() =>  {
       console.log('store is now', store.getState());
     })


    store.dispatch({type: 'ATTACK', payload: 'iron man'})

  return(
    <div>hello world</div>
   )
  }
}
  export default ReduxDemo;
