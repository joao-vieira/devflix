import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type='text' />
        </label>
        <button>Cadastrar</button>
      </form>
      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
