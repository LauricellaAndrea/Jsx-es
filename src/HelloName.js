import React from "react";

const hello = "Hello,"



const name = (x) => x

export class HelloName extends React.Component {
    render(){
        return <h1>{hello} {name("Andrea")}</h1>
    }
}