import React, { useState, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const catTitles = useMemo(() => categorias.map((categoria) => categoria.titulo), [categorias]);

  const initialData = {};
  const { values, handleChange, clearForm } = useForm(initialData);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => setCategorias(response));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { titulo, url } = values;
    const categoriaFinal = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo,
      url,
      categoriaId: categoriaFinal.id,
    }).then(() => history.push('/'));

    clearForm();
  }

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          handleChange={handleChange}
        />
        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          handleChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          handleChange={handleChange}
          suggestions={catTitles}
        />
        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
