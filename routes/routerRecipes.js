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

router.get('/:id/list', async (req, res) => {
  const {id} = req.params;
  
  try {
    const list = await modelRecipes.getShoppingList(id);

    if (list) {
      res.status(200).json({list});
    } else {
      res.status(400).json({
        message: "No shopping list can be made."
      })
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router;