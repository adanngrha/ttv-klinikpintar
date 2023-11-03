const router = require('express').Router();
const { getAll, getOne, create, update, remove } = require('../controllers/patients.controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/', update);
router.delete('/:id', remove);

module.exports = router;