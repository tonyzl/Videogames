require('dotenv').config();
const axios = require("axios");
const oplike =require("sequelize")

const {
    API_KEY, URL
  } = process.env;

const {Videogame, Genre} = require("../db");

const createVgDB = async (name, description, platforms, image, released, rating, genres) => {
  //Videogame.add(genres)
  const vgDb= await Videogame.create({name, description, platforms, image, released,rating})
  const genreDb = await Genre.findAll({
    where: { name: genres },
  });

  await vgDb.addGenre(genreDb);

  const result = await Videogame.findByPk(vgDb.id, {
    include: {
      model: Genre,
      attributes: ["id", "name"],
    },
  });

  return result

};


const getVgById = async (id, source) => {
  const vg =
    source === "api"
      ? (await axios.get(`${URL}/${id}?key=${API_KEY}`))
          .data
      : await Videogame.findByPk(id, {
          include: {
            model: Genre,
            attributes: ["id", "name"],
          },
        });
  return vg;
};



const getAllVgs = async () => {
  const vgsDB = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["id", "name"],
    },
  });

  const videogames=[]
  let api=`${URL}?key=${API_KEY}`

  for (let i = 1; i <= 5; i++) {
    let resp = await axios.get(api, {
      responseType: "json",
    });
    api = resp.data.next;
    resp.data.results.forEach((vg) => {
      videogames.push({
        name: vg.name,
        image: vg.background_image,
        genres: vg.genres,
        rating: vg.rating,
        id: vg.id,
        org:"api"

      });
    });
  }


  return [...vgsDB, ...videogames];
  
};


const getVgByName = async (name) => {


  const videogames=[]
  let api=`${URL}?key=${API_KEY}`

  for (let i = 1; i <= 5; i++) {
    let resp = await axios.get(api, {
      responseType: "json",
    });
    api = resp.data.next;
    resp.data.results.forEach((vg) => {
      videogames.push({
        name: vg.name,
        image: vg.background_image,
        genres: vg.genres,
        rating: vg.rating,
        id: vg.id,
        org:"api"

      });
    });
  }

  //vg.texto.toLowerCase().includes(nombre.toLowerCase())

  const vgFiltered = videogames.filter((vg) =>vg.name.toLowerCase().includes(name.toLowerCase()));

  const vgDb = await Videogame.findAll({where: {name: name}, include: {
    model: Genre,
    attributes: ["id", "name"],
  },

});

  return [ ...vgDb,...vgFiltered];
};

module.exports = {getAllVgs,getVgById,getVgByName,createVgDB};