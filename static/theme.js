document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme");
    
    themeButton.addEventListener("click", () => {
        const currentThemeStatus = themeButton.innerHTML;
    
        if(currentThemeStatus == "☀ Light") {
            // switch to dark mode
            document.documentElement.classList.add("dark");
            themeButton.innerHTML = `<span class="darkModeButton">&#9790;</span> Dark`;
        } else {
            // switch to light mode
            document.documentElement.classList.remove("dark");
            themeButton.innerHTML = "&#9728; Light";
        }
    });
});
