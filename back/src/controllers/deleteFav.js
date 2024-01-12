const {Favorite} = require('../config/DB_connection');

const deleteFav = async (req, res) => {
  const {id} = req.params;
  try {
    await Favorite.destroy({where: {id: Number(id)}});
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({error: error.message});
  }
};

module.exports = deleteFav;
