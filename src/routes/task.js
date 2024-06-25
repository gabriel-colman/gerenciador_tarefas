const express = require('express');
const Task = require('../models/Task');
const auth = require('../middlewares/auth');

const router = express.Router();

// Middleware de autenticação
router.use(auth);

router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = new Task({
      userId: req.user.id,
      title,
      description,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
