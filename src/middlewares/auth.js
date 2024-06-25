const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Aqui, estamos exportando um middleware que verifica se o usuário está autenticado.
module.exports = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', ''); // Remove o prefixo 'Bearer ' do token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};
