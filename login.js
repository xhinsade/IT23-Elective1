
    function handleLogin(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'xhinsade' && password === '1234') {
            alert('You Have log in Sucessfully!');
            window.location.href = 'home.html'; 
        } else {
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            notification.textContent = 'Invalid username or password.';
            notification.style.color = 'red';
        }
    }

