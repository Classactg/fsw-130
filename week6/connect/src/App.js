import {connect} from "react-redux"
import React from "react";
import './App.css';
import {addContact, deleteContact} from './redux/actions';

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
      <button onClick={e => {
        e.preventDefault()
        this.props.dispatch(addContact({zombieContacts: this.state.zombieContacts, contactsDigits: this.state.contactsDigits, email: this.state.email}))}}>Submit</button>
      <input name = "contactsDigits" value = {this.state.contactsDigits} onChange = {this.handleChange}>

      </input>
      <input name = "email" value = {this.state.email} onChange = {this.handleChange}>

      </input></form>
      {console.log(this.props.contacts)}
      {this.props.contacts.map((contact, index) => {console.log(contact)
      return(<div key = {index}>
        <h1>{contact.email}</h1>
        <p>{contact.contactsDigits}</p>
      <h1>{contact.zombieContacts}</h1>
      <button id = {index}onClick={e => {
        e.preventDefault()
        this.props.dispatch(deleteContact(index))}}>Delete</button>
      </div>)})}
    </div>
  )};
}
const mapStateToProps = (state) => {
  console.log(state)
  return {...state}
}
export default connect(mapStateToProps)(App);
