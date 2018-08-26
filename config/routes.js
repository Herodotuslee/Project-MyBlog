//Update the name of the controller below and rename the file.
const blog = require("../controllers/blog.js");
const user = require("../controllers/user.js");
const admin = require("../controllers/admin.js")
module.exports = function(app){

  app.get('/', blog.index);

// AUTHORIZATION
  app.get('/login',user.loginPage);
  app.post('/register',user.register);
  app.post('/login',user.login);
  app.get('/admin',admin.adminPage);
  app.post('/admin',admin.login);
  app.get('/logout',admin.logout);
  app.get('/blog',blog.showBlog);

// FOR GUEST AND ADMIN
  // app.use(flash());
  app.use(authenticateUser);
  app.get('/blog/show/:post_id',blog.showOnePost);



// FOR ADMIN
  app.use(authenticateAdmin);

  app.get('/blog/post/',blog.postPost);
  app.post('/blog/post/',blog.post);
  app.get('/blog/delete/:post_id',blog.delete);
  app.get('/blog/show/edit/:post_id',blog.editPage);
  app.post('/blog/show/edit/:post_id',blog.edit);

}

function authenticateUser(req,res,next){
  if(!req.session.user_id&&!req.session.admin_id){
    req.flash("error","Please Login First!");
    res.redirect('/login')
  } else {
    req.flash("success","Success to login!");
    next();
  }
}

function authenticateAdmin(req,res,next){
  if(!(req.session.admin_id)){

    res.redirect('/login')
  } else {
    next();
  }
}
