var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));







/*var React = require('react');
var ReactDOM = require('react-dom');



var Hello = React.createClass({
  changebttn: function() {
    return (
      <div>tee</div>
    )
  },

  render: function () {
    return (
      <div>Maths
      <h1>1+2 = ?</h1>
      <p>choose your answer</p>
        <div class="bs-example">
          <button type="button" class="btn btn-primary">6</button>
          <br></br>
          <br></br>
          <button type="button" class="btn btn-primary">9</button>
          <br></br>
          <br></br>
          <button type="button" class="btn btn-primary">2</button>
          <br></br>
          <br></br>
          <button type="button" class="btn btn-primary" onClick ={this.changebttn}>3</button>

        </div>


      </div>
    )
  }
});


ReactDOM.render(<Hello />, document.getElementById('app'));
*/
