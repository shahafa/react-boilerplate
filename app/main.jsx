const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }
  render() {
    return (
      <div>
        <a href="" onClick={this.handleClick.bind(this)}>Clicks: {this.state.clickCount}</a>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('content'));
