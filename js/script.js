function init(){
 
  //Show an alert box with contents of the text field
  function nameAlert(){
   
      //Obtain input
      var input = document.getElementById('entryinput').value;
      alert("Fatimah Syed:" + input); 
	 
      //Obtain output
      var output = document.getElementById('textoutput');
      output.innerHTML = input;
 }
 
 //Configuring the button
 var button = document.getElementById('entrybutton');
 button.addEventListener('click', nameAlert); 
}
window.addEventListener('load', init);

