module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        }
    });

    return users;
};
