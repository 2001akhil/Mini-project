
var dbs=require('../config/db')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
const { resolve, reject } = require('promise')
const { response } = require('express')




module.exports={
    dosignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.pw=await bcrypt.hash(userData.pw,10)
            
            dbs.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },
             
 doBus:(userData)=>{
    return new Promise(async(resolve,reject)=>{
        userData.pw=await bcrypt.hash(userData.pw,10)
        dbs.get().collection(collection.BUS_COLLECTION).insertOne(userData).then((data)=>{
            resolve(data)
        })
 })
},
            
    // return new Promise(async(resolve,reject)=>{
    //     userData.pw=await bcrypt.hash(userData.pw,10)
        
    //     dbs.get().collection(collection. ADMIN_COLLECTION).insertOne(userData).then((data)=>{
    //         resolve(data)
    //     })
    // }) 
//student
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await dbs.get().collection(collection.USER_COLLECTION).findOne({adm:userData.adm})
          if(user){
            bcrypt.compare(userData.pw,user.pw).then((status)=>{
                if(status){
                    console.log("login sucess");
                    response.user=user
                    response.status=true
                    resolve(response)
                }
                else{
                    console.log('login failed')
                    resolve({status:false})
                }
            })

          }else{
            console.log('login failed')
            resolve({status:false})
          }
        })
    },

    
  
    doLogin_hod:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await dbs.get().collection(collection. HOD_COLLECTION).findOne({adm:userData.adm})
          if(user){
            bcrypt.compare(userData.pw,user.pw).then((status)=>{
                if(status){
                    console.log("login sucess");
                    response.user=user
                    response.status=true
                    resolve(response)
                }
                else{
                    console.log('login failed')
                    resolve({status:false})
                }

            })

          }else{
            console.log('login failed')
            resolve({status:false})
          }

        })
    },
    // //faculty
    doLogin_faculty:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await dbs.get().collection(collection. FACULTY_COLLECTION).findOne({adm:userData.adm})
          if(user){
            bcrypt.compare(userData.pw,user.pw).then((status)=>{
                if(status){
                    console.log("login sucess");
                    response.user=user
                    response.status=true
                    resolve(response)
                }
                else{
                    console.log('login failed')
                    resolve({status:false})
                }

            })

          }else{
            console.log('login failed')
            resolve({status:false})
          }

        })
    },
    
    //admin
    doLogin_admin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await dbs.get().collection(collection.  ADMIN_COLLECTION).findOne({adm:userData.adm})
          if(user){
            bcrypt.compare(userData.pw,user.pw).then((status)=>{
                if(status){
                    console.log("login sucess");
                    response.user=user
                    response.status=true
                    resolve(response)
                }
                else{
                    console.log('login failed')
                    resolve({status:false})
                }

            })

          }else{
            console.log('login failed')
            resolve({status:false})
          }

        })
    }, 
    do_phase1:(userData)=>{
    return new Promise(async(resolve,reject)=>{
        let loginstatus=false;
        let response={}
        dbs.get().collection(collection.MANAGEMENT_COLLECTION).insertOne(userData).then((data)=>{
            resolve(data)
        })


    })

    },
    
    dobusticket:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.dest=await bcrypt.hash(userData.dest,10)
            
            dbs.get().collection(collection.BUSP_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },
    dobusticket_find:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
          let user=await dbs.get().collection(collection.BUSP_COLLECTION).findOne({to:userData.desti})
          if(user){
            bcrypt.compare(userData.dest,user.dest).then((status)=>{
            if(status){
                console.log('all set')
                response.user=user
                response.status=true
                resolve(response)

            }
            else
            {
                console.log('its have some issues')
                resolve({status:false})
            }
            })
        }

        else{console.log('false')}
        })
    },
  do_bus:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.upi=await bcrypt.hash(userData.upi,10)
            
            dbs.get().collection(collection.do_bus).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },

    DISPLAY_COLLECTION:()=>{
        return new Promise(async(resolve,reject)=>{
         let data=await dbs.get().collection(collection.do_bus).find().toArray()
                resolve(data)
            })
        

    },
DISPLAY_STD_COLLECTION:(userData)=>{
    return new Promise(async(resolve,reject)=>{
        let data=await dbs.get().collection(collection.DISPLAY_STD_COLLECTION).insertOne(userData).then((data)=>{
            resolve(data)
        })
      
    })
},
Dis:()=>{
    return new Promise(async(resolve,reject)=>{
     let data=await dbs.get().collection(collection.DISPLAY_STD_COLLECTION).find().toArray()
            resolve(data)
            console.log(data)
        })
    }
}