import React from "react"; 
import Calculater from './Screens/Calculator'
import "./App.css"

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="container">
        <Calculater/>
      </div>
    )
  }
}
export default App