const React = require('react')// eslint-disable-line no-unused-vars

const { Link } = require('react-router')

var Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search'/>
      <Link to='/search' className='browse-all'> or Browse All !</Link>
    </div>

  </div>
)

module.exports = Landing
