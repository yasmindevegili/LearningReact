import React from "react";

export default function IndiretaFilho(props) {
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.onClick("João", gerarIdade(), true);
        }}
      >
        Fornecer informações:
      </button>
    </div>
  );
}
