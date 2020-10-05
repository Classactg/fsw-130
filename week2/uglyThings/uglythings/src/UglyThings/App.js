import React from 'react';

import UglyForm from "./UglyForm"
import UglyList from "./Uglylist"
class App extends React.Component {
  constructor(){
    super()
  this.state={array:[]}
}
addOne=(obj) => {
this.setState({
  array:[obj,...this.state.array]
})
}
  render(){return (<div className="App">
     <UglyForm addOne={this.addOne}/>
     <UglyList array={this.state.array}/>
    </div>
  )}
}

export default App;
