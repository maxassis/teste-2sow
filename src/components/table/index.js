import React from "react";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";
import { DeleteForever } from "@styled-icons/material/DeleteForever";
import styled from "styled-components";

const Tabela = styled.table`
  width: 96%;
  margin-left: auto;
  margin-right: auto;
`;

const Th = styled.th`
  background-color: #af0069;
  color: white;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10px;
  text-align: left;
`;

const Td = styled.td`
  height: 35px;
  border-bottom: 0.5px dotted;
  padding-top: 19px;
  padding-left: 10px;
`;

const Icon1 = styled(EditAlt)`
  width: 23px;
  padding-left: 12px;

  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(DeleteForever)`
  width: 23px;
  padding-left: 12px;

  :hover {
    cursor: pointer;
  }
`;

function Table({ data }) {
  const names = data.map(function (user) {
    return (
      <>
        <tr>
          <Td>{user.nome}</Td>
          <Td>{user.cpf}</Td>
          <Td>{user.email}</Td>
          <Td>{user.endereco.cidade}</Td>
          <Td>
            <Icon1 />
          </Td>
          <Td>
            <Icon2 />
          </Td>
        </tr>
      </>
    );
  });

  return (
    <>
      <Tabela>
        <tr>
          <Th>Nome</Th>
          <Th>Cpf</Th>
          <Th>Email</Th>
          <Th>Cidade</Th>
          <Th>Editar</Th>
          <Th>Apagar</Th>
        </tr>
        {names}
      </Tabela>
    </>
  );
}

export default Table;
