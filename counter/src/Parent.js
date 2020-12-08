import React from "react";
import ReactDOM from 'react-dom';
import Child from './Child';
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import store from '../src/store/store'
import {increment, decrement} from './actions/action'


// class Parent extends React.Component {
//     state =  {
//         count : 0
//     }    

//     increment = () => {
//         const { count } = this.state   //abreviamos this.state.count a count (codigo más limpio)
//         this.setState({
//             count: count + 1
//         });
//     }
//     decrement = () => {
//         const { count } = this.state
//         if (count > 0) {
//             this.setState({
//                 count: count - 1
//             });
//         }
//     }
    
//     render() {
//         const { count } = this.state
//         return (
//         <main className="main">
//             <Child increase={this.increment} decrease={this.decrement} value={count} />    
//         </main>
//        );
//     }    
// }

// export default Parent;

const Parent = (props) => {
    return(
        <Child {...props} />
    );
}


export default Parent;




