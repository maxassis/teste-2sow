import React from "react";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";
import { DeleteForever } from "@styled-icons/material/DeleteForever";
import styled from "styled-components";

const Tabela = styled.table`
  width: 100%;
`;

const Th = styled.th`
  background-color: #af0069;
  color: white;
  height: 45px;
`;

const Td = styled.td`
  height: 40px;
  border-bottom: 0.5px dotted;
`;

const Icon1 = styled(EditAlt)`
  width: 23px;
  margin-left: 50%;

  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(DeleteForever)`
  width: 23px;
  margin-left: 50%;

  :hover {
    cursor: pointer;
  }
`;

function Table() {
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
        <tr>
          <Td>Igor</Td>
          <Td>1221562</Td>
          <Td>Chiquinho@uol.com.br</Td>
          <Td>Sao Pedro da Aldeia</Td>
          <Td>
            <Icon1 />
          </Td>
          <Td>
            <Icon2 />
          </Td>
        </tr>
        <tr>
          <Td>Chiquinho</Td>
          <Td>95125219-99</Td>
          <Td>pedro@ig.com</Td>
          <Td>Cabo Frio</Td>
          <Td>
            <Icon1 />
          </Td>
          <Td>
            <Icon2 />
          </Td>
        </tr>
      </Tabela>
    </>
  );
}

export default Table;
