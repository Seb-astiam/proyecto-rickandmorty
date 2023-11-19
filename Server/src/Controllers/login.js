const { User } = require("../DB_connection");

const login = async (req, res) => {
    const { email, password } = req.query;
    try {
        if(!email || !password){
            res.status(400).json({error: 'Faltan datos'})
        } 
        const user = await User.findOne({
            where: {
                email
            }
        })
        if(!user){
            return res.status(404).json({error: "Usuario no encontrado"})
        }
        console.log(user, password)
        return user.password === password ?
        res.status(200).json({ access: true }):
        res.status(403).json({ error: 'Contraseña incorrecta' })

    } catch (error) {
        res.status(500).json({error: error.messages})
    }
}

module.exports = {
    login
}