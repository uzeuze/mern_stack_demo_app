var ResolutionRow = React.createClass({
  displayName: "ResolutionRow",

  render: function () {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.name
      )
    );
  }
});

var ResoulitionFilter = React.createClass({
  displayName: "ResoulitionFilter",

  render: function () {
    return React.createElement(
      "div",
      null,
      "Filter"
    );
  }
});

var ResolutionTable = React.createClass({
  displayName: "ResolutionTable",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Name"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(ResolutionRow, { name: "Test1" }),
          React.createElement(ResolutionRow, { name: "Test2" })
        )
      )
    );
  }
});

var ResolutionAdd = React.createClass({
  displayName: "ResolutionAdd",

  render: function () {
    return React.createElement(
      "div",
      null,
      "Add"
    );
  }
});

var ResolutionList = React.createClass({
  displayName: "ResolutionList",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ResoulitionFilter, null),
      React.createElement(ResolutionTable, null),
      React.createElement(ResolutionAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(ResolutionList, null), document.getElementById('main'));
