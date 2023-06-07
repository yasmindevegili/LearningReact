import React, { useState } from "react";
import IndiretaFilho from "./indiretaFilho";

export default function IndiretaPai() {
  const [a, b] = [1, 2]
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setBool] = useState(false)

    function fornecerInfo(nome, idade, bool){
    setNome(nome)
    setIdade(idade)
    setBool(bool)
  }
  
    return (
    <div>
      <div>Pai</div>
      <IndiretaFilho onClick={fornecerInfo}/>
    </div>
  );
}
