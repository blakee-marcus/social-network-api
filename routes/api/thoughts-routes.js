const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThoughts,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThoughts)

router
  .route('/:thoughtId/:reactionId')
  .put(addReaction)
  .delete(removeReaction);

module.exports = router;
