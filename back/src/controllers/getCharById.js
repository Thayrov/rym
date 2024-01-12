const {URL, API_KEY} = require('../config/environment.config');
const axios = require('axios');

async function getCharById(req, res) {
  const {id} = req.params;
  try {
    const {
      data: {name, status, species, gender, origin, image},
    } = await axios(`${URL}/${id}?key=${API_KEY}`);

    if (id === 'error500') res.status(500).json({error: error.message});

    if (name) {
      let char = {
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      };
      res.status(200).json(char);
    } else {
      res.status(404).json({error: 'Not found'});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = getCharById;
