function showRegister() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('register-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = {
        name: document.getElementById('register-name').value,
        phone: document.getElementById('register-phone').value,
        email: document.getElementById('register-email').value.toLowerCase(),
        password: document.getElementById('register-password').value
    };
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const errorElement = document.getElementById('register-error');
    
    if(users.some(u => u.email === user.email)) {
        errorElement.textContent = 'Este correo ya está registrado';
        return;
    }
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso!');
    showLogin();
    document.getElementById('registerForm').reset();
    errorElement.textContent = '';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.toLowerCase();
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const errorElement = document.getElementById('login-error');
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if(user) {
        window.location.href = 'bienvenido.html';
    } else {
        errorElement.textContent = ' datos incorrectos';
    }
});


