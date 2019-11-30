import React, { Component } from 'react';
import './divisao.css';


export default class Divisao extends Component {
  
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return(<>
    {
      this.props.type === "2" ?
        <div className="linha">
          <div className="corGrossa"></div>
        </div> :
        <div className="linha">
          <div className="cor"></div>
        </div>
    }
    </>);
  }
}