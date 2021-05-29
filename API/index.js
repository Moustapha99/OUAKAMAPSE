


//PARTIEBASE DE DONNEES
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user :'professeur',
    password:'passer',
    database:'projet_schema'
});

mysqlConnection.connect((err)=>{
    if (!err) 
    console.log('CONNECTION REUSSIE MON GARS');
    else
    console.log('ECHEC DE LA CONNECTION MONGARS \n '+ JSON.stringify(err));
});
var sql ='INSERT INTO seance(Id_Conference,Date,Partage_ecran) VALUES (?,?,?)';

mysqlConnection.query(sql,['Quitte ici','7',8],(err,rows)=>{
    if (!err) 
    console.log(rows);
    
});

// const express = require('express');
// var app=express();
// app.use(express.json)
// app.listen(process.env.PORT ||'8080' ,()=>{
//     console.log('Express est actif sur le port:', process.env.PORT);
// });