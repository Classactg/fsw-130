import React from 'react';


import UglyCard from './Uglycard';
class UglyList extends React.Component {

  render(){return (<div className="UglyList">
     {this.props.array.map((Ugly, index)=><UglyCard {...Ugly}/>)}
     {/* <Uglycard array={""}/> */}
    </div>
  )}
}

export default UglyList;