const path = require('path');
module.exports = (req,res,next) =>{
    //let usuario = "admin";
    //if(usuario != "admin"){
        res.render(path.resolve(__dirname , '..','views','web','mantenimiento' ));
    //}
   // next();
     
}


