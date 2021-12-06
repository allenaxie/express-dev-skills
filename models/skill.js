// Data source
const skills = [
    {skill: 'HTML', skillLevel: 'aight', id: 123456},
    {skill: 'CSS', skillLevel: 'trash', id: 234876},
    {skill: 'JavaScript', skillLevel: 'not bad', id: 234235,},
    {skill: 'Node.js', skillLevel: 'passing', id: 435083},
    {skill: 'Express', skillLevel: 'mega trash', id: 098454},
]
// Export functions
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
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

// Create new skill
function create (skillObj) {
    // Assign a random 6 digit ID
    skillObj.id = (Math.floor(Math.random() * 1000000));
    skillObj.skillLevel = 'better than a 3 year old'
    skills.push(skillObj);
}

// Delete skill
function deleteOne (id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}

