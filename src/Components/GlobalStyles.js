// 전체 component에 css를 적용할 수 있는 패키지
import { createGlobalStyle } from "styled-components";

// 기본 html의 style을 없애주는 패키지
import reset from "styled-reset";

// global로 전체 컴포넌트에 적용시키는 css를 css 파일이 아닌 js에 작성
const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:55px;
    }
`;

export default globalStyle;
