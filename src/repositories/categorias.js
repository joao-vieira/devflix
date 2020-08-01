import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIAS_COM_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIAS)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível obter as cateorias :/');
    });
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIAS_COM_VIDEOS)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
