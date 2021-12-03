const mysql = require('mysql2');
const inquirer = require('inquirer');
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
​
const main = ()=>{
inquirer
  .prompt({
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ['View All Employees', 
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                "QUIT"],
  })
  .then((data) => {
    if (data.choice === 'View All Employees') {
      db.query('SELECT * FROM employees', (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log(data);
          main()
        }
      });
    } else if (data.choice === 'Add Employee') {
      inquirer
        .prompt({
          type: 'input',
          name: 'name',
          message: 'Employee Name?',
        })
        .then((ans) => {
          db.query(
            'SQL COMMAND TO ADD DATA?',
            ans.id,
            (err, data) => {
              if (err) {
                throw err;
              } else {
                console.log(data);
               main()
              }
            }
          );
        });
    } else if (data.choice === 'Update Employee Role') {
        inquirer
          .prompt({
            type: 'input',
            name: 'name',
            message: 'Employee Name?',
          })
          .then((ans) => {
            db.query(
              'SQL COMMAND TO ADD DATA?',
              ans.id,
              (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.log(data);
                 main()
                }
              }
            );
          });
    } else if (data.choice === 'View All Roles') {
        inquirer
          .prompt({
            type: 'input',
            name: 'name',
            message: 'Employee Name?',
          })
          .then((ans) => {
            db.query(
              'SQL COMMAND TO ADD DATA?',
              ans.id,
              (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.log(data);
                 main()
                }
              }
            );
          });
    } else if (data.choice === 'Add Role') {
        inquirer
          .prompt({
            type: 'input',
            name: 'name',
            message: 'Employee Name?',
          })
          .then((ans) => {
            db.query(
              'SQL COMMAND TO ADD DATA?',
              ans.id,
              (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.log(data);
                 main()
                }
              }
            );
          });
    } else if (data.choice === 'View All Departments') {
        inquirer
          .prompt({
            type: 'input',
            name: 'name',
            message: 'Employee Name?',
          })
          .then((ans) => {
            db.query(
              'SQL COMMAND TO ADD DATA?',
              ans.id,
              (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.log(data);
                 main()
                }
              }
            );
          });
    } else if (data.choice === 'Add Department') {
        inquirer
          .prompt({
            type: 'input',
            name: 'name',
            message: 'Employee Name?',
          })
          .then((ans) => {
            db.query(
              'SQL COMMAND TO ADD DATA?',
              ans.id,
              (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.log(data);
                 main()
                }
              }
            );
          });
    } else if (data.choice === 'QUIT') {
        db.end();
    } else {
        console.log("Unexpected Shutdown.")
        db.end();
    }
  });
}
​
main()