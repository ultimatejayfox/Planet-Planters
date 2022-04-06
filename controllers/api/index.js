const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantRoutes = require('./plantRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/plants/:id/comments', plantRoutes); // question here. do we want a new load screen to view all comments? or should they load with the sing plant :id page automatically

module.exports = router;
