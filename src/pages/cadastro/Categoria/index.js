import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const initialData = { titulo: '', descricao: '', cor: '' };
  const { values, handleChange, clearForm } = useForm(initialData);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  }

  useEffect(() => {
    categoriasRepository.getAll()
      .then((response) => {
        setCategorias(response);
      })
      .catch((err) => {
        /* eslint-disable no-console */
        console.log(err);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          handleChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          handleChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          handleChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {!categorias.length && <div>Carregando pra você...</div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
