import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {

    render() {
        return(
            <div>
                <h2> Your tasks for the day: </h2>
                {
                    this.props.todoTasks.map((task) => {
                        return <Todo 
                            task = {task}
                            key = {task.id}
                            toggleCompleted = {this.props.toggleCompleted}
                        />
                    })
                }
            </div>
        )
    }
}

export default TodoList;