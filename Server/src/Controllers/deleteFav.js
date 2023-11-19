const { Favorite } = require('../DB_connection');

exports.deleteFav = async (req, res) => {
    const { id } = req.params

    try{
        if(!id) {
            return res.status(403).json({ error: "Falta el id"})
        }

        await Favorite.destroy({
            where: { id }
        })

        const charFavs = await Favorite.findAll();

        return res.status(200).json(charFavs)
    } catch (error) {
        res.status(500).json({error: error.messages})
    }
}