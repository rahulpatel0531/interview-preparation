

============================ Mysql connection ================

	const mysql = require('mysql');

	// Create a connection to the MySQL database
	const connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: 'your_password',
	  database: 'mydb',
	});

	// Connect to the database
	connection.connect((err) => {
	  if (err) throw err;
	  console.log('Connected to MySQL database');
	});
	module.exports = connection;
	
	 
============================ PostgreSQL connection ================	

	const { Pool } = require('pg');

	const pool = new Pool({
	  user: 'your_username',
	  host: 'localhost',
	  database: 'your_database_name',
	  password: 'your_password',
	  port: 5432, // Default PostgreSQL port
	});

	module.exports = pool;
	

============================ MongoDB (mongoose) connection ================	

	const mongoose = require('mongoose');

	// Connect to MongoDB
	mongoose.connect('mongodb://localhost:27017/your_database_name', {
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	});

	// Define a schema
	const userSchema = new mongoose.Schema({
	  name: String,
	  email: String,
	});

	// Create a model
	const User = mongoose.model('User', userSchema);

	module.exports = User;
	
	
	
	OR 
=============================== 

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => { 
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);	