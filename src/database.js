const mysql=require('mysql'); 

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'admin1234',
    database:'prueba',
    port:'3306'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports=mysqlConnection;