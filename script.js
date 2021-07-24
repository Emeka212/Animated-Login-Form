// ---------------------------------------------
// for the login and sign up page with forgotten password
// ---------------------------------------------
var switch_signin = document.getElementById('switch_signin_interface');
var switch_signup = document.getElementById('switch_signup_interface');
var main_container = document.getElementById('main_container');
var pass_reset_section = document.querySelector('.pass_reset_section');

// for the sign up btn, change interface
function signup_toggle() {
    main_container.classList.add("right_panel_active");
}
switch_signup.addEventListener("click", signup_toggle, false);

// for the sign in btn(login), change interface
function signin_toggle() {
	main_container.classList.remove("right_panel_active");
}
switch_signin.addEventListener("click", signin_toggle, false);

// for show and hide of password reset section/box
function close_Fpass_box() {
	pass_reset_section.style.display = "none";
}
function open_Fpass_box() {
	pass_reset_section.style.display = "flex";
}




/*----------------------------------------------------
for validating the signup form(registration)
----------------------------------------------------*/
var login_error_msg = document.querySelector(".login_error_msg");
var signup_error_msg = document.querySelector(".signup_error_msg");
function validate_signup_form() {
	var Uname = document.forms['signup_form']['signup_Uname'].value;
	var Email = document.forms['signup_form']['signup_Email'].value;
	var Pass = document.forms['signup_form']['signup_Pass'].value;
    if (Uname != "" && Email != "" && Pass != "") {
        signup_error_msg.innerHTML = "<span>Hurry! your account have been created successfuly</span>";
		signup_error_msg.style.display = "block";
		signup_error_msg.style.backgroundColor = "purple";
		alert("account created successfuly");
    }
	else if (Uname == "") {
		signup_error_msg.innerHTML = "<span>Your Username is Required</span>";
		signup_error_msg.style.display = "block";
		signup_error_msg.style.backgroundColor = "darkred";
		return false;
	}
	else if (Email == ""){
        signup_error_msg.innerHTML = "<span>Your Email is Required</span>";
		signup_error_msg.style.display = "block";
		signup_error_msg.style.backgroundColor = "darkred";
		return false;
	}
	else if (Pass == ""){
        signup_error_msg.innerHTML = "<span>Your Password is Required</span>";
		signup_error_msg.style.display = "block";
		signup_error_msg.style.backgroundColor = "darkred";
		return false;
	}
}






//----------------------------------------------
//for the dashboard home page
//-----------------------------------------------


