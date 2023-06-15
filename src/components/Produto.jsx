import React, { useContext } from "react";
import { profileContext } from "./context";


function Produto() {
  const { produto } = useContext(profileContext);

  return (
    <div>
      <p>Nome: {produto.name}</p>
      <p>Preço: {produto.preco}</p>
      <p>Descrição: {produto.descricao}</p>
    </div>
  );
}

export default Produto;
