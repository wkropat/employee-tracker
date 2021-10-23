const mysql = require('mysql2');
const express = require("express");
const app = express()
const PORT = process.env.PORT || 4000
​
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'registrar_db',
    },
    console.log(`Connected to the employees_db database.`)
  );
​​
  app.get("/api/deparments/:name",(req,res)=>{
    // Dummy query for the format
    db.query('SELECT name FROM departments WHERE id=?',req.params.id,(err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data)
        }
      });
  })
​
  app.listen(PORT,()=>{
      console.log(`Listen here: https://localhost.${PORT}`)
  })