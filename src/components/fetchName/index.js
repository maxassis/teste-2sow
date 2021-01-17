import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

export default function FetchName() {
  const { status, data, error, isFetching } = useQuery();
  console.log(data);

  return (
    <>
      <h1>Teste</h1>
      {/*  {error && <h1>Erro na requisição</h1>}
      {isLoading ? <span>Carregando... aguarde </span> : <span>deu ruim</span>} */}
    </>
  );
}
