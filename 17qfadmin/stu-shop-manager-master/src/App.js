import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "./routes";
import Frame from "./components/Frame/Index";
import { isLogined } from "./utils/auth";
import "./App.css";

function App() {
  return isLogined() ? (
    <Frame>
      {/*当做props.children*/}
      <Switch>
        {adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        {/***目的是默认展示碳板页面**/}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  ) : (
    <Redirect to="/login" />
  );
}

export default App;
