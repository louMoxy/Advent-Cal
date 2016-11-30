var currentDate = 20;

document.addEventListener('DOMContentLoaded', function() {
	var modal = document.getElementById("overlay"),
		boxes = document.getElementsByClassName("boxes");
	//Create 25  numbered li for the doors only one call to dom with fragment
	var adventdoors = document.getElementById("adventdoors"),
		fragment = document.createDocumentFragment();
	for (var i = 0; i <25; i++) {
		var shadow = document.createElement("div");
		var door = document.createElement("div");
		door.className = "door";
		shadow.className = "shadow";
		shadow.appendChild(door);
		door.innerHTML = "<p>" + (i + 1) + "</p>";
		var elementID = "door_" + i;
		door.id=elementID;
		fragment.appendChild(shadow);
	}
	adventdoors.appendChild(fragment);

	//make list items clickable if its today or less than today
	var lis=document.getElementById('adventdoors').getElementsByClassName('door');
    for(i=0;i<lis.length;i++) {
        if (i < 20) {
       	lis[i].classList.add("active");
    	lis[i].onclick=clickable;
	}
    }
	

    function clickable(){
	var doorNumber = this.id.replace( /^\D+/g, '');
	var boxId = "box_" + doorNumber;
	document.getElementById(boxId).classList.add("active");
	modal.classList.add("show");
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.classList.remove("show");
	        for (var i =0; i<boxes.length; i++){
	       		boxes[i].classList.remove("active");
	       }
	    }
	}
}, false);
