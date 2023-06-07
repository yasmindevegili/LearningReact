import React from "react";
import products from "../../data/products";
import "./tableProducts.css"
export default function Table(props) {
  function getLinhas() {
    return products.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R${produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="Tabela">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  );
};
