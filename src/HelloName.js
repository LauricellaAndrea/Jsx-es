import React from "react";

class App extends React.Component {

    Func(name) {
      return <h1>Hello, {name}</h1>;
    }
  
    render() {
      return <div>{this.Func("Marco")}</div>;
    }
  }
  
  export default App;