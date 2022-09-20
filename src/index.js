const express=require('express');
const app=express();

//Settings
app.set('port', process.env.PORT || 3000); //Creando el puerto y definiendolo en 3000
const port=3000;

//MiddleWares
app.use(express.json()); //Utilizar formato json en express

//Routes
app.use(require('./routes/employees'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})