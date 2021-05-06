import React from 'react'

class Todo extends React.Component{

    render(){
        return (
            <div>
            <h4 className = {`task ${this.props.task.completed? "completed" : ""}`} onClick = {() => {this.props.toggleCompleted(this.props.task.id)}}>{this.props.task.task}</h4>
            </div>
        )
    }
}
export default Todo; 