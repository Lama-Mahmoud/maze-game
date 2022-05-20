window.onload= function(){
	
	let start=document.getElementById("start");
	
	//make sure start is not null variable
	if(start)
		start.addEventListener('click',startGame);
	
	let boundaries = document.getElementsByClassName("boundary");
	
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
}