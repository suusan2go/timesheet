import * as React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <Grid container={true} spacing={24} justify={'center'}>
        <Grid item={true} xs={11} sm={10} md={10} lg={10}>
          <div className="App">
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
              <Link to="/projects">projects</Link>
            </p>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default App;
