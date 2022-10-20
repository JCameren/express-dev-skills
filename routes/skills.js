var express = require("express");
const skills = require("../controllers/skills");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET skills listing. */
router.get("/", skillsCtrl.index);

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)


router.post('/', skillsCtrl.create)

//DELETE METHOD FOR SKILLS
router.delete('/:id', skills.delete)


module.exports = router;
