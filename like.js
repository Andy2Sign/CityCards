let like = document.getElementsByClassName("like");
	let ToggleSelected = function() {
	     this.classList.toggle("selected");  
	};
	
	for(let i = 0; i < like.length; i++) {
	    like[i].addEventListener('click', ToggleSelected, false);   
	};

