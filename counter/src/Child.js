import React from "react";


const Child = (props) => {
    console.log(props);
    const {value, onIncrement, onDecrement} = props;
    return (
        <div className="row">     
            <div className="col-md-1">
                <button onClick={onIncrement}>Increment</button>  
            </div>
            <div className="col-md-1">
                <span>{value}</span>
            </div>
            <div className="col-md-1">
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>    
       );
    }

export default Child;