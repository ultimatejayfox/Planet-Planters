const router = require('express').Router();
const { Plant, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

// still needs to Comment.findAll for each plant
// need to find all comments that match a certain plant when viewing that plant
// router.get('/:id', async (req, res) => {
//   try {
//     const plantData = await Plant.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'username'],
//         },
//       ],
//     });

//     const plant = plantData.get({ plain: true });

//     res.render('plant', {
//       ...plant,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, // not totally sure about the use of user_id here, should it be user.id?
      },
    });

    if (!plantData) {
      res.status(404).json({ message: 'No plant found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//sending this to homeroute
// router.post('/:id', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       description: req.body,
//       plant_id: req.params.id,
//       user_id: req.session.user_id,
//     });

//     const plant = plantData.get({ plain: true });

//     res.render('plant', {
//       ...plant,
//       logged_in: req.session.logged_in
//     });
//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
