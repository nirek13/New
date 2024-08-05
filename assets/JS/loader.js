// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Example: Hide the loading spinner after 3 seconds
    setTimeout(function() {
        const loadingContainer = document.querySelector('.loading-container');
        loadingContainer.style.display = 'none';
    }, 3000);
});
