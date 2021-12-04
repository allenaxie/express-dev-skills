// Import data source from models
const Skill = require('../models/skill');
// Export each of your functions
module.exports = {
    index,
    show,
};
// Render data to view files
function index (req,res) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills
    })
}
function show (req,res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show',{ skill });
}


