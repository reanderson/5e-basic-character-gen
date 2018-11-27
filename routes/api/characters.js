const router = require('express').Router();
const charactersController = require('../../controllers/charactersController');
// const charGen = require('../../helpers/charGen')

// Matches with "/api/characters"
router
  .route('/')
  .post(function (req, res) {
    charactersController.makeChar(req, res)
  })
  .get(function(req, res){
    charactersController.findAll(req, res)
  })

router
  .route('/:id')
  .get(function(req, res){
    charactersController.findById(req, res)
  })
  .put(charactersController.update)
  .delete(charactersController.remove)

module.exports = router;
