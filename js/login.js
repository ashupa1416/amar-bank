document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'AsifUpoma1416@gmail.com' && password === '1416') {
        window.location.href = 'bank.html';

    }
    else {
        alert('Invalid Password. Ei Chor, Ekhane ki? Bank dakati korbi naki?')
    }
})