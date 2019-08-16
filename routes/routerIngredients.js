const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
})

module.exports = router;