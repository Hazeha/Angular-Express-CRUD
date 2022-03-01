
const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.register = ( req, res ) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        level: req.body.level
    };

    Users.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send( {
                message: err.message || "Error on create!"
            })
        })
}

exports.login = ( userString, passwordString ) => {
    const user = userString.params.username;


}
