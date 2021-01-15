import styled from "styled-components";
import InputMask from "../../components/inputWithMask/input";
import { Form } from "@unform/web";

export const WrapperTitle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: "Open Sans", sans-serif;
`;

export const WrapperForm = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Frm = styled(Form)`
  width: 35%;
  display: grid;
  grid-gap: 1.8rem;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
`;

export const MaskInput = styled(InputMask)`
  width: 100%;
  height: 43px;
  border-radius: 8px;
  outline: none;
  border: 1.5px solid;
  border-color: #dfe0df;
  background-color: #f5f4f4;
  padding-left: 18px;
  box-sizing: border-box;
`;

export const Btn = styled.button`
  width: 100%;
  height: 43px;
  border-radius: 10px;
  outline: none;
  background-color: #af0069;
  border: none;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
