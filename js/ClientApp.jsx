/* global React ReactDOM */

const React = require('react')// eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom')// eslint-disable-line no-unused-vars

var App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search'/>
      <button className='browse-all'> or Browse All </button>
    </div>

  </div>
)

ReactDOM.render(<App/>, document.getElementById('app'))// eslint-disable-line no-unused-vars
