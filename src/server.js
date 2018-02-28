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
		console.log("inside");
		if (err) throw err;
			console.log("Connected!");
			var sql = "INSERT INTO user (username, email, pwd) VALUES ('"+req.body.user+"','"+ req.body.email+"','"+ req.body.password +"');";
			console.log('swl', sql);
		con.query(sql, function (err, result) {
			if (err) {
				console.log('err',err);
				throw err
			};
				console.log("1 record inserted");
			});
		});
	});
app.post('/login', function (req, res){
	con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	var sql= "SELECT * FROM user WHERE email='"+ req.body.email+ "'AND pwd='" +req.body.password+	"';";
	console.log("value sql=", sql);
	con.query(sql, function (err, result) {
			if (err) {
				console.log('err', error);
				throw err;
			}
			console.log("fetched from database");
			console.log('res',result);
			if( result.length > 0) {
				res.send({code: 200, success: 'SUCCESS'});
			} else {
				res.send({code: 200, success: 'FAILURE'});

			}
			});
		}
		)});
	/*console.log(req.body);*/

app.listen(3000, function () {console.log('Example app listening on port 3000!')});