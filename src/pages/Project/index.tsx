import * as React from 'react';

interface IProps {
  match: { params: { id: string } };
}

class ProjectPage extends React.Component<IProps> {
  public render() {
    const {
      params: { id }
    } = this.props.match;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Projects {id}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ProjectPage;
