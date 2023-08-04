const router = require('express').Router();
const apiRoutes = require('./api');

// localhost:3001/api

router.get('/', (req, res) => {
  console.log (req.path)
  res.send("<h1>Wrong Route!</h1>")
});

router.use('/api', apiRoutes);

module.exports = router;