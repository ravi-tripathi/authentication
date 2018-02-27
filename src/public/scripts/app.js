	var createAccountButtonEl= document.getElementById('createAcoountBtn');
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
		};

			
	}

function createAccount (payload) {
	fetch('/createAccount', {
		method: 'post',
		headers: {
			'Content-Type':'application/json; charset=utf-8'
		},
		 body: JSON.stringify(payload)});

}