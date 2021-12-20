const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares/validation');
const { joiShema, favoriteJoiShema } = require('../../models/contacts');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

const validateMiddleware = validation(joiShema);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateMiddleware, ctrlWrapper(ctrl.add));

router.put('/:contactId', validateMiddleware, ctrlWrapper(ctrl.update));

router.patch(
  '/:contactId/favorite',
  validation(favoriteJoiShema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:contactId', ctrlWrapper(ctrl.deletById));

module.exports = router;
