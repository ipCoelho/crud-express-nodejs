const User = require('../models/User');

module.exports = {
    // SELECT.
    async index(req, res) {
        
    },
    // CREATE.
    async store(req, res) {
        const { name, username, email, password } = req.body;
        let user = await User.findOne(
            { 
                where: 
                {
                    email: email 
                }
            }
        )

        if (user) {
            return res.status(400)
            .send({error: "Error 400. Email already in use."})
        }
        
        // Inserindo o usuário no banco
        user = await User.create(
            {
                name: name,
                username: username,
                email: email,
                password: password
            }
        )
        
        res.send(
            {
                user: {
                    name: user.name,
                    username: user.username,
                    email: user.email
                }
            }
        )
    },
    // UPDATE.
    async update(req, res) {

    },
    // DELETE.
    async delete(req, res) {

    }
}