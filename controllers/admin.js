const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  adminPage:(req,res)=>{
      res.render('admin')
    },
  login:(req,res)=>{
    knex('admin').where("email",req.body.email)
    .then((result)=>{
      let admin = result[0];
      if(admin.password===req.body.password){
        req.session.admin_id=admin.id;
        // res.send('ok')
          res.redirect("/blog")
        }else{
          res.redirect("/");
          // ADD~SHOW WRONG PASSWORD
        }
      })
    },
  logout:(req,res)=>{
      req.session.admin_id=null;
      req.session.user_id=null;
      req.session.save(()=>{
        res.redirect("/login")
      })
    },
}
