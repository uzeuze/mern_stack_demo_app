var ResolutionRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.name}</td>
      </tr>
    );
  }
});

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
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <ResolutionRow name="Test1"/>
            <ResolutionRow name="Test2"/>
          </tbody>
        </table>
      </div>
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
