window.onload= function(){
	
	let start=document.getElementById("start");
	
	//make sure start is not null variable
	if(start)
		start.addEventListener('click',startGame);
	
	let boundaries = document.getElementsByClassName("boundary");
	
	// lost case inner html change
	let lost=' <div id="start">S</div>'+'\n'+
				'<div class="boundary youlose" id="boundary1"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div id="end">E</div>';
				
		// defining repeat string	
			let repeat=' <div id="start">S</div>'+'\n'+
				'<div class="boundary" id="boundary1"></div>'+'\n'+
				'<div class="boundary"></div>'+'\n'+
				'<div class="boundary"></div>'+'\n'+
				'<div class="boundary"></div>'+'\n'+
				'<div class="boundary"></div>'+'\n'+
				'<div id="end">E</div>';
	
	function setLose(){
		let mainDiv= document.getElementById("game");
		
		mainDiv.innerHTML=lost;
		
		let status=document.getElementById("status");
			status.innerHTML="you lost press on the keyboard to repeat";
		
		// to play again
		
		document.onkeypress = function () {

			//reassign value of divs
			mainDiv.innerHTML= repeat;
			status.innerHTML='Begin by moving your mouse over the "S".';
			
			// reassign value of start boundaries and add event listener
			start = document.getElementById("start");
			start.addEventListener('click',startGame);
			boundaries = document.getElementsByClassName("boundary");
			};
		
	}
	
	
	
	
	
	function startGame()
	{
		console.log('game started');
		
		
		start.removeEventListener('click',startGame); 
		
		boundaries[0].onmouseover=function()
			{
				setLose();
			}			
		boundaries[1].onmouseover=function()
			{
				setLose();	
			}			
		boundaries[2].onmouseover=function()
			{
				setLose();
			}			
		boundaries[3].onmouseover=function()
			{
				setLose();		
			}
		boundaries[4].onmouseover=function()
			{
				setLose();
			}
						
			
		
	}
}