const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    userName: {type:String, required:true},
    password: {type:String, required:true}
});

module.exports = mongoose.model('Clients', clientSchema);

