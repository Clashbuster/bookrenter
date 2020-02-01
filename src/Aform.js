import React from 'react';
import './App.css';


const initialState = {
    title: "",
    author: "",
    pages: ""
}

export default class Aform extends React.Component {
constructor(){
    super()
    this.state = initialState
}


componentDidUpdate(){
    console.log(this.state)
}



inputChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleClick(e){
    e.preventDefault()

    let book = {
        title: this.state.title,
        author: this.state.author,
        pages: this.state.pages
    }

    
    this.props.handleSubmit(book)
    this.setState({
        title: "",
        author: "",
        pages: ""
    })
}
  





  render(){
    return (
      <div>
        <h1>derp derp im a form</h1>
        <form>
            title <br></br>
            <input onChange={e => this.inputChange(e)} name="title" value={this.state.title}></input> <br></br>
            author <br></br>
            <input onChange={e => this.inputChange(e)} name="author" value={this.state.author}></input> <br></br>
            pages <br></br>
            <input onChange={e => this.inputChange(e)} name="pages" value={this.state.pages}></input> <br></br>
            <button onClick={e => this.handleClick(e)} >add a book to the shelf</button>
        </form>
      </div>
    );
  }
 
}
