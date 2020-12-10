import React, {Component} from 'react';

class BookCreator extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      author: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.author);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <div>
                <label>Title:</label>
                <input type='text' name='title' value={this.state.title}
                onChange={this.handleChange} />
              </div>
              <div>
              <label>Title:</label>
                <input type='text' name='title' value={this.state.title}
                onChange={} />
              </div>
              <div>
                <input type='submit' value='Add'/>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BookCreator;