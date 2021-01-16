import React from "react";
import * as S from "./styles";

function Header(props) {
  return (
    <>
      <S.Wrapper>
        <S.Nav>
          <S.Logo>2Swon List</S.Logo>
          <S.Ul>
            <S.Li>{props.menu1}</S.Li>
            <S.Li>{props.menu2}</S.Li>
            <S.Li>{props.menu3}</S.Li>
          </S.Ul>
        </S.Nav>
      </S.Wrapper>
    </>
  );
}

export default Header;
