const express = require('express');
const auth = require('../middlewares/auth');
const User = require('../models/User');

const router = express.Router();

// Middleware de autenticação
router.use(auth);

// Rota para obter informações do perfil do usuário
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Rota para atualizar informações do perfil do usuário
router.put('/profile', async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { username, email },
      { new: true, runValidators: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
