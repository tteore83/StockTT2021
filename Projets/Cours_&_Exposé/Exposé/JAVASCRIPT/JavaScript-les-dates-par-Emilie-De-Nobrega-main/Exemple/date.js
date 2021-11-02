// Date et heure entiere sur fuseau horaire
  //let today = new Date();
 // document.write(today);
  
  

// format rapide pour date/heure actuelle
let ladate = new Date();
document.write("Date au format local : " + ladate.toLocaleString()) ;


//document.write("Date au format local : " + ladate.toLocaleDateString('en-UK')) ;

//Date du jour , format Année Mois Jour , numéraire
//let a = new Date();
//let date = a.getDate() + "-" + (a.getMonth()+1) +'-' + a.getFullYear();
//document.write('Nous sommes le ' + date);


//Date du jour, sur deux chiffres    
//let aB = new Date();
//let date = ('0' + (aB.getDate())) . slice (-2);
//document.write(date);



//affiche l'heure actuelle, format Heure Minutes Secondes
//let b = new Date();
//let hours = b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds();
//document.write('Actuellement, il est ' + hours + ' ,à la seconde prêt ;)');



//Affiche la date et l'heure actuelle
/**let c = new Date();
let date = c.getDate() + '-' + (c.getMonth()+1) +'-' +  c.getFullYear();
let hours = c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds();
let fullDate = date+' '+hours;
document.write (fullDate);
*/


//Différence entre l'heure GMT et l'heure locale:  (fuseau horaire)
/**let minutes = new Date()
let gap = minutes.getTimezoneOffset();
document.write(gap);
*/



// Modification de la date
//var newdate=new Date()
//newdate.setDate(26)
//document.write("Date modifiée : " + "nous sommes à présent le ");
//récuperation de la date du jour, + nvlle date ajout de mois + nvll année +10
//document.write(newdate.getDate()+"/"+(newdate.getMonth()+2)+"/"+(newdate.getFullYear()+10));



/**Chronomètre
//document.getElementById(form).style.display = none;
///Pour afficher la division :
document.getElementById(form).style.display = block;
let startTime = 0;
let start = 0;
let end = 0;
let diff = 0;
let timerID = 0;


window.onload = chronoStart;

function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	let msec = diff.getMilliseconds();
	let sec = diff.getSeconds();
	let min = diff.getMinutes();
	let hr = diff.getHours()-1;
	if (min < 10){
		min = "0" + min;
	}
	if (sec < 10){
		sec = "0" + sec;
	}
	if(msec < 10){
		msec = "00" +msec;
	}
	else if(msec < 100){
		msec = "0" +msec;
	}
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec;
	timerID = setTimeout("chrono()", 10);
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop";
	document.chronoForm.startstop.onclick = chronoStop;
	document.chronoForm.reset.onclick = chronoReset;
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop";
	document.chronoForm.startstop.onclick = chronoStop;
	document.chronoForm.reset.onclick = chronoReset;
	start = new Date()-diff;
	start = new Date(start);
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000";
	start = new Date();
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "0:00:00:000";
	document.chronoForm.startstop.onclick = chronoStart;
}
function chronoStop(){
	document.chronoForm.startstop.value = "start";
	document.chronoForm.startstop.onclick = chronoContinue;
	document.chronoForm.reset.onclick = chronoStopReset;
	clearTimeout(timerID);
}
*/