//step:-1:

document.getElementById('button-submit').addEventListener('click', function () {

    // step 2 get the gmail address:

    const emailField = document.getElementById('user-email');


    //always remember to use .value to get text an input field
    const email = emailField.value;
    console.log(email);

    //get password:-

    const passwordField = document.getElementById('user-password');

    const password = passwordField.value;
    console.log(password);

    //Danger: do not verify email and password on the client side


    //chack valid user or not :-

    if (email === 'ekram@gmail.com' && password === 'whoiam') {
        window.location.href = 'index.html'
    }
    else {
        alert('you are fake user');
    }





})