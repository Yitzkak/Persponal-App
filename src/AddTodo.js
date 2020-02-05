import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    
    } 
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input type = "text" onChange = { this.handleChange } value={this.state.content}/>
                </div>
            </form>   
        )
    }
}

export default AddTodo;