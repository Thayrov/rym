const {User} = require('../config/DB_connection');

const postUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({message: 'Faltan datos'});
    }
    const [user, created] = await User.findOrCreate({
      where: {email},
      defaults: {password},
    });
    return res.status(200).json({user});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error: error.message});
  }
};

module.exports = postUser;
