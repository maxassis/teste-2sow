import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styles";
import Header from "../../components/header/index";
import axios from "axios";

export default function Register() {
  const [inpstate, setInpState] = useState("");

  const schema = yup.object().shape({
    nome: yup.string().required("Nome e obrigatorio"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  /*  const cepFetch = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/cep/json/`);
    setInpState(data.localidade);
    document.getElementById("rua").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    return data;
  }; */

  return (
    <>
      <Header />
      <S.WrapperTitle>
        <h1>Cadastro</h1>
      </S.WrapperTitle>
      <S.WrapperForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="nome" ref={register()}></input>
          {errors.nome?.message}
          <button>teste</button>
        </form>
      </S.WrapperForm>
    </>
  );
}
