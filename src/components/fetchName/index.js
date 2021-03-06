import React from "react";
import * as S from "./styles";
import { useStore } from "../../store";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Loading from "../../assets/load.gif";
import { v4 as uuidv4 } from "uuid";

export default function FetchName(props) {
  const { falser } = useStore();

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (userID) => axios.delete(`http://localhost:5000/usuarios/${userID}`),
    {
      onSuccess: () => queryClient.invalidateQueries(),
    }
  );

  return (
    <>
      <S.WrapperTable>
        <S.Tabela>
          {mutation.isLoading ? (
            <S.Loading>
              <S.Img src={Loading} alt="loading..." />
            </S.Loading>
          ) : null}

          <tr>
            <S.Th>Nome</S.Th>
            <S.Th>Cpf</S.Th>
            <S.Th>Email</S.Th>
            <S.Th>Cidade</S.Th>
            <S.Th>Editar</S.Th>
            <S.Th>Apagar</S.Th>
          </tr>
          {props.data?.map(function (user, i) {
            return (
              <>
                <tr>
                  <S.Td key={uuidv4()}>{user.nome}</S.Td>
                  <S.Td key={uuidv4()}>{user.cpf}</S.Td>
                  <S.Td key={uuidv4()}>{user.email}</S.Td>
                  <S.Td key={uuidv4()}>{user.endereco.cidade}</S.Td>
                  <S.Td>
                    <S.Icon1 />
                  </S.Td>
                  <S.Td>
                    <S.Icon2 onClick={() => mutation.mutate(user.id)} />
                  </S.Td>
                </tr>
              </>
            );
          })}
        </S.Tabela>
        <S.DivButton>
          <S.Button onClick={falser}>Fechar Busca</S.Button>
        </S.DivButton>
      </S.WrapperTable>
    </>
  );
}
