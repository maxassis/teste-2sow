import React, { useState } from "react";
import * as S from "./styles";
import Header from "../../components/header/index";
import Fetch from "../../components/fetchData";
import { useForm } from "react-hook-form";
import FetchName from "../../components/fetchName";
import { useQuery, useQueryClient } from "react-query";
import { useStore } from "../../store";
import Loading from "../../assets/load.gif";

function List() {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  // const [show, setShow] = useState(false);
  const queryClient = useQueryClient();
  const { show, truer, falser } = useStore();

  const { data, error } = useQuery();
  console.log(data);
  console.log(show);

  function onSubmit(data) {
    if (data.busca.trim() !== "") {
      setName(data.busca);
      truer();
      queryClient.invalidateQueries();
    }
  }

  const filtrado = data?.filter((user) => {
    if (user.nome === name) {
      return user;
    }
    // return null;
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
      {show && <FetchName data={filtrado} />}
      <Fetch />
    </>
  );
}

export default List;
