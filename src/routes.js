const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');

const routes = express.Router();

let url = 'http://pets-images.dev-apis.com/pets';

routes.get('/', (req, res) => {
  const { id } = req.params;

  return fetch(`${url}/dog25.jpg`).then((response) =>
    response.body.pipe(res)
  );
});

routes.get('/:id', (req, res) => {
  const { id } = req.params;

  return fetch(`${url}/${id || 'dog25.jpg'}`).then((response) =>
    response.body.pipe(res)
  );
});

module.exports = routes;
