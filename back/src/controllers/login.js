const {User} = require('../config/DB_connection');

const login = async (req, res) => {
  const {email, password} = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({message: 'Faltan datos'});
    }
    const user = await User.findOne({where: {email}});
    if (!user) {
      return res.status(404).json({message: 'Usuario no encontrado'});
    }
    if (user.password !== password) {
      return res.status(403).json({message: 'Contraseña incorrecta'});
    }
    return res.status(200).json({access: true});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error: error.message});
  }
};

module.exports = login;
