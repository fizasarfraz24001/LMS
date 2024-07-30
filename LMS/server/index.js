const express=require("express");
const session = require('express-session');
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const multer = require("multer");
const path = require("path");
const mysql=require("mysql");
const { send } = require("process");
app.use(cors());
app.use(express.json());
const { Pool } = require('pg');
//access images
app.use("/upload/images",express.static("./upload/images"));



const Connection=mysql.createPool({
host:"localhost",
user:"root",
password:"",
database:"lms"
});

app.use(session({
  secret: 'mysecretkey',
  resave: true,
  saveUninitialized: true
}));
//Start images Upload
// storage engine 

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: {
      fileSize: 1000000000000000000000
  }
})
app.use('/Image', express.static('upload/images'));
app.post("/upload", upload.single('Image'), (req, res) => {
const Image = req.file.path;
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
const userRole = req.body.userRole;



  let sqlInsert = 'INSERT INTO `login` (name,email,password,userRole,Image)  VALUES (?,?,?,?,?)'; 
Connection.query(sqlInsert,[name,email,password,userRole,Image],(err,result)=>{
  if(err){
      console.log("err",err);
    //  res.status(422).json({status:422,error});
  }
  else{
    res.send("Image add");
    //res.status(201).json({status:201,data:req.body});
  }
  
  })



});
///////////////////////////////////////////LOGIN API/////////////////////////
///LOGIN
app.post('/loginAdmin', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const query = `SELECT * FROM login join urole  ON  login.userRole=urole.UID WHERE name = '${name}' AND password = '${password}' AND userRole='1'`;

  Connection.query(query, (err, result) => {
    if (err) {
      console.error('Error querying database: ' + err);
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(401).send({ error: 'Invalid Credentials' });
      return;
    }
    const login = result[0];
    res.send({
      id: login.id,
      name: login.name,
     
    });
  });
});
///////////////////Teacher
app.post('/loginteacher', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const query = `SELECT * FROM login join urole  ON  login.userRole=urole.UID WHERE name = '${name}' AND password = '${password}' AND userRole='2'`;

  Connection.query(query, (err, result) => {
    if (err) {
      console.error('Error querying database: ' + err);
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(401).send({ error: 'Invalid Credentials' });
      return;
    }
    const login = result[0];
    res.send({
      id: login.id,
      name: login.name,
     
    });
  });
});
/////////////////////STUDENT
app.post('/loginStudent', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const query = `SELECT * FROM login join urole  ON  login.userRole=urole.UID WHERE name = '${name}' AND password = '${password}' AND userRole='3'`;

  Connection.query(query, (err, result) => {
    if (err) {
      console.error('Error querying database: ' + err);
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(401).send({ error: 'Invalid Credentials' });
      return;
    }
    const login = result[0];
    res.send({
      id: login.id,
      name: login.name,
     
    });
  });
});
///////////////PARENTS
app.post('/loginParents', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const query = `SELECT * FROM login join urole  ON  login.userRole=urole.UID WHERE name = '${name}' AND password = '${password}' AND userRole='4'`;

  Connection.query(query, (err, result) => {
    if (err) {
      console.error('Error querying database: ' + err);
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(401).send({ error: 'Invalid Credentials' });
      return;
    }
    const login = result[0];
    res.send({
      id: login.id,
      name: login.name,
     
    });
  });
});
////////////////////////////INSERT  RECORD API /////////////////////////
app.post("/InsertUserRole", (req,res)=>{
  const UName=req.body.UName;

let sqlInsert1 = 'INSERT INTO `urole` (UName)  VALUES (?)'; 

Connection.query(sqlInsert1,[UName],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully add result");
}

})

});
//ADD CLASS
app.post("/InsertClaaName", (req,res)=>{
  const classname=req.body.classname;

let sqlInsert1 = 'INSERT INTO `class` (classname)  VALUES (?)'; 

Connection.query(sqlInsert1,[classname],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully add result");
}

})

});
//BOOK
app.post("/InsertBook", (req,res)=>{
  const Book=req.body.Book;

let sqlInsert1 = 'INSERT INTO `book` (Book)  VALUES (?)'; 

Connection.query(sqlInsert1,[Book],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully add Book");
}

})

});
///ADD TOPIC
app.post("/InsertTopic", (req,res)=>{
  const topic=req.body.topic;

let sqlInsert1 = 'INSERT INTO `titlemarks` (topic)  VALUES (?)'; 

Connection.query(sqlInsert1,[topic],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully Add Topic");
}

})

});
//ADD CLASS
app.post("/InsertBrenchName", (req,res)=>{
  const BName=req.body.BName;

let sqlInsert1 = 'INSERT INTO `brenchname` (BName)  VALUES (?)'; 

Connection.query(sqlInsert1,[BName],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully add result");
}

})

});
//////////////INSERT ASSIGNMENT QUIZ
app.post("/Insertassquiz", (req,res)=>{
  const Topic=req.body.Topic;
  const ClassN=req.body.ClassN;
  const subject=req.body.subject;
  const Question=req.body.Question;
  const Date=req.body.Date;
let sqlInsert1 = 'INSERT INTO `uploadassquiz` (Topic,ClassN,subject,Question,Date)  VALUES (?,?,?,?,?)'; 

Connection.query(sqlInsert1,[Topic,ClassN,subject,Question,Date],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully Add Record");
}

})

});
///////////////////////////////////INSERT IMAGES ////////////////////////////////
app.use('/Image', express.static('upload/images'));
app.post("/uploadRegBn", upload.single('Image'), (req, res) => {
const Image = req.file.path;
const BN = req.body.BN;
const email = req.body.email;
const Address = req.body.Address;




  let sqlInsert = 'INSERT INTO `regbn` (BN,email,Address,Image)  VALUES (?,?,?,?)'; 
Connection.query(sqlInsert,[BN,email,Address,Image],(err,result)=>{
  if(err){
      console.log("err",err);
    //  res.status(422).json({status:422,error});
  }
  else{
    res.send("Image add");
    //res.status(201).json({status:201,data:req.body});
  }
  
  })

});

app.post("/AddAdmin", upload.single('Image'), (req, res) => {
  const Image = req.file.path;
  const BNID = 1;
  const email = req.body.email;
  const userRole=1;
  const name = req.body.name;
  const password = req.body.password;

  Connection.query('SELECT COUNT(*) as cnt FROM login WHERE name = ?', [name], function(err, result) {
    if (err) throw err;
  
    if (result[0].cnt > 0) {
      // the username already exists in the database, handle the error here
      console.log('Username already exists');
      res.send('Username already exists');
    } else {
      // insert the new user into the database
    
      let sqlInsert2 = 'INSERT INTO `login` (name,email,password,Image,BNID,userRole)  VALUES (?,?,?,?,1,1)';
      Connection.query(sqlInsert2,[name,email,password,Image,BNID,userRole], function(err, result) {
        if (err) throw err;
  
        res.send('SucessFully Created User');
      });
    }
  })
  
  });
  //ADD TECHER
  
app.post("/AddTeacher", upload.single('Image'), (req, res) => {
  const Image = req.file.path;
  const BNID = 1;
  const email = req.body.email;
  const userRole=2;
  const name = req.body.name;
  const password = req.body.password;

  Connection.query('SELECT COUNT(*) as cnt FROM login WHERE name = ?', [name], function(err, result) {
    if (err) throw err;
  
    if (result[0].cnt > 0) {
      // the username already exists in the database, handle the error here
      console.log('Username already exists');
      res.send('Username already exists');
    } else {
      // insert the new user into the database
    
      let sqlInsert2 = 'INSERT INTO `login` (name,email,password,Image,BNID,userRole)  VALUES (?,?,?,?,1,2)';
      Connection.query(sqlInsert2,[name,email,password,Image,BNID,userRole], function(err, result) {
        if (err) throw err;
  
        res.send('SucessFully Created User');
      });
    }
  })
  
  });
  //INSERT STUDENT
  app.post("/AddStudent", (req, res) => {
   
    const BNID = 1;
 
    const userRole=3;
    const name = req.body.name;
    const stdname=req.body.stdname;
    const password = req.body.password;
    const RegNo = req.body.RegNo;
    const contact = req.body.contact;
    const cn = req.body.cn;
    const Fees = req.body.Fees;
    const pfk = req.body.pfk;
    Connection.query('SELECT COUNT(*) as cnt FROM addstudent WHERE name = ? OR RegNo=?', [name,RegNo], function(err, result) {
      if (err) throw err;
    
      if (result[0].cnt > 0) {
        // the username already exists in the database, handle the error here
       
        res.send('Username And Registration Combination Exixts!!');
      } else {
        // insert the new user into the database
      
        let sqlInsert2 = 'INSERT INTO `addstudent` (name,stdname,password,RegNo,contact,cn,Fees,pfk,BNID,userRole)  VALUES (?,?,?,?,?,?,?,?,1,3)';
        Connection.query(sqlInsert2,[name,stdname,password,RegNo,contact,cn,Fees,pfk,BNID,userRole], function(err, result) {
          if (err) throw err;
          let sqlInsert2 = 'INSERT INTO `login` (name,password,BNID,userRole)  VALUES (?,?,1,3)';
          Connection.query(sqlInsert2,[name,password,BNID,userRole], function(err, result) {
            if (err) throw err;
    
          res.send('SucessFully Add Student');

          });
        });
      }
    })
    
    });
    //add parents
    app.post("/AddParents", (req, res) => {
   
      const BNID = 1;
   
      const userRole=3;
      const name = req.body.name;
      const Fk=req.body.Fk;
      const password = req.body.password;
    
      Connection.query('SELECT COUNT(*) as cnt FROM parents WHERE name = ? ', [name], function(err, result) {
        if (err) throw err;
      
        if (result[0].cnt > 0) {
          // the username already exists in the database, handle the error here
         
          res.send('Username  Exixts!!');
        } else {
          // insert the new user into the database
        
          let sqlInsert2 = 'INSERT INTO `parents` (name,password,FK,BNID,userRole)  VALUES (?,?,?,1,4)';
          Connection.query(sqlInsert2,[name,password,BNID,userRole], function(err, result) {
            if (err) throw err;
            let sqlInsert2 = 'INSERT INTO `login` (name,password,BNID,userRole)  VALUES (?,?,1,4)';
            Connection.query(sqlInsert2,[name,password,BNID,userRole], function(err, result) {
              if (err) throw err;
      
            res.send('SucessFully Add User');
  
            });
          });
        }
      })
      
      });

//////////////////////////////////////SELECTION
app.get("/FetchBN", (req, res) => {
  let Display1 = 'SELECT * FROM brenchname  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
/////////////////////////////// DISPLAY TABLE DATA ///////////////////////////////
app.get("/DisplayUserRole", (req, res) => {
let Display1 = 'SELECT * FROM urole  '; 
  Connection.query(Display1,(err,result)=>{
    if(err){
        console.log("err",err);
      //  res.status(422).json({status:422,error});
    }
    else{
      res.send(result);
      //res.status(201).json({status:201,data:req.body});
    }
   });
 });
 //VIEW TOPIC
 app.get("/DisplayTopics", (req, res) => {
  let Display1 = 'SELECT * FROM titlemarks  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
 //BOOK
 app.get("/DisplayBook", (req, res) => {
  let Display1 = 'SELECT * FROM book  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
 //Class
 app.get("/DisplayClassName", (req, res) => {
  let Display1 = 'SELECT * FROM class  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
   //parents
   app.get("/Displayparents", (req, res) => {
    let Display1 = 'SELECT * FROM parents  '; 
      Connection.query(Display1,(err,result)=>{
        if(err){
            console.log("err",err);
          //  res.status(422).json({status:422,error});
        }
        else{
          res.send(result);
          //res.status(201).json({status:201,data:req.body});
        }
       });
     });
//BRENCHNAME
app.get("/DisplayBrenchName", (req, res) => {
  let Display1 = 'SELECT * FROM brenchname  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
 //parent
 app.get("/DisplayParents", (req, res) => {
  let Display1 = 'SELECT * FROM parents  '; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });  
   app.get("/DisplayRegBN", (req, res) => {
    let Display1 = 'select * from regbn join brenchname  ON  regbn.BN=brenchname.BID ORDER By brenid DESC'; 
      Connection.query(Display1,(err,result)=>{
        if(err){
            console.log("err",err);
          //  res.status(422).json({status:422,error});
        }
        else{
          res.send(result);
          //res.status(201).json({status:201,data:req.body});
        }
       });
     });
     //ADMIN
     app.get("/DisplayAdmin", (req, res) => {
      let Display1 = 'select * from login join brenchname ON login.BNID=brenchname.BID JOIN urole ON login.userRole=urole.UID ORDER By Userid DESC'; 
        Connection.query(Display1,(err,result)=>{
          if(err){
              console.log("err",err);
            //  res.status(422).json({status:422,error});
          }
          else{
            res.send(result);
            //res.status(201).json({status:201,data:req.body});
          }
         });
       });
       app.get("/DisplayTeacher", (req, res) => {
        let Display1 = 'select * from login join brenchname ON login.BNID=brenchname.BID JOIN urole ON login.userRole=urole.UID where userRole=2 ORDER By Userid DESC'; 
          Connection.query(Display1,(err,result)=>{
            if(err){
                console.log("err",err);
              //  res.status(422).json({status:422,error});
            }
            else{
              res.send(result);
              //res.status(201).json({status:201,data:req.body});
            }
           });
         });
//STUDENT
app.get("/DisplayStudent", (req, res) => {
  let Display1 = 'select * from addstudent join brenchname ON addstudent.BNID=brenchname.BID JOIN urole ON addstudent.userRole=urole.UID JOIN class ON addstudent.cn=class.cid JOIN parents ON addstudent.pfk=parents.pid ORDER By Stid DESC'; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });

   ///FEES MONTH
   app.get("/DisplayFeesChallan", (req, res) => {
    let Display1 = 'select * from feeschallan join brenchname ON feeschallan.BNID=brenchname.BID JOIN class ON feeschallan.cn=class.cid JOIN parents ON feeschallan.pfk=parents.pid ORDER By fid DESC'; 
      Connection.query(Display1,(err,result)=>{
        if(err){
            console.log("err",err);
          //  res.status(422).json({status:422,error});
        }
        else{
          res.send(result);
          //res.status(201).json({status:201,data:req.body});
        }
       });
     });
     ////ASSIGNEMT QUIZ
     app.get("/DisplayAssignmnetQuiz", (req, res) => {
      let Display1 = 'select * from uploadassquiz JOIN titlemarks ON uploadassquiz.Topic=titlemarks.tid JOIN class ON uploadassquiz.ClassN=class.cid JOIN book ON uploadassquiz.subject=book.BookID ORDER By upid DESC'; 
        Connection.query(Display1,(err,result)=>{
          if(err){
              console.log("err",err);
            //  res.status(422).json({status:422,error});
          }
          else{
            res.send(result);
            //res.status(201).json({status:201,data:req.body});
          }
         });
       });
 ////////DELETE TABLE DATA////////////////////////////////////
 app.delete("/DeleteUserRole/:UID",(req,res)=>{
  const UID=req.params.UID;
 

const SqlD1= 'Delete from urole  where UID=?'; 
  Connection.query(SqlD1,[UID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
///////Delete upload assquiz
app.delete("/DeleteAssignmnet/:upid",(req,res)=>{
  const upid=req.params.upid;
 

const SqlD1= 'Delete from uploadassquiz  where upid=?'; 
  Connection.query(SqlD1,[upid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
//TOPIC
app.delete("/DeleteTopic/:tid",(req,res)=>{
  const tid=req.params.tid;
 

const SqlD1= 'Delete from titlemarks  where tid=?'; 
  Connection.query(SqlD1,[tid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
//classname
app.delete("/DeleteClassName/:cid",(req,res)=>{
  const cid=req.params.cid;
 

const SqlD1= 'Delete from class  where cid=?'; 
  Connection.query(SqlD1,[cid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
app.delete("/DeleteBrenchName/:BID",(req,res)=>{
  const BID=req.params.BID;
 

const SqlD1= 'Delete from brenchname  where BID=?'; 
  Connection.query(SqlD1,[BID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
//BOOK NAME
app.delete("/DeleteBook/:BookID",(req,res)=>{
  const BookID=req.params.BookID;
 

const SqlD1= 'Delete from book  where BookID=?'; 
  Connection.query(SqlD1,[BookID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Delete Successfully");
      }
  

  });
 
});
// 
app.delete("/DeleteAdmin/:Userid",(req,res)=>{
  const Userid=req.params.Userid;
 

  const SqlD1= 'Delete from login  where Userid=?'; 
    Connection.query(SqlD1,[Userid],(error,result)=>{
        if(error){
            console.log("error",error);
        }
        else{
            res.send(" Successful Delete User");
        }
    
  
    });
   
  });
  // STUDENT
app.delete("/DeletesTUDEBT/:Stid",(req,res)=>{
  const Stid=req.params.Stid;
 

  const SqlD1= 'Delete from  addstudent  where Stid=?'; 
    Connection.query(SqlD1,[Stid],(error,result)=>{
        if(error){
            console.log("error",error);
        }
        else{
            res.send(" Successful Delete Record");
        }
    
  
    });
   
  });
////////////////////////////// FETCH DATA IN FORM ////////////////////
app.get("/Fetch1/:UID",(req,res)=>{
  const UID=req.params.UID;
  const sqlFetch1="select * from urole where UID=?";
  Connection.query(sqlFetch1,[UID],(error,result)=>{
  res.send(result);

  });
 
});
//ASSIGNMENT QUIZ
app.get("/Fetcuass/:upid",(req,res)=>{
  const upid=req.params.upid;
  const sqlFetch1="select * from uploadassquiz where upid=?";
  Connection.query(sqlFetch1,[upid],(error,result)=>{
  res.send(result);

  });
 
});
//title
app.get("/FetchTitle/:tid",(req,res)=>{
  const tid=req.params.tid;
  const sqlFetch1="select * from titlemarks where tid=?";
  Connection.query(sqlFetch1,[tid],(error,result)=>{
  res.send(result);

  });
 
}); 
//Book
app.get("/FetchBook/:BookID",(req,res)=>{
  const BookID=req.params.BookID;
  const sqlFetch1="select * from book where BookID=?";
  Connection.query(sqlFetch1,[BookID],(error,result)=>{
  res.send(result);

  });
 
}); 

//class
app.get("/Fetchclass/:cid",(req,res)=>{
  const cid=req.params.cid;
  const sqlFetch1="select * from class where cid=?";
  Connection.query(sqlFetch1,[cid],(error,result)=>{
  res.send(result);

  });
 
}); 
app.get("/FetchBrenchName/:BID",(req,res)=>{
  const BID=req.params.BID;
  const sqlFetch1="select * from brenchname where BID=?";
  Connection.query(sqlFetch1,[BID],(error,result)=>{
  res.send(result);

  });
 
}); 
app.get("/FetchRegBName/:brenid",(req,res)=>{
  const brenid=req.params.brenid;
  const sqlFetch1="select * from regbn where brenid=?";
  Connection.query(sqlFetch1,[brenid],(error,result)=>{
  res.send(result);

  });
 
});
app.get("/FetchAdmin/:Userid",(req,res)=>{
  const Userid=req.params.Userid;
  const sqlFetch1="select * from login where Userid=?";
  Connection.query(sqlFetch1,[Userid],(error,result)=>{
  res.send(result);

  });
 
}); 
app.get("/FetchStudent/:Stid",(req,res)=>{
  const Stid=req.params.Stid;
  const sqlFetch1="select * from addstudent where Stid=?";
  Connection.query(sqlFetch1,[Stid],(error,result)=>{
  res.send(result);

  });
 
}); 
////////////////////////////UPDATE TABLE DATA /////////////////////
app.put("/update1/:UID",(req,res)=>{
  const UID=req.params.UID;
  const UName=req.body.UName;


const sqlUpdate1= 'update  `urole` SET UName=?  where UID=?'; 
  Connection.query(sqlUpdate1,[UName,UID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("UPDATED");
      }
 });
});
//class Name
app.put("/updateClassName/:cid",(req,res)=>{
  const cid=req.params.cid;
  const classname=req.body.classname;


const sqlUpdate1= 'update  `class` SET classname=?  where cid=?'; 
  Connection.query(sqlUpdate1,[classname,cid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("UPDATED");
      }
 });
});
//title
app.put("/updateTopic/:tid",(req,res)=>{
  const tid=req.params.tid;
  const topic=req.body.topic;


const sqlUpdate1= 'update  `titlemarks` SET topic=?  where tid=?'; 
  Connection.query(sqlUpdate1,[topic,tid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("UPDATE Succesfully!!!!!!");
      }
 });
});
//BOOK
app.put("/updateBook/:BookID",(req,res)=>{
  const BookID=req.params.BookID;
  const Book=req.body.Book;


const sqlUpdate1= 'update  `book` SET Book=?  where BookID=?'; 
  Connection.query(sqlUpdate1,[Book,BookID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Sucessfully Update ");
      }
 });
});
//ASSIGNMENT QUESTION
app.put("/upgateassquiz/:upid", (req,res)=>{
  const upid=req.params.upid;
  const Topic=req.body.Topic;
  const ClassN=req.body.ClassN;
  const subject=req.body.subject;
  const Question=req.body.Question;
  const Date=req.body.Date;
let sqlInsert1 = 'update `uploadassquiz` SET Topic=?,ClassN=?,subject=?,Question=?,Date=? where upid'; 

Connection.query(sqlInsert1,[Topic,ClassN,subject,Question,Date,upid],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully Update Record");
}

})

});
//Brench Name
app.put("/updateBrenchName/:BID",(req,res)=>{
  const BID=req.params.BID;
  const BName=req.body.BName;


const sqlUpdate1= 'update  `brenchname` SET BName=?  where BID=?'; 
  Connection.query(sqlUpdate1,[BName,BID],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("UPDATED");
      }
 });
});
//Reg Brench
app.put("/updateREGBrenchName/:brenid",(req,res)=>{
  const brenid=req.params.brenid;
  const BN=req.body.BN;
  const email=req.body.email;
  const Address=req.body.Address;
const sqlUpdate1= 'update  `regbn` SET BN=?,email=?,Address=?  where brenid=?'; 
  Connection.query(sqlUpdate1,[BN,email,Address,brenid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("UPDATED");
      }
 });
});
//update admin
app.put("/updateAdmin/:Userid",(req,res)=>{
  const Userid=req.params.Userid;
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
const sqlUpdate1= 'update  `login` SET name=?,email=?,password=?  where Userid=?'; 
  Connection.query(sqlUpdate1,[name,email,password,Userid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Sucessfully Updated");
      }
 });
});
//update Studetn
app.put("/updateStudent/:Stid",(req,res)=>{
  const Stid=req.params.Stid;
  const stdname=req.body.stdname;
  const RegNo=req.body.RegNo;
  const Fees=req.body.Fees;
  const cn=req.body.cn;
  const contact=req.body.contact;
  const pfk=req.body.pfk;
const sqlUpdate1= 'update  `addstudent` SET stdname=?,RegNo=?,contact=?,cn=?,Fees=?,pfk=?  where Stid=?'; 
  Connection.query(sqlUpdate1,[stdname,RegNo,contact,cn,Fees,pfk,Stid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Sucessfully Updated");
      }
 });
});

/////////////////// FEES CHALLAN
app.post("/InsertBrenchName", (req,res)=>{
  const BName=req.body.BName;

let sqlInsert1 = 'INSERT INTO `brenchname` (BName)  VALUES (?)'; 

Connection.query(sqlInsert1,[BName],(err,result)=>{
if(err){
    console.log("err",err);
    
}
else{
   res.send("Sucessfully add result");
}

})

});


//redirect
app.get('/UserRole/:name', (req, res) => {
  const name = req.params.name;
 
  const sql15 = 'SELECT * FROM login WHERE name = ? ';

  Connection.query(sql15, [name], (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error });
    }

    res.json(results);
  });
});















function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
      res.json({
          success: 0,
          message: err.message
      })
  }
}



//Fetch data
app.get("/FetchStudent11", (req, res) => {
  let Display1 = 'SELECT * FROM addstudent  '; 
    Connection.query(Display1,(err,result)=>{
    
     });
   });
//////////////////////////////////////////////ADD FEES MONTH
app.post("/ADDFEESMONTH",(req, res) => {
  let Date=req.body.Date;
  let Fees;
  let stdname;
  let RegNo;
  let cn;
  let pfk;
  let BNID;
  let D = 'SELECT * FROM addstudent'; 
    Connection.query(D,(error,results)=>{
      if (error) {
        console.error(error);
      } else {
        // loop through the results and print the column values
        for (let i = 0; i < results.length; i++) {
         // res.send(results[i].stdname);
         Connection.query("INSERT INTO feeschallan (Date,stdname,RegNo,cn,Fees,pfk,BNID) VALUES(?,?,?,?,?,?,?)",
         [Date,results[i].stdname,results[i].RegNo,results[i].cn,results[i].Fees,results[i].pfk,results[i].BNID],(err,result)=>{
        
res.send("Sucessfully Add Month");

        
          } )
        }


        }
      
       
        });
       
    
      // res.send(Fees);
        
      
     
   
   });

/////add MARKS
app.post("/ADDMarksMonth",(req, res) => {
  let Date=req.body.Date;
  let CN=req.body.CN;
  let ts=req.body.ts;
  let Sub=req.body.Sub;
let name;
  let RegNo;
  let D = 'SELECT * FROM addstudent where cn=?'; 
  Connection.query(D,[CN],(error,results)=>{
    if (error) {
      console.error(error);
    } else {
      // loop through the results and print the column values
      Connection.query("INSERT INTO addmarkmonth (Date,CN,ts,Sub) VALUES(?,?,?,?)",
          [Date,CN,ts,Sub],(err,result)=>{   
      for (let i = 0; i < results.length; i++) {
       // res.send(results[i].stdname);
       Connection.query("INSERT INTO addmarks (Date,CN,ts,Sub,name,RegNo,PID) VALUES(?,?,?,?,?,?,?)",
       [Date,CN,ts,Sub,results[i].name,results[i].RegNo,results[i].pfk],(err,result)=>{
      
res.send("Sucessfully Add Month");

      
        } )
      }// for loop
    })

      }
    
     
      });
 
      });
     



///View date month

app.get("/Displayaddmarkmonth", (req, res) => {
  let Display1 = 'SELECT * FROM addmarks JOIN class ON addmarks.CN=class.cid JOIN book ON addmarks.Sub=book.BookID JOIN titlemarks ON addmarks.ts=titlemarks.tid ORDER BY mid DESC'; 
    Connection.query(Display1,(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
   //student
   app.get("/StudentChallan/:stdname", (req, res) => {
    const stdname=req.params.stdname;
    let Display1 = 'SELECT * FROM feeschallan  where stdname=? ORDER BY fid DESC limit 1'; 
      Connection.query(Display1,[stdname],(err,result)=>{
        if(err){
            console.log("err",err);
          //  res.status(422).json({status:422,error});
        }
        else{
          res.send(result);
          //res.status(201).json({status:201,data:req.body});
        }
       });
     });
//view marks student
app.get("/DisplayaddmarkStudent/:name", (req, res) => {
  
  const name=req.params.name;
  let Display1 = 'SELECT * FROM addmarks JOIN class ON addmarks.CN=class.cid JOIN book ON addmarks.Sub=book.BookID JOIN titlemarks ON addmarks.ts=titlemarks.tid where name=? ORDER BY mid DESC'; 
    Connection.query(Display1,[name],(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });

//fetch Data
app.get("/FetchMarks/:mid",(req,res)=>{
 
  const mid=req.params.mid;
  const sqlFetch1="select * from addmarks where mid=?   ";
  Connection.query(sqlFetch1,[mid],(error,result)=>{
  res.send(result);

  });
 
});

//UPDATE
app.put("/updateMarks/:mid",(req,res)=>{
  const mid=req.params.mid;
  const name=req.body.name;
  const marks=req.body.marks;

const sqlUpdate1= 'update  `addmarks` SET name=? ,marks=? where mid=?'; 
  Connection.query(sqlUpdate1,[name,marks,mid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Add Marks");
      }
 });
});
//////////att
app.post("/ADDAtt",(req, res) => {
  let Date=req.body.Date;
 
let name;
 
  let D = 'SELECT * FROM addstudent '; 
  Connection.query(D,(error,results)=>{
    if (error) {
      console.error(error);
    } else {
      // loop through the results and print the column values
      
      for (let i = 0; i < results.length; i++) {
       // res.send(results[i].stdname);
       Connection.query("INSERT INTO  attendance (Date,name,PID) VALUES(?,?,?)",
       [Date,results[i].name,results[i].pfk],(err,result)=>{
      
res.send("Sucessfully Create Slot");

      
        } )
      }// for loop
 

      }
    
     
      });
 
      });

///VIEW ATT
app.get("/ViewAtt",(req,res)=>{
 
  
  const sqlFetch1="select * from attendance   ";
  Connection.query(sqlFetch1,(error,result)=>{
  res.send(result);

  });
 
});
//att student
app.get("/ViewAttSTD/:name",(req,res)=>{
  const name=req.params.name;
  
  const sqlFetch1="select * from attendance  where name=? ";
  Connection.query(sqlFetch1,[name],(error,result)=>{
  res.send(result);

  });
 
});

//FETCH
app.get("/FetchAtt/:aid",(req,res)=>{
 
  const aid=req.params.aid;
  const sqlFetch1="select * from attendance where aid=?   ";
  Connection.query(sqlFetch1,[aid],(error,result)=>{
  res.send(result);

  });
 
});
//pAtt
app.get("/ParentAtt/:PID",(req,res)=>{
 
  const PID=req.params.PID;
  const sqlFetch1="select * from attendance where PID=?   ";
  Connection.query(sqlFetch1,[PID],(error,result)=>{
  res.send(result);

  });
 
});
//PARENTS
app.get("/ViewParents/:name",(req,res)=>{
 
  const name=req.params.name;
  const sqlFetch1="select * from parents where name=?   ";
  Connection.query(sqlFetch1,[name],(error,result)=>{
  res.send(result);

  });
 
});

//update Att
app.put("/updateAtt/:aid",(req,res)=>{
  const aid=req.params.aid;
  const name=req.body.name;
  const status=req.body.status;

const sqlUpdate1= 'update  `attendance` SET name=? ,status=? where aid=?'; 
  Connection.query(sqlUpdate1,[name,status,aid],(error,result)=>{
      if(error){
          console.log("error",error);
      }
      else{
          res.send("Add Attendance");
      }
 });
});



app.get("/Profile/:name", (req, res) => {
  const name=req.params.name;
  let Display1 = 'select * from login join brenchname ON login.BNID=brenchname.BID JOIN urole ON login.userRole=urole.UID where name=? ORDER By Userid DESC'; 
    Connection.query(Display1,[name],(err,result)=>{
      if(err){
          console.log("err",err);
        //  res.status(422).json({status:422,error});
      }
      else{
        res.send(result);
        //res.status(201).json({status:201,data:req.body});
      }
     });
   });
   app.put("/UpdateProfile/:Userid", upload.single('Image'), (req, res) => {
    const Image = req.file.path;
   
    const password = req.body.password;
    const Userid = req.params.Userid;
 
      
        let sqlInsert2 = 'update  `login` SET password=? , Image=?  where Userid=?';
        Connection.query(sqlInsert2,[password,Image,Userid], function(err, result) {
          if (err) throw err;
    
          res.send('SucessFully Update Profile');
        });
  
   
    
    });
app.get("/",(req,res)=>{
  res.send("Server Runing on Port 5000 januuuuuuuuuuu");
})


app.listen(5000,()=>{
console.log("server is Running on  5000");
});