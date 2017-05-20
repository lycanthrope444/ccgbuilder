var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var deckbuilder = require('./components/deckbuilder.jsx').deckbuilderContainer;

var AppRouter = Backbone.Router.extend({
  routes : {
    '':'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(deckbuilder),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router
};
