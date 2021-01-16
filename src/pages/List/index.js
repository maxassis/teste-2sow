import React from "react";
import * as S from "./styles";
import Header from "../../components/header/index";
import Fetch from "../../components/fetchData";

function List({ data }) {
  console.log(data);

  return (
    <>
      <Header menu1={"Busca"} menu2={"Cadastro"} menu3={"Logout"} />
      <S.WrapperTitle>
        <S.Title>Lista de Usuarios</S.Title>
      </S.WrapperTitle>
      <S.WrapperInput>
        <S.Title2>Busque um usuario pelo nome</S.Title2>
        <S.Frm>
          <S.Inpt name="name" placeholder="digite um nome" />
          {/* <button>Enviar</button> */}
        </S.Frm>
      </S.WrapperInput>
      <Fetch />
    </>
  );
}

export default List;
