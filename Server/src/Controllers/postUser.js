const { User } = require('../DB_connection');

const postUser = async ( req, res) => {
    const { email, password } = req.body

    try {
        if(!email || !password){
            res.status(400).json({error: 'Faltan datos'})
        } 
        const [user, Created] = await User.findOrCreate({
            where: { email },
            default: {
                password,
            }
        })
        if(!Created){
            return res.status(409).json({error: "El email ya esta registrado"});
        }
        return res.status(200).json(user);
    }   
    catch(error) { res.status(500).json({error})}
}   

module.exports = {
    postUser
}
