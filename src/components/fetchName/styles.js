import styled from "styled-components";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";
import { DeleteForever } from "@styled-icons/material/DeleteForever";

export const WrapperTable = styled.div`
  margin-bottom: 50px;
`;

export const Tabela = styled.table`
  width: 96%;
  margin-left: auto;
  margin-right: auto;
`;

export const Th = styled.th`
  background-color: black;
  color: white;
  font-size: 19px;
  font-weight: 600;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10px;
  text-align: left;
  font-family: "Open Sans", sans-serif;
`;

export const Td = styled.td`
  height: 35px;
  border-bottom: 0.5px dotted;
  padding-top: 19px;
  padding-left: 10px;
  font-family: "Open Sans", sans-serif;
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

export const Loading = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 45px;
  text-align: center;
  background-color: transparent;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const Button = styled.button`
  width: 13%;
  height: 43px;
  border-radius: 10px;
  outline: none;
  background-color: black;
  border: none;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
