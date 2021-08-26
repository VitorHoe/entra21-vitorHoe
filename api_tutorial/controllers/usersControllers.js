function getAllUsers(req, res, next) {
    response.json(users)
}

function getUserById(req, res, next) {}

module.exports = {
    getAllUsers,
    getUserById
};