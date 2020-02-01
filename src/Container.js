import React from 'react';
import './App.css';
import Card from './Card.js'


export default class Container extends React.Component {




  displayCards(){
      return this.props.cardsToDisplay.map((item, index) => {
          return <Card cardDetails={item} key={index}></Card>
      })
  }





  render(){
    return (
      <div onClick={e => this.props.handleClick()}>
        <h1>{this.props.name}</h1>
        {this.displayCards()}
      </div>
    );
  }
 
}
