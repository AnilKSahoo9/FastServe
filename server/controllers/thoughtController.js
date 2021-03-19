const thoughtSchema = require("../models/thoughtModel");

const postThoughts = async(req,res) => {
let {name,description} = req.body;
new thoughtSchema(req.body).save();
res.status(200).json({msg:'ok'});
}

const getThoughts = async(req, res) => {
      const thoughts = await thoughtSchema.find().select(["-__v"]);
      return res.status(200).json({
        success: true,
        message: thoughts,
      });
  };
  module.exports = {
    postThoughts,getThoughts
  }