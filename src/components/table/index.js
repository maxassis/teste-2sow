import React from "react";
import * as S from "./styles";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../../assets/load.gif";

function Table({ data }) {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (userID) => axios.delete(`http://localhost:5000/usuarios/${userID}`),
    {
      onSuccess: () => queryClient.invalidateQueries("queryDb"),
    }
  );

  const names = data.map(function (user) {
    return (
      <>
        <tr>
          <S.Td>{user.nome}</S.Td>
          <S.Td>{user.cpf}</S.Td>
          <S.Td>{user.email}</S.Td>
          <S.Td>{user.endereco.cidade}</S.Td>
          <S.Td>
            <S.Icon1 />
          </S.Td>
          <S.Td>
            <S.Icon2 onClick={() => mutation.mutate(user.id)} />
          </S.Td>
        </tr>
      </>
    );
  });

  return (
    <>
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
        {names}
      </S.Tabela>
    </>
  );
}

export default Table;
