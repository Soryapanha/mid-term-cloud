const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventoryController');

router.post('/', controller.addItem);
router.get('/', controller.getItems);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
