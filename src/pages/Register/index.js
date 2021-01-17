import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styles";
import Header from "../../components/header/index";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Register() {
  const schema = yup.object().shape({
    cpf: yup
      .string()
      .required("Digite um cpf valido")
      .min(14, "digite todos os numeros"),
    cep: yup
      .string()
      .required("Digite um cep valido")
      .min(9, "digite todos os numeros"),
    nome: yup.string().required("Nome e obrigatorio"),
    email: yup.string().email().required("Email e obrigatorio"),
    numero: yup.string().required("numero e obrigatorio"),
  });

  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    const cep = data.cep.replace(/-/g, "").replace(/\./g, "");

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        console.log(response.request.status);
        if (
          response.request.status === 200 &&
          response.data.erro === undefined
        ) {
          document.getElementById("cidade").value = response.data.localidade;
          document.getElementById("bairro").value = response.data.bairro;
          const rua = (document.getElementById("rua").value =
            response.data.logradouro);
          rua !== undefined && executePost();
          alert("usuario cadastrado com sucesso");
        } else if (response.data.erro === true) {
          alert("cep invalido");
        }
      })
      .catch((error) => {
        alert("cep invalido");
        console.log(error.response);
      });

    const executePost = async () => {
      const body = {
        id: uuidv4(),
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        endereco: {
          cep: data.cep,
          rua: document.getElementById("rua").value,
          numero: data.numero,
          bairro: document.getElementById("bairro").value,
          cidade: document.getElementById("cidade").value,
        },
      };

      const response = await axios.post("http://localhost:5000/usuarios", body);

      console.log(response);
    };
  }

  return (
    <>
      <S.DivGeral>
        <Header
          menu1={"Busca"}
          url2={"/listagem"}
          menu2={"Lista"}
          menu3={"Logout"}
        />
        <S.WrapperTitle>
          <S.H1>Cadastro</S.H1>
        </S.WrapperTitle>
        <S.WrapperForm>
          <S.Frm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <S.Input name="nome" ref={register()} placeholder="Nome" />
              {errors.nome && <S.Span>O nome e obrigatorio</S.Span>}
            </div>
            <div>
              <Controller
                as={S.InputMsk}
                control={control}
                mask="999.999.999-99"
                name="cpf"
                maskPlaceholder={null}
                placeholder="Cpf"
                defaultValue=""
              />
              {errors.cpf && <S.Span>O cpf e obrigatorio</S.Span>}
            </div>
            <div>
              <S.Input name="email" ref={register()} placeholder="Email" />
              {errors.email && <S.Span>Digite um email valido</S.Span>}
            </div>
            <div>
              <Controller
                as={S.InputMsk}
                control={control}
                mask="99999-999"
                maskPlaceholder={null}
                name="cep"
                placeholder="Cep"
                defaultValue=""
              />
              {errors.cep && <S.Span>O cep e obrigatorio</S.Span>}
            </div>
            <div>
              <S.Input
                name="numero"
                type="number"
                ref={register()}
                placeholder="Numero"
              />
              {errors.numero && <S.Span>O numero e obrigatorio</S.Span>}
            </div>
            <div>
              <S.InputDisabled
                name="rua"
                id="rua"
                ref={register()}
                placeholder="Rua"
                readOnly="true"
              />
              {errors.rua && <S.Span>A rua e obrigatorio</S.Span>}
            </div>
            <div>
              <S.InputDisabled
                name="bairro"
                id="bairro"
                ref={register()}
                placeholder="Bairro"
                readOnly="true"
              />
              {errors.bairro && <S.Span>O bairro e obrigatorio</S.Span>}
            </div>
            <div>
              <S.InputDisabled
                name="cidade"
                id="cidade"
                ref={register()}
                placeholder="Cidade"
                readOnly="true"
              />
              {errors.cidade && <S.Span>A cidade e obrigatorio</S.Span>}
            </div>
            <S.Btn>Enviar</S.Btn>
          </S.Frm>
        </S.WrapperForm>
      </S.DivGeral>
    </>
  );
}
