import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    todos: []
  } 

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos : res.data}))
}
     /* {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'do the dishes',
        completed: false
      },
      {
        id: 3,
        title: 'shag the missus',
        completed: false
      } */

//toggle completoion
  toggleComplete = (id) =>{
this.setState({
  todos: this.state.todos.map(todo =>
    {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
});
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`
    )
    .then(this.setState({todos: [ ...this.state.todos.filter(todo => todo.id !== id)]
    }))
}

  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    })
    .then(res =>this.setState({todos: [...this.state.todos, res.data]}))
    

  }
  
  containerStyle =()=>{

  }


  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
            </React.Fragment>
        )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}





export default App;
