var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
var Schema = mongoose.Schema;

var Beer = new Schema ({
    name: String,
    hoppy: Boolean
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/beers');

module.exports = mongoose.model('beers', Beer);