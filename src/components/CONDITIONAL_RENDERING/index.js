import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin: true
      }
    }
  render() {
    const {isLogin} = this.state
    return (
      <div>
        {isLogin ? <HomePage /> : <LoginPage />}
      </div>
    )
  }
}
export default CONDITIONAL_RENDERING;
