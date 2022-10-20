const Skill = require('../models/skills')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteItem
}

function index(req, res) {
   res.render('skills/index', {
    skills: Skill.getAll()
   })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.findOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteItem(req, res) {
    Skill.deleteSkill(req.params.id)
    res.redirect('/skills')
}
