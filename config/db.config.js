const mongoose = require('mongoose');
let url = process.env.MONGO_URL;
let connect = (result) => {
    mongoose.connect(url, (err) => {
        if(err) return result(err)
        result()
    })
}
module.exports = connect;