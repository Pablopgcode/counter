import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Child = (props) => {
    console.log(props);
    const {value, increase, decrease} = props;
    return (
        <div className="row">     
            <div className="col-md-1">
                <button onClick={increase}>Increment</button>
            </div>
            <div className="col-md-1">
                <span>{value}</span>
            </div>
            <div className="col-md-1">
                <button onClick={decrease}>Decrement</button>
            </div>
        </div>    
       );
    }

export default Child;