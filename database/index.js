
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://dharma_user:r1Rw7ZswpZ2mQ6KQ@dljaya0.cdxfz.mongodb.net/dl_jaya_dev';   //type A mongoDB link here 
console.log("url-------------------", dbURL);
let connection = mongoose.connect(dbURL);
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("You Have Been Successfully Connected to the Database And Can Now Start the Assesment!!!");
    console.log('BEST OF LUCK!!');
})
mongoose.set('debug', true);
module.exports = connection