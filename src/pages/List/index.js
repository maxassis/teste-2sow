import React, { useState } from "react";
import * as S from "./styles";
import Header from "../../components/header/index";
import Fetch from "../../components/fetchData";
import { useForm } from "react-hook-form";
import FetchName from "../../components/fetchName";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../assets/load.gif";

function List() {
  const { register, handleSubmit } = useForm();
  const [toggleFetch, setToggleFetch] = useState(false);
  const [name, setName] = useState("nildis");
  const [show, setShow] = useState(false);

  const { data, error, isLoading, refetch } = useQuery();
  console.log(data);

  function onSubmit(data) {
    if (data.busca.trim() !== "") {
      setName(data.busca);
      // setToggleFetch(true);
      // setToggleFetch(false);
      //  setShow(true);
      refetch();
    }
  }

  const filtrado = data?.filter((user) => {
    if (user.nome === "chiquinho") {
    }
    return user;
  });

  console.log(filtrado);

  return (
    <>
      {error ? <span>deu erro</span> : null}
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
      {isLoading ? null : <FetchName data={filtrado} />}
      <Fetch />
    </>
  );
}

export default List;
