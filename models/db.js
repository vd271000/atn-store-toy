const mongoose = require('mongoose');
const url = "mongodb+srv://vandat:vandat2710@cluster0.rlvxy.mongodb.net/vandat"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');
