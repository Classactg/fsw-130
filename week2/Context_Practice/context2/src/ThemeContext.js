import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "light",
            movie: "Toy Story"    
    }

    toggleTheme = () => {
        
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    toggleMovie = () => {
        this.setState(prevState => {
            return {
                movie: "Toy Story 2"  
            }
        })
    }
      render() {
          return (
          <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme, movie: this.state.movie, toggleMovie: this.toggleMovie}}>
              {this.props.children}
              </Provider>
          )    
      }  
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}