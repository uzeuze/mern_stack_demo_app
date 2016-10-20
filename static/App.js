var ResoulitionFilter = React.createClass({
  displayName: 'ResoulitionFilter',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Filter'
    );
  }
});

var ResolutionTable = React.createClass({
  displayName: 'ResolutionTable',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Table'
    );
  }
});

var ResolutionAdd = React.createClass({
  displayName: 'ResolutionAdd',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Add'
    );
  }
});

var ResolutionList = React.createClass({
  displayName: 'ResolutionList',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(ResoulitionFilter, null),
      React.createElement(ResolutionTable, null),
      React.createElement(ResolutionAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(ResolutionList, null), document.getElementById('main'));
