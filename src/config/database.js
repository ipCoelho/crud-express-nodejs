module.exports = {
    url: "mysql://root:bcd127@localhost:3306/crud",
    config: {
        dialect: "mysql",
        define: {
            timestamps: true,
            underscored: true
        }
    }
}