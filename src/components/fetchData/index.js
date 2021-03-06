import React from "react";
import { useQuery } from "react-query";
import Table from "../table/index";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
`;

export default function Fetch() {
  const { data, error, isLoading } = useQuery();

  return (
    <>
      {error && <h1>Erro na requisição</h1>}
      {isLoading ? (
        <Div>
          <H1>Carregando... aguarde</H1>
        </Div>
      ) : (
        <Table data={data} />
      )}
    </>
  );
}
