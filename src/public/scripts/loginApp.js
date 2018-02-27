
	var loginElement=document.getElementById('login');
	loginElement.onclick= function () {
		var elementToHide = document.getElementById('registrationBox');
		elementToHide.style.display = 'none';
		var elementToShow = document.getElementById('Popup2');
		elementToShow.style.display = 'block';
		var changeArrowColor =document.getElementsByClassName('upArrowClass2');
		changeArrowColor[0].className ='upArrow';
	}
	var registerElement= document.getElementById('register');
	registerElement.onclick= function () {
		var elementToHide = document.getElementById('Popup2');
		elementToHide.style.display = 'none';
		var elementToShow = document.getElementById('registrationBox');
		elementToShow.style.display = 'block';
		var changeArrowColor =document.getElementsByClassName('upArrow');
		changeArrowColor[0].className = 'upArrowClass2'; 
	}
