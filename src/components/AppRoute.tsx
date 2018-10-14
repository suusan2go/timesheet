import * as React from "react"
import { Route } from "react-router-dom"

interface IProps {
  component: new (props: any) => React.Component<any>;
  layout: (new (props: any) => React.Component<any>) | React.SFC<any>;
  exact: boolean;
  path: string
}

const AppRoute: React.SFC<IProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}: IProps) => {
  const renderer = (props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
  )
  return <Route
    {...rest}
    render={renderer}
  />
};

export default AppRoute;