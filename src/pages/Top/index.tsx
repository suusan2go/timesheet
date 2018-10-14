import * as React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Top</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Link to="/projects">projects</Link>
        </p>
      </div>
    );
  }
}

export default App;
