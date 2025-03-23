function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

// Load Navbar & Footer
loadComponent("navbar-container", "navbar.html");
loadComponent("footer-container", "footer.html");