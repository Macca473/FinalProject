

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        Password: { type: DataTypes.INTEGER, allowNull: false },
        balance: { type: DataTypes.INTEGER, allowNull: false }
    });

    User.create({ name: `${username}`, Password: password, balance: 10000 })
};

