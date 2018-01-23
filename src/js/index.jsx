import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Table from './components/Table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: []
    }

    this.handleNewSubmission = this.handleNewSubmission.bind(this);
  }

  handleNewSubmission(arr) {
    const submitted = this.state.submitted;
    submitted.push(arr);
    this.setState({
      submitted: submitted
    });
  }

  render () {
    return (
      <div>
        <Form handleNewSubmission={this.handleNewSubmission} />
        <Table submitted={this.state.submitted} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));