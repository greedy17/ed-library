import React, {Component} from 'react';
import TitleBar from './TitleBar/titleBar';
import './app.css'

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className='container-fluid'>
        <TitleBar/>
      </div>
    )
  }
}

export default App;