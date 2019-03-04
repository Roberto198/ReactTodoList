import React, { Component } from 'react'
import PropTypes from 'prop-types'




export class Todoitem extends Component {

  itemStyle = () => {
    return {
    display: 'flex',
    textAlign: 'left',
    backgroundColor: '#d6ffbc',
    padding: '10px 50px',
    borderBottom: '5px solid white',
    borderRadius: '30px',
    textDecoration: this.props.todo.completed ?'line-through' : 'none',
    marginTop: '10px'
    }
  }

 containerStyle = () => {
    return{
      //textAlign:'center'
    }
  } 



  render() {
    const {id, title} = this.props.todo;


    return (
      <div style={this.containerStyle()}>
      <div style={this.itemStyle()}>
        <div>
        <input type='checkBox' onChange={this.props.toggleComplete.bind(this, id)} style={checkStyle} /> {' '}
        </div>
        <p><span style={titleStyle}>{title}</span>
        </p>
        <div>
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button></div>
        
      </div>
      </div>
    )
  }
}
//PropTypes
Todoitem.propTypes ={
  todo:PropTypes.object.isRequired,
  toggleComplete:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
}


const btnStyle = {
  display: 'inline-block',
  background: '#d6ffcc',
  colour: 'ff#63965a',
  border: 'none',
  padding:'0px 10px',
  borderRadius: '50px',
  cursor: 'pointer',
  float: 'right',
  textAlign: 'right',
  fontFamily: 'Alfa Slab One, cursive',
  fontSize: '1.25rem',
 }
 const titleStyle = {
    marginLeft: '20px'
}
const checkStyle = {
  textAlign:'left'
}

export default Todoitem
