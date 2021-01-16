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
          <S.Logo>2Swon List</S.Logo>
          <S.Ul>
            <S.Li>
              <S.Linki to={props.url1}>
                <S.Button>{props.menu1}</S.Button>
              </S.Linki>
            </S.Li>
            <S.Li>
              <S.Linki>
                <S.Button>{props.menu2}</S.Button>
              </S.Linki>
            </S.Li>
            <S.Li>
              <S.Linki>
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
