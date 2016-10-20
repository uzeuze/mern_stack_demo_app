var ResolutionRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.resolution.name}</td>
        <td>{this.props.resolution.status}</td>
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
    var resolutionRows = this.props.data.map(function(resolution){
      return (
        <ResolutionRow key={resolution.id} resolution={resolution}/>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {resolutionRows}
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
  getInitialState: function() {
    return ({data: [
      {id: 1, name: "React", status: "Incomplete"},
      {id: 2, name: "MongoDB", status: "Incomplete"},
      {id: 3, name: "Express", status: "Incomplete"},
    ]});
  },
  render: function () {
    return (
      <div>
        <ResoulitionFilter />
        <ResolutionTable data={this.state.data}/>
        <ResolutionAdd />
      </div>
    );
  }
});

ReactDOM.render(
  <ResolutionList />,
  document.getElementById('main')
);
