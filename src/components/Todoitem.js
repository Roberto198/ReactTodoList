import React, { Component } from 'react'
import PropTypes from 'prop-types'




export class Todoitem extends Component {



  render() {
    const {id, title} = this.props.todo;


    return (

      <div style={grid}>
        <div style={checkbox}>
          <input type='checkBox' onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
        </div>
        <p>{title}</p>
        <button style ={button} onClick={this.props.delTodo.bind(this, id)}>X</button>
        
      </div>
    )}

}
//PropTypes
Todoitem.propTypes ={
  todo:PropTypes.object.isRequired,
  toggleComplete:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
}

let grid = {

  paddingTop: '10px',
  display: 'grid',
  gridTemplateColumns: '20% 70% 10%',
  gridGap: '10px',
  backgroundColor: 'fff',
  color: '#444',

  }

let checkbox = {
  display: 'block',
  verticalAlign: 'center',
  textAlign:'center',
  height: '15px', 
  paddingTop: '2px'
}
let button = {
  maxHeight: '22px'
}

export default Todoitem
