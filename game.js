window.onload= function(){
	
	
	// time representation
	var seconds = 00; 
	var tens = 00; 
	var appendTens = document.getElementById("tens");
	var appendSeconds = document.getElementById("seconds");
	var Last = document.getElementById("Last");
	var Best = document.getElementById("Best");
	var Interval ;
	var time=1000;
	
	
	function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
	
	
	let start=document.getElementById("start");
	
	//make sure start is not null variable
	if(start)
		start.addEventListener('click',startGame);
	
	let boundaries = document.getElementsByClassName("boundary");
	
	
	let mainDiv= document.getElementById("game");
	
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
		
		//stop stopwatch
       clearInterval(Interval);
	   
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
	
	/// win case
	
	function setWon(){
		
		
	   
		mainDiv.innerHTML= repeat;// to prevent making lose case again
		
		document.body.style.background = "#88ff88";
		let status=document.getElementById("status");
			status.innerHTML="you WON press on the keyboard to repeat";
			
		// to play again
		
		document.onkeypress = function () {

			//reassign value of divs
			status.innerHTML='Begin by moving your mouse over the "S".';
			
			document.body.style.background = "white";
			// reassign value of start boundaries and add event listener
			start = document.getElementById("start");
			start.addEventListener('click',startGame);
			boundaries = document.getElementsByClassName("boundary");
			};
			
		
       clearInterval(Interval);
	   x=parseInt(seconds)+(parseFloat(tens)/100);
	   Last.innerHTML=x;
	   if(x<time)
	   {
		   time=x;
		   Best.innerHTML=time;
	   }	
		
	}
	
	
	
	
	
	function startGame()
	{
		console.log('game started');
		
		// stopwatch
		
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
		
	
		start.removeEventListener('click',startGame); 
		
		boundaries[0].onmouseover=function()
			{setLose();}			
		boundaries[1].onmouseover=function()
			{setLose();}			
		boundaries[2].onmouseover=function()
			{setLose();}			
		boundaries[3].onmouseover=function()
			{setLose();}			
		boundaries[4].onmouseover=function()
			{setLose();}			
			
						
						
		// win case
		let end=document.getElementById("end");
			end.onmouseover=function()
				{setWon();}
			
			
		
	}
}