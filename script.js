const btn = document.querySelector("button");

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', () => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (firstName.value.length == 0) {
        firstName.classList.add('error');
        firstName.setAttribute('placeholder', '');
        document.querySelector('.first-name p').textContent = "First Name cannot be empty";
        document.querySelector('.first-name img').style.display = 'initial';
    }

    if (lastName.value.length == 0) {
        lastName.classList.add('error');
        lastName.setAttribute('placeholder', '');
        document.querySelector('.last-name p').textContent = "Last Name cannot be empty";
        document.querySelector('.last-name img').style.display = 'initial';
    }
    
    if (email.value.length == 0) {
        email.classList.add('error');
        email.setAttribute('placeholder', '');
        document.querySelector('.email p').textContent = "Email cannot be empty";
        document.querySelector('.email img').style.display = 'initial';
    } else if (emailRegExp.test(email.value))
        ;
    else {
        email.classList.add('error');
        document.querySelector('.email p').textContent = "Looks like this is not an email";
    }
    
    if (password.value.length == 0) {
        password.classList.add('error');
        password.setAttribute('placeholder', '');
        document.querySelector('.password p').textContent = "Password cannot be empty";
        document.querySelector('.password img').style.display = 'initial';
    }
});
