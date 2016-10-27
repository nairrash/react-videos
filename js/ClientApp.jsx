/* global React ReactDOM */
const React = require('react')
const ReactDOM = require('react-dom')

const MyTitle = require('./MyTitle')
const myTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = function() {
 return (
   <div>
     <MyTitle title="watves" color="mediumaquamarine" />
     <MyTitle title="LOL" color="papayawhip" />
     <MyTitle title="gdjwegfjregfk" color="#f06d06" />


   </div>
  )
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
