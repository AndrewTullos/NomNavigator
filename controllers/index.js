const router = require('express').Router();

// const homeController = require('./homeController');
const authController = require('./authController');
// const searchController = require('./searchController');
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// Imports - controllers and routes
// router.use('/', homeController);
router.use('/auth', authController);
// router.use('/search', searchController);
router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
