const skills = [
    {id: 24356, skill: 'Javascript', isProficient: true},
    {id: 24357, skill: 'HTML', isProficient: true},
    {id: 24358, skill: 'CSS', isProficient: true},
]

module.exports = {
    findOne,
    getAll
}

function getAll() {
    return skills
}

function findOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}