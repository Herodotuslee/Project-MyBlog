const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index")
  },
  showBlog:(req,res)=>{
    // res.send('ok')
    knex('post').then((result)=>{
      res.render("blog",{posts:result,message:req.flash("success")})
    })
  },

  postPost:(req,res)=>{
    res.render("postPost")
  },
  post:(req,res)=>{
    knex('post').insert({
      title:req.body.title,
      content:req.body.content,
    }).then(()=>{
      res.redirect("/blog");
    })
  },

// SHOW ONE POST AND THE COMMENT
  showOnePost:(req,res)=>{
    knex('post').where('id',req.params.post_id)
    .then((result)=>{
      // res.send(result)
      res.render("showOnePost",{post:result[0]})
    })

  },
  delete:(req,res)=>{
    knex('post').where('id',req.params.post_id).del()
    .then(()=>
    res.redirect('/blog'))
  },
  editPage:(req,res)=>{
    knex('post').where('id',req.params.post_id)
    .then((result)=>{
      res.render("editPage",{post:result[0]})
      // res.send(result)
    })
  },
  edit:(req,res)=>{
    knex('post').where('id',req.params.post_id).update(
      {
        title:req.body.title,
        content:req.body.content
      }
    ).then(()=>{
      res.redirect('/blog')
    })

  }

}
