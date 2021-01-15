import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function receiveToken() {
  localStorage.setItem("token", uuidv4());
}

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email obrigatorio"),
    password: yup
      .string()
      .required("senha obrigatoria")
      .min(8, "minimo de 8 caracteres"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.LoginBox>
          <S.Title>Login</S.Title>

          <S.Frm onSubmit={handleSubmit(onSubmit)}>
            <S.Inpt name="email" placeholder="Email" ref={register()} />
            {errors.email?.message}
            <S.Inpt
              name="password"
              type="password"
              placeholder="Senha"
              ref={register()}
            />
            {errors.password?.message}

            <S.Btn onClick={receiveToken}>Entrar</S.Btn>
          </S.Frm>
        </S.LoginBox>
      </S.Wrapper>
    </>
  );
}

export default Login;
