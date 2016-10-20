var ResolutionList = React.createClass({
  displayName: 'ResolutionList',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Resolution List'
    );
  }
});

ReactDOM.render(React.createElement(ResolutionList, null), document.getElementById('main'));
