import React, { useRef } from "react";
import * as S from "./styles";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/header";

function receiveToken() {
  localStorage.setItem("token", uuidv4());
}

function Login() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("digite um email valido")
          .required("o email e obrigatorio"),
        password: Yup.string()
          .required("Insira uma senha")
          .min(8, "minimo de 8 caracteres"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
    reset();
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.LoginBox>
          <S.Title>Login</S.Title>

          <S.Frm onSubmit={handleSubmit} ref={formRef}>
            <S.Inpt name="email" placeholder="Email" />
            <S.Inpt name="password" type="password" placeholder="Senha" />

            <S.Btn onClick={receiveToken}>Entrar</S.Btn>
          </S.Frm>
        </S.LoginBox>
      </S.Wrapper>
    </>
  );
}

export default Login;
