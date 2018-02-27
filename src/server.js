var express = require('express')
var app = express();

var mysql = require('mysql');

var bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6394516199mySQL",
  database: "auth"
});

app.post('/createAccount', function (req, res) {

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO user (username, email, pwd) VALUES ("+req.body.user+","+ req.body.email+","+ req.body.password +")";
		con.query(sql, function (err, result) {
			if (err) throw err;
				console.log("1 record inserted");
			});
		});
		console.log(req.body);
	})

app.listen(3000, function () {console.log('Example app listening on port 3000!')});