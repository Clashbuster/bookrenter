import React from 'react';
import './App.css';

export default class Card extends React.Component {




  





  render(){
    return (
      <div>
        {this.props.cardDetails.title} <br></br>
        {this.props.cardDetails.author}<br></br>
        {this.props.cardDetails.pages}<br></br>
      </div>
    );
  }
 
}
