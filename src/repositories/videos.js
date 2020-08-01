import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível obter as cateorias :/');
    });
}

export default {
  create,
};
