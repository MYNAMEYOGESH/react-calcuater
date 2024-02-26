import React, { Component } from "react";  
 class Display extends Component {
    render() {
        return(
            <div className="display">
               <span className="inp"> {this.props.input ? this.props.input : '0' }  </span>
               <span className="out"> {this.props.output ? this.props.output : '0' } </span>
            </div>
        )
    }
 }
 export default Display