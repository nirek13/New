document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    let currentTheme;

    // Define the themes array
    const themes = [
        'theme1', 'light', 'theme2', 'theme3', 'theme4',
        'theme5', 'theme6', 'theme7'
    ];

    // Retrieve the stored theme preference from localStorage
    const storedTheme = localStorage.getItem('theme');

    // Set the currentTheme variable based on the stored theme preference or default to 'theme1'
    if (storedTheme && themes.includes(storedTheme)) {
        currentTheme = storedTheme;
    } else {
        currentTheme = 'theme1';
    }

    // Apply the current theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    logo.addEventListener('click', () => {
        console.log('Button clicked!');

        // Find the index of the current theme and calculate the next theme
        let currentIndex = themes.indexOf(currentTheme);
        let newTheme = themes[(currentIndex + 1) % themes.length];

        // Update the currentTheme variable and store the new theme preference in localStorage
        currentTheme = newTheme;
        localStorage.setItem('theme', currentTheme);

        console.log(`Current theme: ${currentTheme}`);
        // Apply the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
    });
});
