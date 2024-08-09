document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('password-prompt').style.display = 'block';
});

document.getElementById('submit-password').addEventListener('click', function() {
    var password = document.getElementById('password-input').value;
    if (password === 'chandal') {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('background').style.display = 'none';
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('background-music').play();
    } else {
        alert('Incorrect Password!');
    }
});
