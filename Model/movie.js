var mongodb = require('./model');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
  name: String,
  alias:[String],
  publish:Date,
  createDate:{type: Date,default: Date.now},
  image:{
    coverSmall:String,
    coverBigL:String
  },
  source:[{
    source:String,
    link:String,
    swfLink:String,
    quality:String,
    version:String,
    lang:String,
    subtitle:String,
    create_date: {type: Date, default: Date.now}
  }]
});
var Movie = mongdb.mongoose.model("Movie",MovieSchema);
var MovieDAO = function(){};
module.exports=  new MovieDAO();
