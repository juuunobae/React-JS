import React from "react";

// Router를 사용해 routind을 하기 위해 import
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// 각 페이지를 보여 줄 컴포넌트들 import
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";

// header 컴포넌트 import
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      {/* Switch를 사용해 첫번 째 Route와 Redirect를 통한 동시 접근을 render하지 않고 첫번 째 Route에 대한 접근만 render한다.  */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/tv/:id" exact component={Detail} />
        {/* 시용자가 요청한 url과 같은 Route 경로가 없을 시 Redirect 실행 */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
