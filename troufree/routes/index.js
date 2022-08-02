// const { response } = require('express');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const userHelpers=require('../helpers/user-helpers')

/* stuent authetification start */
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.redirect('/users')
  }
  else
  res.render('user/login_page', { title: 'Login' });
});
// router.get('/login',function(req,res){
//   res.render('user/login_page')
  
// })

router.post('/login',(req,res)=>{

//console.log(req.body)
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.login=true
      req.session.user=response.user
      res.redirect('/users')
      console.log(req.body)
    }
    else{
      res.redirect('/')
    }
  })
 
/*student authentification end*/
 
})  
/*hod authetification start*/
router.get('hdl',function(req,res){
  res.render('user/hod_log')
})
router.get('/hdl',function(req,res){
  if(req.session.login){
res.redirect('/hodmain')
  }
  else
  {
    res.render('user/hod_log', { title: 'Login' });
  }



})

router.post('/hdl',(req,res)=>{
  userHelpers.doLogin_hod(req.body).then((response)=>{
    if(response.status){
      req.session.login=true
      req.session.user=response.user
      res.redirect('/hodmain')
    }
    else{
      res.redirect('/hdl')
    }
  })




})


/*hod autherification end*/



// router.post('/login',(req,res)=>{
  
// })
/*student signuup start */
router.get('/signup',(req,res,next)=>{
  let user=req.session.user
  res.render('signup',{title:'students signup',admin:true,user})
 //next()
  //res.redirect('/')
})
/*student signup end */


router.post('/signup',(req,res)=>{
  userHelpers.dosignup(req.body).then((response)=>{
    console.log(response)
    //res.sendFile('student submitted')

    //res.redirect('/')
  })
 


})
router.get('/adm',(req,res)=>{
  res.render('user/adminlogin',{title:'students signup'})
 
})

router.post('/adm',function(req,res){
  
  userHelpers.doLogin_admin(req.body).then((response)=>{
    if(response.status){
      req.session.login=true
      req.session.user=response.user
      res.redirect('/admin')
    }
    else{
      res.redirect('/adm')
    }
  })
})



// router.get('/hodmain',(req,res)=>{
//   let hod_user=req.session.hod_user
  
//   res.render('hodmain',{hod_user})
// })

//   router.get('/hdl',(req,res)=>{
//    if(req.session.login){
//     res.redirect('/hodmain')
//    }
//    else
//     res.render('/hodmain')
//   })
//   router.post('/hdl',function(req,res){

//    // res.render('/hodmain')
//     userHelpers.doLogin(req.body).then((response)=>{
//       if(response.status){
//         req.session.login=true
//         req.session.hod_user=response.hod_user
//         res.redirect('/hodmain')
//       }
//       else{
//         res.redirect('/hdl')
//       }
//       })
    
//   })



/* logout */

  router.get('/logout',function(req,res){
    req.session.destroy()
    res.redirect('/')
  })

  /*logout end */
  
 




  router.get('/pay',(req,res)=>{
    //let use=req.session.user
    //let users=req.session.user
    res.render('payment',{student:true,Destination,users})
   
    console.log(users)
    
  })
  router.post('/pay',(req,res)=>{
    
    userHelpers.do_bus(req.body).then((response)=>{
  
   
       if(response.status){
        req.session.login=true
        req.session.user=response.user
        res.send("Payment Successful")
       }
      //  else{
      //   res.redirect('/bus')
      //  }
      
      // console.log(Destination)
      // console.log(des)

    })
        })
      
     
  
  
    
  

  router.get('/bus',(req,res)=>{
    let users=req.session.user
   
   res.render('phase2',{student:true,users})
   
   
   

  })
  router.post('/bus',function(req,res){
    
  
  // console.log(req.body.Destination)
  //   console.log(req.body.dof)
  //   // console.log(req.body.TODestination)
  //   console.log(req.body.price)

  var Destination=req.body.Destination
  var dof=req.body.dof
  var price=req.body.price

    
    return res.render('payment',{Destination,dof,price});
     })
  router.get('/ok',(req,res)=>{
  

    let use=req.session.user

    //console.log(re_fn)
    res.render('pay',{use})
    // function call(res) {
      
      
    // }
    
    
     
  
  
    
  })
  
  router.post('/ok',(req,res)=>{
    console.log(req.body)
  })
  
  


  router.get('/admin',function(req,res){
    let user=req.session.user
    res.render('admin_main',{admin:true,user})
    
  })

  router.get('/fcl_m',function(req,res){
    res.render('facultymain')
  })
  

  router.get('/fcl',function(req,res){
    if(req.session.Login)
    {
      res.render('/fcl_m')
    }
    else
    
    res.render('user/faculty')
  })
  router.post('/fcl',(req,res)=>{
    userHelpers.doLogin_faculty(req.body).then((response)=>{
      if(response.status){
        req.session.login=true
        req.session.user=response.user
        res.redirect('/fcl_m')
      }
      else{
        res.redirect('user/faculty')
      }
      })
    

    res.render('/fcl_m')
  })



  router.post('/req',function(req,res){
    console.log(req.body)
})


router.get('/tk',(req,res)=>{
  res.render('ticket')
})

router.post('/tk',(req,res)=>{
  userHelpers.dobusticket(req.body).then((response)=>{
    if(!response.status){
      console.log('inserted')
    }
    else
    {
      console.log('it have some problem')
    }
  })
   console.log(req.body)
   
})

router.get('/display', function(req, res, next) {
  userHelpers.DISPLAY_COLLECTION().then((data)=>{
    let user=req.session.user
    console.log(data)
     res.render('display',{admin:true,user,data})
  })
  
    
  
 
 })

 router.get('/tm', function(req, res, next) {
   let users=req.session.user
   res.render('request',{student:true,users})
   
  // res.render('/main',{user})
   //console.log(users)c
 
 })

 router.post('/tm',(req,res)=>{
  userHelpers.DISPLAY_STD_COLLECTION(req.body).then((response)=>{
    if(!response.status){
      console.log('inserted')
    }
    else
    {
      console.log('it have some problem')
    }
  })
})
    

  router.get('/Display1',(req,res)=>{

    userHelpers.Dis().then((data)=>{
      let users=req.session.user
      console.log(data)
       res.render('display1',{hodn:true,users,data})
    })
  })
   

 


 
    





module.exports = router;
