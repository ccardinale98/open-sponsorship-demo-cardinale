const mongoose = require('mongoose');
const uri = 'mongodb+srv://demo:4h1huYmqOQOwKmJu@cluster0.9tk6hds.mongodb.net/open-sponsorship-demo?retryWrites=true&w=majority';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));