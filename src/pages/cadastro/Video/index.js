import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
