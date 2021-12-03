// Data resource
const skills = [
    {name: 'HTML', skillLevel: 'aight'},
    {name: 'CSS', skillLevel: 'trash'},
    {name: 'JavaScript', skillLevel: 'not bad'},
    {name: 'Node.js', skillLevel: 'passing'},
    {name: 'Express', skillLevel: 'mega trash'},
]

module.exports = {
    getAll,
}

function getAll () {
    return skills;
}
