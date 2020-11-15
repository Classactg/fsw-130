import {connect} from "react-redux";
import React from "react";

import {addtvShows, deleteMovie} from '../Redux/movies/tvShows/actions'


class TvShows extends React.Component {
  constructor (){
    super()
    this.state = {zombieMovies:"", moviesDigits:"", email:""}
  }
  handleChange = event => {
    const {
      name, value 
    } = event.target
    this.setState({
      [name]: value
    })
  }
render (){ 
  console.log(this.props, "line21")
  return (
    <div className="TvShows">
      <form><input placeholder = "TV Shows" name = "zombieMovies" value = {this.state.zombieMovies} onChange = {this.handleChange}>
      
      </input>
      <button onClick={e =>{ 
        e.preventDefault()
        this.props.dispatch(addtvShows({zombieMovies: this.state.zombieMovies, moviesDigits: this.state.moviesDigits, email: this.state.email}))}}>Submit</button>
      <input placeholder = "Year" name = "moviesDigits" value = {this.state.moviesDigits} onChange = {this.handleChange}>

      </input>
      <input placeholder = "Actors"name = "email" value = {this.state.email} onChange = {this.handleChange}>

      </input></form>
      {this.props.movies.map(movie => {console.log(movie)
      return(<div>
        <h1>{movie.email}</h1>
        <p>{movie.moviesDigits}</p>
      <h1>{movie.zombieMovies}</h1>
      </div>)})}
    </div>
  )};
}
const mapStateToProps = (state) => {
  console.log(state, "line40")
  return {movies: state.movies.movies}
}
export default connect(mapStateToProps)(TvShows);