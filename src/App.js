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
    return ({data: []});
  },
  componentDidMount: function () {
    $.ajax('/api/resolutions').done(function(data){
      this.setState({data: data});
    }.bind(this));
  },
  addResolution: function(resolution){
    console.log('Adding resolution ' + resolution);
    $.ajax({
      type: 'POST', url: '/api/resolutions', contentType: 'application/json',
      data: JSON.stringify(resolution),
      success: function(data) {
        var resolution = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var resolutionsModified = this.state.data.concat(resolution);
        this.setState({data: resolutionsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding bug:", err);
      }
    });
  },
  render: function () {
    return (
      <div>
        <ResoulitionFilter />
        <ResolutionTable data={this.state.data}/>
        <ResolutionAdd addResolution={this.addResolution}/>
      </div>
    );
  }
});

ReactDOM.render(
  <ResolutionList />,
  document.getElementById('main')
);
