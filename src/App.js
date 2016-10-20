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
  getInitialState: function() {
    return {name: '', status: ''}
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value})
  },
  handleStatusChange: function(e) {
    this.setState({status: e.target.value})
  },
  handleSubmit: function(event){
    event.preventDefault();
    var name = this.state.name.trim();
    var status = this.state.status.trim();
    if (!name || !status) {
      return;
    }
    this.props.addResolution({name: name, status: status});
    this.setState({name: '', status: ''});
  },
  render: function() {
    return (
      <div>
        <form name="resolutionAdd" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Resolution Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Status"
            value={this.state.status}
            onChange={this.handleStatusChange}
          />
          <input type="submit" value="Add Resolution" />
        </form>
      </div>
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
  testResolution: function(){
    var testResolution = {id: this.state.data.length+1,
       name: "Test Resolution",
       status: "Complete"};
    this.addResolution(testResolution);
  },
  addResolution: function(resolution){
    console.log('Adding resolution ' + resolution);
    var newData = this.state.data.slice();
    newData.push(resolution);
    this.setState({data: newData});
  },
  render: function () {
    return (
      <div>
        <ResoulitionFilter />
        <ResolutionTable data={this.state.data}/>
        <ResolutionAdd addResolution={this.addResolution}/>
        <button onClick={this.testResolution}>Add Test Data</button>
      </div>
    );
  }
});

ReactDOM.render(
  <ResolutionList />,
  document.getElementById('main')
);
