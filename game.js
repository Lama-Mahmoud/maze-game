hwm
crazy8
jtbd
combinatorics
affinity map


	let lost=' <div id="start">S</div>'+'\n'+
				'<div class="boundary youlose" id="boundary1"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div class="boundary youlose"></div>'+'\n'+
				'<div id="end">E</div>';
	
	function setLose(){
		let mainDiv= document.getElementById("game");
		mainDiv.innerHTML=lost;
				
		start.removeEventListener('click',startGame);
		
	}
	
	
	
	
	function startGame()
	{
		console.log('game started');
	
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