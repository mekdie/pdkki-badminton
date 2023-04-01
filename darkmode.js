const html = document.querySelector("html");
const toggleEl = document.querySelector(".toggle");
const table = document.querySelector(".table");

// Check with localStorage which theme to apply
function setTheme() {
    if (localStorage.getItem("theme") === "light") {
        changeThemeTo("light");
    } else {
        changeThemeTo("dark");
    }
}

// Change theme with it's name in params
function changeThemeTo(theme = "default") {
    if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        html.classList.add("dark");

        table.classList.add("table-dark");

        toggleEl.innerHTML = "Light mode";
        toggleEl.classList.add("btn-dark");
    } else {
        localStorage.setItem("theme", "light");

        table.classList.add("table-light");

        toggleEl.innerHTML = "Dark mode";
        toggleEl.classList.add("btn-light");
    }
}

// change the light to dark here
toggleEl.addEventListener("click", (e) => {
    //change to light
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");

        table.classList.add("table-light");
        table.classList.remove("table-dark");
        e.target.innerHTML = "Dark mode";

        toggleEl.classList.remove("btn-dark");
        toggleEl.classList.add("btn-light");
    }
    //change to dark
    else {
        html.classList.add("dark");

        table.classList.remove("table-light");
        table.classList.add("table-dark");
        e.target.innerHTML = "Light mode";

        toggleEl.classList.remove("btn-light");
        toggleEl.classList.add("btn-dark");
    }
    // html.classList.toggle("dark")
    if (localStorage.getItem("theme") === "light") {
        changeThemeTo("dark");
    } else {
        changeThemeTo("light");
    }
});

setTheme();
