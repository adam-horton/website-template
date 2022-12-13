import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Nada",
    }
  }

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((json) => {this.setState({ message: json.message })})
      .catch((e) => console.error(e.message));
  }

  render() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <p>
            This is a <b>really</b> cool website
          </p>
        </header>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Cookie Clicker</button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        <p>You have {this.state.count} cookies</p>
        <p>The secret message is {this.state.message}</p>
      </div>
    );
  }
}

export default Homepage;
