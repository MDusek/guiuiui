function get(id){
	return document.getElementById(id);
}

function changeToRed(element){
	element.style.background = "#FF0000";
	element.style.boxShadow = "#D60000";
}


var letzterScreen = 1;


function screenForward(){
	var naechsterScreen = letzterScreen+1;

	var letztesDiv = document.getElementById("screen"+letzterScreen);
	var naechstesDiv = document.getElementById("screen"+naechsterScreen);
	console.log("naechster: " + naechstesDiv + " \nhat ID " + "screen"+naechsterScreen);
	letztesDiv.className = "screen";
	naechstesDiv.className = "screen active";

	var letztesRegister = document.getElementById("register"+letzterScreen);
	var naechstesRegister = document.getElementById("register"+naechsterScreen);

	letztesRegister.className = "register animated";
	naechstesRegister.className = "register animated active ";

	letztesRegister = naechstesRegister;

	letzterScreen = naechsterScreen;
}

function clickedOnRegister(nr){

	var naechstesRegister = get("register" + nr);
	var naechstesDiv = get("screen" + nr);

	naechstesRegister.className = "register animated active";
	naechstesDiv.className = "screen active";

	var letztesRegister = get("register" + letzterScreen);
	var letztesDiv = get("screen" + letzterScreen);

	//schnelle version wäre z.b.
	//get("register1").className = "randomShit";
	//get("register1").style.background = "white";

	letztesRegister.className = "register animated";
	letztesDiv.className = "screen";

	letzterScreen = nr;
}