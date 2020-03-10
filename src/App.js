import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todolist = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todolist,
      task: ''
    };
  }

  toggleCompleted = clickedItemId => {
    this.setState({
      todolist: this.state.todolist.map(item => {
        if (item.id === clickedItemId) {
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = TaskName => {
    const newTask = {
      task: TaskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todolist: [...this.state.todolist, newTask]
    })
  }
  
  clearCompleted = () => {
    this.setState({
      todolist: this.state.todolist.filter(item => {
        return item.completed === false;
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
      <TodoList todolist={this.state.todolist} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
