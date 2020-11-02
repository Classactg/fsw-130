import {connect} from "react-redux";
import React from "react";
import './App.css';
import {addMovie, deleteMovie} from './Redux/movies/actions.js';


class App extends React.Component {
  constructor (){
    super()
    this.state = {zombieContacts:"", contactsDigits:"", email:""}
  }
  handleChange = event => {
    const {
      name, value 
    } = event.target
    this.setState({
      [name]: value
    })
  }
render (){  return (
    <div className="App">
      <form><input name = "zombieContacts" value = {this.state.zombieContacts} onChange = {this.handleChange}>
      
      </input>
      <button onClick={e =>{ 
        e.preventDefault()
        this.props.dispatch(addMovie({zombieContacts: this.state.zombieContacts, contactsDigits: this.state.contacts, email: this.state.email}))}}>Submit</button>
      <input name = "contactsDigits" value = {this.state.contactsDigits} onChange = {this.handleChange}>

      </input>
      <input name = "email" value = {this.state.email} onChange = {this.handleChange}>

      </input></form>
      {this.props.contacts.map(movie => {console.log(movie)
      return(<div></div>)})}
    </div>
  )};
}
const mapStateToProps = (state) => {
  return {contacts: state.contacts}
}
export default connect(mapStateToProps)(App);