function featuresOnClick() {
    if (document.getElementById("features").style.display === "none") {
        document.getElementById("features").style.display = "block"
        document.getElementById("company").style.display = "none"
    } else {
        document.getElementById("features").style.display = "none"
    }
}

function companyOnClick() {
    if (document.getElementById("company").style.display === "none") {
        document.getElementById("company").style.display = "block"
        document.getElementById("features").style.display = "none"
    } else {
        document.getElementById("company").style.display = "none"
    }
}

function clearFocus() {
    document.getElementById("features").style.display = "none"
    document.getElementById("company").style.display = "none"
}

function openMenu() {
    document.getElementById("body").className = "menu-open";
}

function closeMenu() {
    document.getElementById("menu").animate([{ right: "0px" }, { right: "-500px" }], { duration: 600, iterations: 1 });
    setTimeout(close, 400);
}

function close() {
    document.getElementById("body").className = "";
}