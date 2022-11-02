import React from "react";

const nums = (a, b) => a + b 

export class Calc extends React.Component {
    render(){
        return <h2>The sum is {nums(10, 5)}</h2>
    }
}