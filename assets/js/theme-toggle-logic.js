// Function to handle the actual theme switching and icon updates
window.toggleTheme = function() {
    // Read the current theme from the HTML attribute
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    console.log('TOGGLE: Current theme read from HTML:', currentTheme);


    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';


    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    console.log('TOGGLE: Writing new theme to HTML:', newTheme);

    // Use 'theme' key for custom script compatibility
    localStorage.setItem('theme', newTheme);
    console.log('TOGGLE: HTML data-theme attribute is now:', document.documentElement.getAttribute('data-theme'));

    // Update icon visibility
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.querySelector('.sun').style.display = newTheme === 'dark' ? 'block' : 'none';
        toggle.querySelector('.moon').style.display = newTheme === 'dark' ? 'none' : 'block';
    }
};

// Logic to run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine the initial theme (from localStorage or system preference)
    let theme = localStorage.getItem('theme');

    // Fall back to system preference if no saved choice
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // 2. Apply the initial theme to the HTML element
    document.documentElement.setAttribute('data-theme', theme);

    // 3. Find the toggle button
    const toggle = document.getElementById('theme-toggle');

    if (toggle) {
        // 4. Update the icon state to match the initial theme
        toggle.querySelector('.sun').style.display = theme === 'dark' ? 'block' : 'none';
        toggle.querySelector('.moon').style.display = theme === 'dark' ? 'none' : 'block';

        // 5. CRITICAL: Attach the click listener
        toggle.addEventListener('click', window.toggleTheme);
    }
});