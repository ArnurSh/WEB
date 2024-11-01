const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle the sidebar open class
    if (sidebar.classList.contains('open')) {
        main.style.marginLeft = '250px'; // Push the main content
    } else {
        main.style.marginLeft = '0'; // Reset the main content
    }
});