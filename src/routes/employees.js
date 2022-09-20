const express=require('express');
const router=express.Router();

const mysqlConnection=require('../database');

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM empleados', (error, results, fields)=>{
        if(!error){
            res.json(results);
        }else{
            console.log(error)
        }
    
    });
});
// const students=[
//     {id:1, name:'Denver', age:20, enroll:true}
// ];

// router.get('/api/students', (req, res) => {
//     res.send(students);
//   });
  
// router.get('/', (req, res) => {
//     res.send("Node JS API");
// });

module.exports=router;

