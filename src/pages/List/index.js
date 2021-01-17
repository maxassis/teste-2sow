import React, { useState } from "react";
import * as S from "./styles";
import Header from "../../components/header/index";
import Fetch from "../../components/fetchData";
import { useForm } from "react-hook-form";
import FetchName from "../../components/fetchName";

function List() {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  function onSubmit(data) {
    console.log(data);
    if (data.busca.trim() !== "") {
      const status = !show;
      setShow(status);
    }
  }

  return (
    <>
      <Header
        menu1={"Busca"}
        menu2={"Cadastro"}
        url2={"/register"}
        menu3={"Logout"}
      />
      <S.WrapperTitle>
        <S.Title>Lista de Usuarios</S.Title>
      </S.WrapperTitle>
      <S.WrapperInput>
        <S.Title2>Busque um usuario pelo nome</S.Title2>
        <S.Frm onSubmit={handleSubmit(onSubmit)}>
          <S.Inpt name="busca" placeholder="digite um nome" ref={register()} />
        </S.Frm>
      </S.WrapperInput>
      {show && <Fetch />}
      {/*!show && <FetchName /> */}
    </>
  );
}

export default List;
