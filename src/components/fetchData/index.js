import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Table from "../table/index";

export default function Fetch() {
  const dbFetch = async () => {
    const { data } = await axios.get("http://localhost:5000/usuarios");
    return data;
  };

  const { data, error, isLoading } = useQuery("queryDb", dbFetch);
  console.log(data);

  return (
    <>
      {error && <h1>Erro na requisição</h1>}
      {isLoading ? <h1>Carregando</h1> : <Table data={data} />}
    </>
  );
}
