function loadAdmin() {
    fetch('admin.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').innerHTML = data;
            initializeAdminPage();
        });
}
