

function demarrer(){
	
	show();
// Definie l'interval du temp pour chaques animation
	setTimeout(animA, 200);
	setTimeout(animB, 300);
	setTimeout(animC, 500);
	setTimeout(animD, 700);
	setTimeout(animE, 900);
	setTimeout(animF, 1100);
	setTimeout(animG, 1200);

	setTimeout(AnimateFrstCable, 1500);
	setTimeout(animBG, 4000);
	setTimeout(AnimateSecCable,  4050);
	setTimeout(animBG1, 4500);
	setTimeout(AnimateThrdCable, 4550);
	setTimeout(animBG2, 6000);
	setTimeout(AnimateFrthCable, 6050);
	setTimeout(animBG3, 7500);
	setTimeout(AnimateAllCells, 8500);	
	setTimeout(AnimateAllCells1, 9300);
	setTimeout(AnimateAllCells2, 10100);
	setTimeout(AnimateAllCells3, 10900);
	setTimeout(AnimateAllCells4, 11700);
	setTimeout(AnimateAllCells5, 11700);
	setTimeout(AnimateAllCells6, 12500);
	setTimeout(AnimateAllCells7, 13300);
	setTimeout(AnimateAllCells8, 14100);
	setTimeout(AnimateAllCells9, 14900);
	
	
}

function show() {
    var x = document.getElementById('hide');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
    }
}

function msg(){
	
}

/*
function hide() {
    var div = document.getElementById('content');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
};
*/
//appele la functiion animA
function animA(){
	Animation1();
	Animation2();
}
//appele la functiion animB
function animB(){
	Animation3();
	Animation4();
}
//appele la functiion animC
function animC(){
	Animation5();
	Animation6();
}
//appele la functiion animD
function animD(){
	Animation7();
	Animation8();
}
//appele la functiion animE
function animE(){
	Animation9();
	Animation10();
}
//appele la functiion animF
function animF(){
	Animation11();
	Animation12();
}
//appele la functiion animG
function animG(){
	Animation13();
	Animation14();
}

function animBG(){
	AnimationBg();
}

function animBG1(){
	AnimationBg1();
}

function animBG2(){
	AnimationBg2();
}

function animBG3(){
	AnimationBg3();
}

//Donner a l'animation1 des couleurs aleatoirs
function Animation1(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}	

//Donner a l'animation2 des couleurs aleatoirs

function Animation2(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}


//Give the animation3 a random colors

function Animation3(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}	
		
//Give the animation4 a random colors
		
function Animation4(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation5 a random colors

function Animation5(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}	
		
		
//Give the animation6 a random colors
		
function Animation6(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}


//Give the animation7 a random colors

function Animation7(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}	
	
	//Give the animation8 a random colors

function Animation8(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation9 a random colors

function Animation9(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation10 a random colors

function Animation10(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}
//Give the animation11 a random colors

function Animation11(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation12 a random colors

function Animation12(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation13 a random colors

function Animation13(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Give the animation14 a random colors

function Animation14(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

function AnimationBg(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

function AnimationBg1(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

function AnimationBg2(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

function AnimationBg3(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

function AnimateFrstCable(){

	var timeOut = 0;
 	// Get the number of columns in the first line
 		var arrayColonnes = document.getElementById("tr1").cells; 
 		var nb_colonnes = arrayColonnes.length;
 		for (var j = 0; j < nb_colonnes; j++) {
			
			setTimeout(changeColor,timeOut,arrayColonnes[j], "#76FF03");
			timeOut += 100;
			console.log(timeOut);
 		}
 	 	
}

function AnimateSecCable(){

	var timeOut = 0;
 	// Get the number of columns in the first line
 		var arrayColonnes = document.getElementById("tr2").cells; 
 		var nb_colonnes = arrayColonnes.length;
 		for (var j = 0; j < nb_colonnes; j++) {
			
			setTimeout(changeColor,timeOut,arrayColonnes[j], "#76FF03");
			timeOut += 100;
			console.log(timeOut);
 		}
 	 	
}

function AnimateThrdCable(){

	var timeOut = 0;
 		// Get the number of columns in the first line
 		var arrayColonnes = document.getElementById("tr3").cells; 
 		var nb_colonnes = arrayColonnes.length;
 		for (var j = 0; j < nb_colonnes; j++) {
			
			setTimeout(changeColor,timeOut,arrayColonnes[j], "#76FF03");
			timeOut += 100;
			console.log(timeOut);
 		}
 	 	
}

function AnimateFrthCable(){

	var timeOut = 0;
		// Get the number of columns in the first line
 		var arrayColonnes = document.getElementById("tr4").cells; 
 		var nb_colonnes = arrayColonnes.length;
 		for (var j = 0; j < nb_colonnes; j++) {
			
			setTimeout(changeColor,timeOut,arrayColonnes[j], "#76FF03");
			timeOut += 100;
			console.log(timeOut);
 		}
 	 	
}


 //Animate cells from left to right

function AnimateAllCells(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
 	
}

//Animate cells from left to right
function AnimateAllCells1(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells2(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells3(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells4(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells5(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells6(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells7(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells8(){
	var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}

//Animate cells from left to right
function AnimateAllCells9(){
var tab=document.getElementsByTagName("body");
	var r = Math.floor(Math.random() * 255),
	   g = Math.floor(Math.random() * 255),
	   b = Math.floor(Math.random() * 255),
	   a = (Math.random() * 1).toFixed(3);
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.background="rgba(" + r + "," + g + "," + b + "," + a + ")";
	}
}



 //Initialize default colors
 
function initColors(){
	// Get the rows of table
	var arrayLignes = document.getElementByTagName("body").rows; 
	var nb_lignes = arrayLignes.length;
	var timeOut = 0;
 	for (var i = 0; i < nb_lignes; i++) {
		// Get the number of columns in the first line
 		var arrayColonnes = arrayLignes[i].cells; 
 		var nb_colonnes = arrayColonnes.length;
		for (var j = 0; j < nb_colonnes; j++) {
			arrayColonnes[j].style = "";
		}
 	}
}

function changeColor(element, color){
	element.style.background = color;
}
