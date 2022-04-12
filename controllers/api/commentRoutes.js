const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// this route needs a lot of work

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// or 


// router.post('/:id', async (req, res) => {
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