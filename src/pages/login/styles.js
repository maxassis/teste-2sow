import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 515px;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 85vh;
  background-color: #f5f4f4;
  overflow: hidden;
`;

export const LoginBox = styled.div`
  display: grid;
  width: 450px;
  padding: 2rem;
  border-radius: 8px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 3rem;
  justify-content: center;
  box-shadow: 0px 3px 16px #00000029;
  background-color: white;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #af0069;
`;

export const Frm = styled.form`
  display: grid;
  grid-gap: 1.8rem;
  background-color: white;
`;

export const Inpt = styled.input`
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
