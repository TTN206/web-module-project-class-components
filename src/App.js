import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todoTasks = [
  {
    task: 'Clean Dishes',
    id: 1234,
    completed: false
  },
  {
    task: 'Sweep and Mop',
    id: 2345,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoTasks: todoTasks,
    }
  }

  handleAddTask = (taskName) => {
    const item = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    const newTodoTask = [...this.state.todoTasks, item ];

    this.setState({
      todoTasks: newTodoTask
    })
  }

  toggleCompleted = (clickedTaskId) => {
    this.setState({
      todoTasks: this.state.todoTasks.map((task) =>{
        if (task.id === clickedTaskId){
          return {
            ...task, completed:!task.completed
          }
        }
        else {
          return task;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoTasks = {this.state.todoTasks} toggleCompleted = {this.toggleCompleted}/>
        <TodoForm handleAddTask = {this.handleAddTask} />
      </div>
    );
  }
}

export default App;
