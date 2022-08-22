import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/register" component={Registration} />
        <Route path="/tim" component={Tim} />
        <Route path="/tentang" component={Tentang} />
        <Route path="/proyek" component={Proyek} />
        <Route path="/klien" component={Klien} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router