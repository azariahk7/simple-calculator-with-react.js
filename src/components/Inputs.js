import React from 'react';

const inputs = (props) => {
    return(
        <div>
        <input type="text" placeholder={props.placeholder} disabled={props.disabled} value={props.value} onChange={props.change}/>
        </div>
    )
   
}

export default inputs;