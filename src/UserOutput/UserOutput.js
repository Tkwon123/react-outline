import React from 'react';

const userOutput = ( props ) => {
    return (
        <div >
            <input onChange={props.change} />
            <p> {props.userAccount} </p>
        </div>
    )
};

export default userOutput;