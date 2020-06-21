function supportOnClick (pageName)
{
	if (pageName===buttonToMainMenu){location.href="mainAplication.html";}
	
	
}
function resetFrom()
{
	alert();
	expanse.html('');
}

buttonToMainMenu.addEventListener( "click", function() { supportOnClick (buttonToMainMenu); } );
//resetButton.addEventListener( "click", function() { resetFrom(); } );