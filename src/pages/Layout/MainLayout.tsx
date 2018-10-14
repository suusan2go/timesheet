import * as React from 'react'

const MainLayout: React.SFC<any> = (props: any) => (
  <div>
    <h1>Main</h1>
    {props.children}
  </div>
);

export default MainLayout;
