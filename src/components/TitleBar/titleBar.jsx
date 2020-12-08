import React from 'react';
import './titleBar.css';

const titleBar = () => {
  return (
    <div className='row row-spacer'>
      <div className='col-md-12' style={{padding: 0}}>
        <div className='titlebar-nav'>
          <h1>Ed's Library</h1>
        </div>
      </div>
    </div>
  )
}

export default titleBar;