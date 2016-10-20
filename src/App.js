var ResoulitionFilter = React.createClass({
    render: function() {
      return (
        <div>Filter</div>
      );
    }
});

var ResolutionTable = React.createClass({
  render: function() {
    return (
      <div>Table</div>
    );
  }
});

var ResolutionAdd = React.createClass({
    render: function() {
      return (
        <div>Add</div>
      );
    }
});

var ResolutionList = React.createClass({
  render: function () {
    return (
      <div>
        <ResoulitionFilter />
        <ResolutionTable />
        <ResolutionAdd />
      </div>
    );
  }
});

ReactDOM.render(
  <ResolutionList />,
  document.getElementById('main')
);
