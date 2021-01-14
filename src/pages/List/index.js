import React from "react";
import * as S from "./styles";
import Header from "../../components/header/index";

import Table from "../../components/table/index";

function List({ data }) {
  console.log(data);

  return (
    <>
      <Header />
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
      <Table />
    </>
  );
}

export default List;
