import React, { useState } from 'react';

const MegaSena = () => {
  const [numerosUsuario, setNumerosUsuario] = useState([]);
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [quantidadeAcertos, setQuantidadeAcertos] = useState(0);

  const handleChange = (index, event) => {
    const novosNumerosUsuario = [...numerosUsuario];
    novosNumerosUsuario[index] = parseInt(event.target.value);
    setNumerosUsuario(novosNumerosUsuario);
  };

  const handleMegaSena = () => {
    
    const novosNumerosSorteados = Array.from({ length: numerosUsuario.length }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumerosSorteados(novosNumerosSorteados);

    
    const acertos = numerosUsuario.filter(numero => numerosSorteados.includes(numero)).length;
    setQuantidadeAcertos(acertos);
  };

  return (
    <div>
      <h2>Mega</h2>
      <p>Qtde Números :</p>
      <div>
        {numerosUsuario.map((numero, index) => (
          <input
            key={index}
            type="number"
            value={numero || ''}
            onChange={(event) => handleChange(index, event)}
          />
        ))}
      </div>
      <button onClick={handleMegaSena}>Gerar Números</button>
      {numerosSorteados.length > 0 && (
        <p>Números sorteados: {numerosSorteados.join(', ')}</p>
      )}
      <p>Quantidade de acertos: {quantidadeAcertos}</p>
    </div>
  );
};

export default MegaSena;
