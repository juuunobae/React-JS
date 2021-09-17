import React, { Component } from "react";

// Router Components import
import Router from "Components/Router";

// global로 적용될 css 스타일 코드 import
import GlobalStyles from "Components/GlobalStyles";

// html에 추가할 App Component
class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
