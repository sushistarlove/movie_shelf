const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const shelfRoutes = require('./shelf-routes');
const quoteRoutes = require('./quoteRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/shelves', shelfRoutes);
router.use('/quote', quoteRoutes);




module.exports = router;
