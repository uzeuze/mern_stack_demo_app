var ResolutionRow = React.createClass({
  displayName: "ResolutionRow",

  render: function () {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.resolution.name
      ),
      React.createElement(
        "td",
        null,
        this.props.resolution.status
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
    var resolutionRows = this.props.data.map(function (resolution) {
      return React.createElement(ResolutionRow, { key: resolution.id, resolution: resolution });
    });
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
            ),
            React.createElement(
              "th",
              null,
              "Status"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          resolutionRows
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

  getInitialState: function () {
    return { data: [{ id: 1, name: "React", status: "Incomplete" }, { id: 2, name: "MongoDB", status: "Incomplete" }, { id: 3, name: "Express", status: "Incomplete" }] };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ResoulitionFilter, null),
      React.createElement(ResolutionTable, { data: this.state.data }),
      React.createElement(ResolutionAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(ResolutionList, null), document.getElementById('main'));
