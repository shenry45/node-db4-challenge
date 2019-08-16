const express = require('express');

const modelRecipes = require('../models/recipes-models.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await modelRecipes.getRecipes();

    res.status(200).json({recipes});
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
})

module.exports = router;