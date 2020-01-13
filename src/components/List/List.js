import React from 'react';
import './List.css'
const List = (props) => {
    return (
        <div className={'list'} >
        <p>{props.text}</p> <span>{props.dataTime}</span> <button  onClick={props.remove}>remove</button>
        </div>
    );
};

export default List;