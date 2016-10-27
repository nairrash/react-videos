/* global React ReactDOM */
var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')
var myTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    myTitleFact({title: 'Props are great', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'second time props are great', color: 'mediumaquamarine'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
