//Login button handler redirecting from homepage to login/signup form page

// const login = document.getElementById('loginBtn');
// console.log(login);

function replaceDocument() {
    console.log('button was pressed')
    document.location.replace('/profile');
}

document
.getElementById('loginBtn')
.addEventListener('click', replaceDocument);