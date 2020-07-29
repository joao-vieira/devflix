import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialData = { nome: '', descricao: '', cor: '' };
  const [categorias, setCategorias] = useState([]);
  const [formData, setFormData] = useState(() => initialData);

  function setValue(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handleChange(e) {
    const { getAttribute, value } = e.target;
    setValue(getAttribute('name'), value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, formData]);
    setFormData(initialData);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={formData.nome}
          onChange={handleChange}
        />
        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={formData.descricao}
          onChange={handleChange}
        />
        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={formData.cor}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>{categoria.nome}</li>
        ))}
      </ul>
      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
