	var createAccountButtonEl= document.getElementById('createAcoountBtn');
	var loginButtonEl= document.getElementById('loginBtn');
	//on Click create Account Button: Client side 
	createAccountButtonEl.onclick=function () {
		var usernameEl= document.getElementById('userName');
		var NameOfUser= usernameEl.value;
		var emailEl= document.getElementById('emailID');
		var EmailOfUser= emailEl.value;
		var passUser= document.getElementById('password');
		var PassOfUser= passUser.value;
		var confirmPass= document.getElementById('passwordAgain');
		var confirmPassword = confirmPass.value;

		if (NameOfUser && EmailOfUser && PassOfUser && (PassOfUser === confirmPassword)){
			var objectToBeSent= {
				user: NameOfUser,
				email: EmailOfUser, 
				password: PassOfUser
			}
			console.dir(objectToBeSent);
			createAccount(objectToBeSent);
			console.log("crossed");
		};
			
	};

function createAccount (payload) {
	fetch('/createAccount', {
		method: 'post',
		headers: {
			'Content-Type':'application/json; charset=utf-8'
		},
		 body: JSON.stringify(payload)});

}


var loginbtn = document.getElementById('loginBtn');
loginbtn.onclick = function() {
	var email= document.getElementById('emails').value;
	var passWord = document.getElementById('password1').value;
	var objCollection = {
		email: email,
		password: passWord
	}
	verifyLogin(objCollection);
};

function verifyLogin (payload) {
	fetch('/login', {
		method: 'post',
		headers: {
			'Content-Type':'application/json; charset=utf-8'
		},
		 body: JSON.stringify(payload)}).then( function (res) {
		 	return 	res.json()
		 }).then(function (resp) {
		 	console.log('final', resp)
		 	if(resp.success === 'SUCCESS') {
		 		alert('Logged in !!');
		 	} else  {
		 		alert('Not able to login !!');
		 	}
		 }).catch( function  (e) {
		 	console.log('Error', e);
		 });
}