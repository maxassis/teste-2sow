import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <S.Wrapper>
        <S.Nav>
          <S.Linki to="/">
            <S.Logo>2Swon List</S.Logo>
          </S.Linki>
          <S.Ul>
            <S.Li>
              <S.Linki to={props.url2}>
                <S.Button>{props.menu2}</S.Button>
              </S.Linki>
            </S.Li>
            <S.Li>
              <S.Linki to={"#"}>
                <S.Button onClick={logOut}>{props.menu3}</S.Button>
              </S.Linki>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Wrapper>
    </>
  );
}

export default Header;
