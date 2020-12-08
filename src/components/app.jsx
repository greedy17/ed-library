import React, {Component} from 'react';
import TitleBar from './TitleBar/titleBar';
import './app.css'

class App extends Component {
  constructor(props){
    super(props);
    this.books = [
      {title: "Ready Player One", author: "Ernest Cline"},
      {title: "All The Light We Cannot See", author: "Anthony Doer"},
      {title: "The First and Last Freedom", author: "Jiddu Krishnamurti"}
    ]
    this.state = {
      bookNumber: 0
    }
  }

  goToPreviousBook(){
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if(tempBookNumber < 0){
      tempBookNumber = this.books.length - 1;
      this.setState({
        bookNumber: tempBookNumber
      })
    }
  }

  goToNextBook(){
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if(tempBookNumber === this.books.length){
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber
    })
  }
          
  render(){
    return (
      <div className='container-fluid'>
        <TitleBar/>
        <div className='row row-spacer'>
          <div className='col'>
          <button onClick={() => this.goToPreviousBook()}>Prev Book</button>
          </div>
          <div className='col'>
             <h1>{this.books[this.state.bookNumber].title}</h1>
             <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className='col'>
             <button onClick={() => this.goToNextBook()}>Next Book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;