import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container.js'
import Aform from './Aform.js'

import books from './someBooks.js'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allBooks : books,
      rentedBooks: []
    }
  }

  exchangeBook = () => {
    let allofTheBooks = this.state.allBooks
    let rentalBooks = this.state.rentedBooks

    rentalBooks.push(allofTheBooks.pop())

    this.setState({
      allBooks : allofTheBooks,
      rentedBooks : rentalBooks
    })
  }

  addBook = (book) => {
    let allofTheBooks = this.state.allBooks
    allofTheBooks.push(book)
    console.log(book)
    console.log(allofTheBooks)
    this.setState({
      allBooks: allofTheBooks
    })
  }








  render(){
    return (
      <div className="App">
        <Container handleClick={this.exchangeBook} cardsToDisplay={this.state.allBooks} name={'shelf'}></Container>
        <Container handleClick={this.exchangeBook} cardsToDisplay={this.state.rentedBooks} name={'rental cart'}></Container>
        <Aform handleSubmit={this.addBook}></Aform>
      </div>
    );
  }
 
}
