let taskbar = document.getElementById('taskbar');
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener('click', function() {
    if (startmenu.style.bottom === "50px") {
        startmenu.style.bottom = "-650px";
    } else {
        startmenu.style.bottom = "50px";
    }
});

