import React from 'react';

import PageDefault from '../PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription='O que é Front-end? Trabalhando na área'
      />

      {/** Desafio: corrigir menu lateral "feio" kkkk */}
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />
    </PageDefault>
  );
}

export default Home;
