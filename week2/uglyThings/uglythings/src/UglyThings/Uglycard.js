import React from 'react';
const UglyCard = ({
    index,
    imgUrl,
    title,
    description,
   
    handleDelete=() => {},
   
}) => {
    return(
        <div>
            <h2>UglyCard</h2>
            <img src={imgUrl}></img>
            <h3>{'Title:'}{title}</h3>
            <h3>{'description:'}{description}</h3>
    
            {/* <button onClick={()=> HandleDelete(index)}>Delete this one</button> */}
        </div>
    )
}
export default UglyCard