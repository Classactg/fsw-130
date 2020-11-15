import {connect} from "react-redux";
import React from "react";
import './App.css';
import Movie from "./Component/AddMovie";
import TvShows from "./Component/AddTvShow"


class App extends React.Component {
  constructor (){
    super()
    this.state = {zombieMovies:"", moviesDigits:"", email:""}
  }
  
  
render (){ 
  console.log(this.props, "line21")
  return (
    <div className="App">
    <Movie/>
    <TvShows/>  
    </div>
  )};
}
const mapStateToProps = (state) => {
  console.log(state, "line40")
  return {movies: state.movies.movies}
}
export default connect(mapStateToProps)(App);