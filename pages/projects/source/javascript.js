console.log("\n%c%cWelcome to fema.one \ud83d\udc96\n","font-weight: bold; font-size: 20px; color: #ad6edd; text-shadow: 1px 1px 4px black","font-weight: bold; font-size: 50px; color: #ad6edd; text-shadow: 1px 1px 4px black");

function oldfema() {
    window.open('/pages/fema', '_blank');
}

function panjandrum() {
    alert('coming soon')
}

function youtubedl() {
    window.open('https://github.com/fema3832/python_youtube-dl', '_blank');
}

const checkbox = document.getElementById('switcher');
checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", 'dark');
    }
});

const currentTheme = localStorage.getItem('theme');

const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem("theme", "light");
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem("theme", 'dark');
}

checkbox.addEventListener('change', () => {
    let currentTheme = localStorage.getItem('theme'); // Retrieve saved them from local storage
    if (currentTheme ==='dark'){
        changeThemeToLight();
    }else{
        changeThemeToDark();
    }
});

if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);

    // If the current theme is dark, check the theme toggle
    if (currentTheme === "light") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}