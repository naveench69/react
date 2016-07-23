var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1><b>Quiz</b></h1><br></br>
      <p className='lead'>Section 1 contains choose the answers. And each question has one minute time</p><br></br>
      <Link to='/quiz'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}

module.exports = Home;
