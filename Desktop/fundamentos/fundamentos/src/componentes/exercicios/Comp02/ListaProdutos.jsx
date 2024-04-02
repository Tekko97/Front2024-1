import React from 'react';
import './ListaProdutos.css'; 

const ListaProdutos = () => {
  const products = [
    { id: 1, name: 'CANETA', price: 'R$ 2,99' },
    { id: 2, name: 'LAPIS', price: 'R$ 1,99' },
    { id: 3, name: 'IPAD', price: 'R$ 5899,99' },
    { id: 4, name: 'SAMSUNG S20 ULTRA', price: 'R$ 6599,99' },
    { id: 5, name: 'NOTEBOOK', price: 'R$ 3409,99' },
    { id: 6, name: 'CADERNO', price: 'R$ 19,99' },
    { id: 7, name: 'BORRACHA', price: 'R$ 4,99' },
    { id: 8, name: 'IMPRESSORA', price: 'R$ 889,99' },
    { id: 9, name: 'MONITOR 27', price: 'R$ 799,99' },
    { id: 10, name: 'CADEIRA', price: 'R$ 1239,99' }
  ];

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead className="table-header"> 
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="table-cell">{product.id}</td> 
              <td className="table-cell"><strong>{product.name}</strong></td> 
              <td className="table-cell">{product.price}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
