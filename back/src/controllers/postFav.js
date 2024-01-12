const {Favorite} = require('../config/DB_connection');

const postFav = async (req, res) => {
  const {id, name, origin, status, image, species, gender} = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(400).json({message: 'Faltan datos'});
    }

    await Favorite.findOrCreate({
      where: {name},
      defaults: {id, origin, status, image, species, gender},
    });

    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({error: error.message});
  }
};

module.exports = postFav;
