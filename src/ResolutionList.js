var React = require('react');
var $ = require('jquery');
var ResolutionFilter = require('./ResolutionFilter');
var ResolutionAdd = require('./ResolutionAdd');
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

var ResolutionTable = React.createClass({
  render: function() {
    var resolutionRows = this.props.data.map(function(resolution){
      return (
        <ResolutionRow key={resolution._id} resolution={resolution}/>
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

var ResolutionList = React.createClass({
  getInitialState: function() {
    return ({data: []});
  },
  componentDidMount: function () {
    this.loadData({});
  },
  loadData: function(filter) {
    $.ajax('/api/resolutions', {data: filter}).done(function(data){
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
        var newData = this.state.data.concat(resolution);
        this.setState({data: newData});
        console.log('data : ' + newData);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Error adding bug:", err);
      }
    });
  },
  render: function () {
    return (
      <div>
        <ResolutionFilter submitHandler={this.loadData}/>
        <ResolutionTable data={this.state.data}/>
        <ResolutionAdd addResolution={this.addResolution}/>
      </div>
    );
  }
});

module.exports = ResolutionList;
