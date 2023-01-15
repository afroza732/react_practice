import React, { Component } from 'react'

class EVENT_HANDLER extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeValue:''
        }
    }
    changeHandler = (e)=> {
        this.setState({
            changeValue : e.target.value
        },() => {
            console.log(this.state.changeValue);
        })
    }
    render() {
        const {changeValue} = this.state;
        return (
        <div>
            <input type="text" onChange={this.changeHandler}/>
            <p>{changeValue}</p>
        </div>
        )
    }
}
export default EVENT_HANDLER;