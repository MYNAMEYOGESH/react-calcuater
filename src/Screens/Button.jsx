import React, { Component } from "react";
 class Btn extends Component {
    render() {
        return(
           <button onClick={ () => this.props.handler(this.props.title)} > {this.props.title } </button>
        )
    }
 }
 export default Btn