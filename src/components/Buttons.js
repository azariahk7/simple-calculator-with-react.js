import React from 'react';

const buttons = (props) => {
    return (
        <button onClick={props.calcu}>{props.children}</button>
    )
}

export default buttons;