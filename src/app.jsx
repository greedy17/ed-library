import React, {Component} from 'react';
import TitleBar from './components/TitleBar/titleBar';
import './app.css';
import BookViewer from './components/BookViewer/bookViewer';
import BookCreator from './components/BookCreator/bookCreator';
import Footer from './components/Footer/footer';

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

  addNewBook(book){
    this.books.push(book);
    this.setState({
      bookNumber: this.books.length -1
    })
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
        <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.goToNextBook()} previousBook={() => this.goToPreviousBook()} />
        <BookCreator addNewBook={this.addNewBook.bind(this)}/>
        <Footer/>
      </div>  
    )
  }
}

export default App;