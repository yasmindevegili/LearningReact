import React from "react";
import If, { Else } from "./if";
export default function User(props) {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.nome}>
        Seja bem vindo, <strong>{user.nome}</strong>
        <Else>
          Seja bem-vindo <strong>Amigão</strong>
        </Else>
      </If>
    </div>
  );
}
