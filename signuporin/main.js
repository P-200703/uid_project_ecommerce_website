const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validate()
{
var a1=document.signup.name.value; 
var a2=document.signup.password.value;
var a3=document.signup.email.value;
var atpos = a3.indexOf("@");
var dotpos = a3.lastIndexOf(".");
var letters = /^[A-Za-z]+$/;
/*var passwrd= /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{3,40}$/;*/



if (a1 == "" || a2 == "" || a3 == "" ) 
{
alert("Please fill the details");
return false;
}


if((atpos < 1) || (dotpos-atpos<2))
{
alert('Please enter a valid E-Mail Address');
return false; 
}

if (!a1.match(letters))
{
  alert('Please enter only alphabets for  Name');
  return false;
}



if (a1.length<3 || a2.length<3)
{
  alert("Name and pasword should be greater than 3 alphabets");
  return false;
}

if(!a2.match(passwrd))
{
alert('The Password must have minimum 6 to 9 characters and must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
return false;
}


}

function validat()
{
	var a4=document.signin.password.value;
	var a5=document.signin.email.value;
	var atpos = a5.indexOf("@");
	var dotpos = a5.lastIndexOf(".");
	/*var passwrd= /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{3,40}$/;*/

	if (a4 == "" || a5 == "") 
		{
		alert("Please fill the details");
		return false;
		}

    if((atpos < 1) || (dotpos-atpos<2))
		{
		alert('Please enter a valid E-Mail Address');
		return false; 
		}
	if(!a4.match(passwrd) || a4.length < 6)
		{
		alert('The Password must have minimum 6 to 9 characters and must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
		return false;
		}	

}
