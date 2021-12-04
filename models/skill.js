// Data source
const skills = [
    {name: 'HTML', skillLevel: 'aight', id: 1},
    {name: 'CSS', skillLevel: 'trash', id: 2},
    {name: 'JavaScript', skillLevel: 'not bad', id: 3},
    {name: 'Node.js', skillLevel: 'passing', id: 4},
    {name: 'Express', skillLevel: 'mega trash', id: 5},
]
// Export functions
module.exports = {
    getAll,
    getOne,
}
// Access whole database
function getAll () {
    return skills;
}
function getOne (id) {
    // URL params are strings - convert to a number
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
}

