const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// this route needs a lot of work

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      plant_id: req.params.id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// starting delete route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Comment.destroy({
      where: {
        id: req, // new idea?
        plant_id: req.params.id,
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