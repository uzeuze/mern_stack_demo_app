var React = require('react');

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

module.exports = ResolutionAdd;
