import React from 'react'

class Todo extends React.Component{

    render(){
        return (
            <>
            <h4 className = {`task ${this.props.task.completed? "completed" : ""}`} 
                onClick = {() => {this.props.toggleCompleted(this.props.task.id)}}>{this.props.task.task}</h4>
            </>
        )
    }
}
export default Todo; 