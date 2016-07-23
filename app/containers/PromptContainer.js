var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link



var PromptContainer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 60};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text center" style={transparentBg}>
        <h1 className="jumbotron col-sm-6 col-sm-offset-4"style={transparentBg}> Quiz </h1>
          <div className="label label-danger">Time Elapsed: {this.state.secondsElapsed}</div>
          <div className="col-sm-12">
            <p className="text text-danger"><b> Choose Your Answer 1+2 = ?</b></p>
            <p><b>1.&nbsp;</b>  <button className="btn btn-default " >4</button></p>
            <p><b>2.&nbsp;</b>  <button className="btn btn-default" >3</button></p>
            <p><b>3.&nbsp;</b>  <button className="btn btn-default" >7</button></p>
            <p><b>4.&nbsp;</b>  <button className="btn btn-default" >9</button></p>
            <br></br>

            <Link to='/question1'>
              <button className=" col-sm-3 col-sm-offset-10 btn btn-lg btn-info">Next</button>
            </Link>


          </div>

      </div>


    )
  }

  });


module.exports = PromptContainer;
