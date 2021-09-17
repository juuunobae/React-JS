import React from "react";

// 리액트 라우터 패키지들을 import
import { Link, withRouter } from "react-router-dom";

// js에서 css를 사용하기 위해 스타일링 프레임워크 import
import styled from "styled-components";

// Header 변수에 header 태그의 스타일링을 해주고 넣어준다.
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

// List 변수에  ul 태그의 스타일링을 해주고 넣어준다.
const List = styled.ul`
  display: flex;
`;

// Item 변수에 li 태그의 스타일링을 해주고 넣어준다.
const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${(props) => (props.current ? "#3498db" : "transparent")};
`;
// styled에서 component의 props를 사용할 수 있다.
// current가 true이면 새로운 색을 추가하고, false이면 부모와 동일한 색을 추가한다.

// SLink 변수에 Link 리액트 컴포넌트의 스타일링을 해주고 넣어준다.
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// withRouter를 사용해 Router에 대한 정보를 받을 수 있기 때문에 loacation.pathname을 통해
// 현재 웹사이트의 어떤 url에 있는지 알 수 있다.
// navigation에 현재 위치하고 있는 곳을 표시하기 위해 withRouter를 사용
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        {/* pathname이 홈 경로와 같으면 current에 true를 저장한다. */}
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        {/* pathname이 tv 경로와 같으면 current에 true를 저장한다. */}
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        {/* pathname이 search 경로와 같으면 current에 true를 저장한다. */}
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
