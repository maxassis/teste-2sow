import styled from "styled-components";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";
import { DeleteForever } from "@styled-icons/material/DeleteForever";

export const Tabela = styled.table`
  width: 96%;
  margin-left: auto;
  margin-right: auto;
`;

export const Th = styled.th`
  background-color: #af0069;
  color: white;
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10px;
  text-align: left;
`;

export const Td = styled.td`
  height: 35px;
  border-bottom: 0.5px dotted;
  padding-top: 19px;
  padding-left: 10px;
`;

export const Icon1 = styled(EditAlt)`
  width: 23px;
  padding-left: 12px;
  :hover {
    cursor: pointer;
  }
`;

export const Icon2 = styled(DeleteForever)`
  width: 23px;
  padding-left: 12px;
  :hover {
    cursor: pointer;
  }
`;