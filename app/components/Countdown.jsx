var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function (){
    return(
      <div>
        <h1>Countdown Component</h1>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
