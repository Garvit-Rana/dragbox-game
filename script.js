console.log('script loaded');





//document.addEventListener('keypress',function(){
//console.log(event.key)
//var boxRect=box.getBoundingClientRect();
//if (event.key=='d'&& boxRect.x+boxRect.width< window.innerWidth)
//{

//box.style.left=(boxRect.x+20)+'px';
//}
//if (event.key=='w'&& boxRect.y+boxRect.height< window.innerHeight){

//box.style.top=(boxRect.y+20)+'px';
//}


//});

var box=document.querySelector('#box');


function catchme(){
	function random(upper,lower){
	return Math.floor((Math.random()*(upper-lower))+ lower);

	}
var movement;
box.addEventListener('mouseover',function(){

//let mouseX=event.clientX;
//let mouseY=event.clientY;

clearInterval(movement);
let boxX=box.getBoundingClientRect().x;
let boxY=box.getBoundingClientRect().y;

let newX=random(0,window.innerWidth);
let newY=random(0,window.innerHeight);
let moveX=1;
let moveY=1;
if (newX<boxX){
	moveX=-1;
}
if (newY<boxY)
{	moveY=-1;
}
 movement=setInterval(function(){
boxX+=moveX;
boxY+=moveY;
box.style.left=boxX+'px';
box.style.top=boxY+'px';

},10);

//box.style.left=newX+'px';
//box.style.top=newY+'px';


});

}
catchme();
