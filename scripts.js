function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Placeholder for actual validation logic
    if (username === "admin" && password === "iitp") {
        // If credentials are valid, redirect to home.html
        window.location.href = 'home.html';
        return false; // Prevent default form submission
    } else {
        // If credentials are invalid, show an error message
        alert('Invalid username or password.');
        return false; // Prevent default form submission
    }
}




