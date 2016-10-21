var React = require('react');

var ResolutionFilter = React.createClass({
  getInitialState: function() {
    return {status: ""};
  },
  onChangeStatus: function(e) {
    this.setState({status: e.target.value});
  },
  submit: function(){
    this.props.submitHandler({status: this.state.status});
  },
  render: function() {
    return (
      <div>
        <h3>Filter</h3>
        Status:
        <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">(Any)</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
        <button onClick={this.submit}>Apply</button>
      </div>
    );
  }
});

module.exports = ResolutionFilter;
