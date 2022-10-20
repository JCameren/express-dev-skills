const skills = [
    {id: 24356, skill: 'Javascript', isProficient: true},
    {id: 24357, skill: 'HTML', isProficient: true},
    {id: 24358, skill: 'CSS', isProficient: true},
]

module.exports = {
    findOne,
    getAll,
    create,
    deleteSkill
}

function getAll() {
    return skills
}

function findOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.isProficient = false
    skills.push(skill)
}

function deleteSkill(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}