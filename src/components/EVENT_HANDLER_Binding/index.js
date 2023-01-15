import React, { Component } from 'react'

class EVENT_HANDLER_Binding extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count:0
        }
        this.handlerBinding = this.handlerBinding.bind(this);
        this.handlerBindingDecrese = this.handlerBindingDecrese.bind(this);
    }
    handlerBinding(){
        this.setState({
          count : this.state.count + 1
        })
    }
    handlerBindingDecrese(){
        this.setState({
            count : this.state.count - 1
        })
    }
    render() {
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handlerBinding}>Increse</button>
            <button onClick={this.handlerBindingDecrese}>Deccrese</button>
        </div>
        )
    }
}

export default  EVENT_HANDLER_Binding;
