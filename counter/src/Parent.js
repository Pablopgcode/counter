import React from "react";
import Child from './Child';
import {increment, decrement, incrementNValues} from './actions/action'
import { connect } from 'react-redux';


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


const Parent = (props) => {   //props.value
                              //props.increment
                              //props.decrement

    const increment = () => {      
        props.incrementNValues(4);
    }
    
    const decrement = () => {
        props.decrement();
    }
    
    return(
      <Child value={props.value} onIncrement={increment} onDecrement={decrement} />
    )    
    
}   

function mapStateToProps(state) {  //subscripción al estado global
  return {
    value: state.value
  };
}
  
const mapDispatchToProps = {  //acciones que el componenete puede realizar
    increment,
    decrement,
    incrementNValues
};


export default connect(mapStateToProps, mapDispatchToProps)(Parent);








