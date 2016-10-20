var ResolutionRow = React.createClass({
  displayName: 'ResolutionRow',

  render: function () {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.resolution.name
      ),
      React.createElement(
        'td',
        null,
        this.props.resolution.status
      )
    );
  }
});

var ResoulitionFilter = React.createClass({
  displayName: 'ResoulitionFilter',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Filter'
    );
  }
});

var ResolutionTable = React.createClass({
  displayName: 'ResolutionTable',

  render: function () {
    var resolutionRows = this.props.data.map(function (resolution) {
      return React.createElement(ResolutionRow, { key: resolution.id, resolution: resolution });
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Name'
            ),
            React.createElement(
              'th',
              null,
              'Status'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          resolutionRows
        )
      )
    );
  }
});

var ResolutionAdd = React.createClass({
  displayName: 'ResolutionAdd',

  getInitialState: function () {
    return { name: '', status: '' };
  },
  handleNameChange: function (e) {
    this.setState({ name: e.target.value });
  },
  handleStatusChange: function (e) {
    this.setState({ status: e.target.value });
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var name = this.state.name.trim();
    var status = this.state.status.trim();
    if (!name || !status) {
      return;
    }
    this.props.addResolution({ name: name, status: status });
    this.setState({ name: '', status: '' });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { name: 'resolutionAdd', onSubmit: this.handleSubmit },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Resolution Name',
          value: this.state.name,
          onChange: this.handleNameChange
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Status',
          value: this.state.status,
          onChange: this.handleStatusChange
        }),
        React.createElement('input', { type: 'submit', value: 'Add Resolution' })
      )
    );
  }
});

var ResolutionList = React.createClass({
  displayName: 'ResolutionList',

  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    $.ajax('/api/resolutions').done(function (data) {
      this.setState({ data: data });
    }.bind(this));
  },
  addResolution: function (resolution) {
    console.log('Adding resolution ' + resolution);
    resolution.id = this.state.data.length + 1;
    var newData = this.state.data.slice();
    newData.push(resolution);
    this.setState({ data: newData });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(ResoulitionFilter, null),
      React.createElement(ResolutionTable, { data: this.state.data }),
      React.createElement(ResolutionAdd, { addResolution: this.addResolution })
    );
  }
});

ReactDOM.render(React.createElement(ResolutionList, null), document.getElementById('main'));
