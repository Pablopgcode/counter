import React from "react";
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {count : 0}                                         
    }

    increment() {
        this.setState({count: parseInt(this.state.count + 1)});
    }

    decrement() {
        if (this.state.count > 0) {
            this.setState({count: parseInt(this.state.count -1)});
        }
    }

    render() {
       return (
        <main className="main">
            <Child increase={this.increment.bind(this)} decrease={this.decrement.bind(this)} value={this.state.count} />    
        </main>
       );
    }     
}

export default Parent;