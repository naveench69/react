var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer");
var question = require('../containers/question');
var quest = require('../containers/quest');
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/quiz' component={PromptContainer}/>
      <Route path='/question1' component={question}/>
      <Route path='/question2' component={quest}/>
    </Route>
  </Router>
);

module.exports = routes;
