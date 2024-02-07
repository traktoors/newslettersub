const txt_error = document.getElementById('error-email');
const input_email = document.getElementById('email');
const btn_signup = document.getElementById('signup');
const txt_email = document.querySelector('.signup-success a');
const main_group = document.querySelector('main');
const success_group = document.querySelector('.signup-success');
const btn_dismiss = document.getElementById('dismiss');

function CheckIfValid(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(re);
}

function ChangeGroups(){
    main_group.classList.toggle('none-display');
    success_group.classList.toggle('none-display');
}

btn_signup.addEventListener('click', function() {
    var email = input_email.value;
    if(CheckIfValid(email)){
        txt_email.innerHTML = email;
        txt_error.classList.remove('error-email-active');
        ChangeGroups();
    }
    else{
        txt_error.classList.add('error-email-active');
    }
});

btn_dismiss.addEventListener('click', function() {
    ChangeGroups();
});