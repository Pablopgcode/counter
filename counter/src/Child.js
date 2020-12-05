import React from "react";

const Child = (props) => {
    console.log(props);
       return (
        <main className="main">
            <button onClick={props.increase}>Increment</button>
            <span>{props.value}</span>
            <button onClick={props.decrease}>Decrement</button>
        </main>
       );
    }

export default Child;