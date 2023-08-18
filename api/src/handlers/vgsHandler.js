const {


    getAllVgs,
    getVgById,
    getVgByName,
    createVgDB

  } = require("../controllers/vgsControllers");
  
  //
  const getVgsHandler = async (req, res) => {
    const {name} = req.query;
  
    try {
      if (name) {
        const vgByName = await getVgByName(name);
        res.status(200).json(vgByName);
      } else {
        const response = await getAllVgs();
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(400).json({error: error.message});
    }

  };
  
  const getDetailHandler = async (req, res) => {
    const {id} = req.params;
  
    const source = isNaN(id) ? "bdd" : "api";
    // "hj43h4-2342j-2342jhgbj-233ll" ===> NaN  ===> source = "bdd"
    //  4 ==> 4 ===> source = "api"
    try {
      const response = await getVgById(id, source);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const createVgHandler = async (req, res) => {
    const {name, description, platforms, image, released, rating, genres} = req.body;
  
    console.log(req.body);
    try {
      const response = await createVgDB(name, description, platforms, image, released, rating, genres);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  module.exports = {

    getVgsHandler,
    getDetailHandler,
    createVgHandler

  };