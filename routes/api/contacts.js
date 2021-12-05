const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares/validation');
const { contactSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

const validateMiddleware = validation(contactSchema);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateMiddleware, ctrlWrapper(ctrl.add));

router.put('/:contactId', validateMiddleware, ctrlWrapper(ctrl.update));

router.delete('/:contactId', ctrlWrapper(ctrl.deletById));

module.exports = router;
