import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Child = (props) => {
    console.log(props);
       return (
        <div className="row">     
            <div className="col-md-1">
                <button onClick={props.increase}>Increment</button>
            </div>
            <div className="col-md-1">
                <span>{props.value}</span>
            </div>
            <div className="col-md-1">
                <button onClick={props.decrease}>Decrement</button>
            </div>
        </div>    
       );
    }

export default Child;