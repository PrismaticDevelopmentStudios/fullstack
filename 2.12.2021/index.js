// Requires all modules
const express = require('express');
const port = process.env.port || 4000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express()

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
//END BodyParser END

// Sets Views
app.use(express.static(__dirname + 'views'));
// END Sets Views END

// Mysql
const userDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mhc22Lde55s",
    database: "theBenevolentOrganism"
});
console.log('connected to userDb')
// END Mysql END


// routes
app.get('/', (req, res) => {
    res.json({ greet: 'hi' })
})
// END routes END 

// Listening on port
app.listen(port, () => {
    console.log("Serving port", port)
});