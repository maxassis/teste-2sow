import React from "react";
import { useQuery } from "react-query";
import * as S from "./styles";

export default function FetchName(props) {
  const { data, error, isLoading } = useQuery("?nome=chiquinho");
  console.log(props.name);

  return (
    <>
      {isLoading ? (
        <span>Carregando</span>
      ) : (
        <S.WrapperTable>
          <S.Tabela>
            <tr>
              <S.Th>Nome</S.Th>
              <S.Th>Cpf</S.Th>
              <S.Th>Email</S.Th>
              <S.Th>Cidade</S.Th>
              <S.Th>Editar</S.Th>
              <S.Th>Apagar</S.Th>
            </tr>
            {data.map(function (user) {
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
                      <S.Icon2 />
                    </S.Td>
                  </tr>
                </>
              );
            })}
          </S.Tabela>
        </S.WrapperTable>
      )}
    </>
  );
}
