"use client";

import React, { useState, useEffect } from "react";

function Counter() {
  // Criando estado para o contador
  const [count, setCount] = useState(0);

  // useEffect para atualizar o título da página
  useEffect(() => {
    console.log("useEffect executado!");

    // Atualiza o título da página
    document.title = `Você clicou ${count} vezes`;

    // Retorno opcional para limpeza (não usado aqui)
    return () => {
      console.log("Limpeza antes de executar o próximo efeito ou desmontar.");
    };
  }, [count]); // Executa o efeito quando o valor de "count" mudar

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}

export default Counter;
