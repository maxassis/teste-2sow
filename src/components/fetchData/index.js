import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import List from "../../pages/List";

export default function Fetch() {
  const dbFetch = async () => {
    const { data } = await axios.get("http://localhost:5000/usuarios");
    return data;
  };

  const { data, error, isLoading } = useQuery("queryDb", dbFetch);
  console.log(data);

  return (
    <>
      {error && <h1>Deu ruuim</h1>}
      {isLoading ? <h1>Carregando</h1> : <List data={data} />}
    </>
  );
}
