// const axios = require('axios');

// function getCharById(req, res) {
//   const { id } = req.params;
//   const URL = `http://rickandmortyapi.com/api/character/`;
//   axios.get(`${URL}${id}`)
//     .then((response) => {
//       const data = response.data;
//       if (data) {
//         const character = {
//           id: id,
//           status: data.status,
//           name: data.name,
//           species: data.species,
//           origin: data.origin,
//           image: data.image,
//           gender: data.gender,
//         };
//         res.json(character);
//       } else {
//         res.status(404).send('Not found');
//       }
//     })
//     .catch((error) => {
//       res.status(500).send({ message: error.message });
//     });
// }

// module.exports = getCharById;

const axios = require('axios');

async function getCharById(req, res) {
  const { id } = req.params;
  const URL = `http://rickandmortyapi.com/api/character/`;
try{
  const {data} = await axios(`${URL}${id}`);
  if (data) {
    const character = {
      id: id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    }
    res.json(character);
  } else {
    res.status(404).send('Not found');
  }
}
catch(error){
  res.status(500).send({ message: error.message });
}
}

module.exports = getCharById;
