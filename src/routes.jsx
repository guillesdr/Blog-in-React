import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Layout from './commons/Layout/layout';
import Home from './pages/Home/home';
import Post from "./pages/Post/post";
import NoMatch from "./pages/404/no-match";
import Create from "./pages/Create/create";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/404" component={NoMatch} /> */}
            <Route exact path="/post/:slug" component={Post} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </main>
      </Layout>
    </Router>
  )
};

export default Routes;