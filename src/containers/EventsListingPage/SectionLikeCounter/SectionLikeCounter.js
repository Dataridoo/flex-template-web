import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter';

const CounterApp = (props) => (
    <div>
      <Counter />
    </div>
  )

class SectionLikeCounter extends React.Component{
  
  render(){
    return (
       <Provider store={store}>
        <CounterApp />
       </Provider>
      )
    }
}

export default SectionLikeCounter;