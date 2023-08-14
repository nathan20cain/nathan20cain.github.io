function toggleStyleSheet(){
    const element = document.getElementById("mainStyleSheet");
    if(element.getAttribute('href') == 'style.css') {
        element.setAttribute('href', 'style2.css');
        localStorage.setItem("name", 'style2.css');
    }
    else if(element.getAttribute('href') == 'style2.css'){
        element.setAttribute('href', 'style.css');
        localStorage.setItem("name", 'style.css');
    }
}

window.onload = function(){
    const element = document.getElementById("mainStyleSheet"); 
    current = localStorage.getItem("name");
    if(current == null) {
        localStorage.setItem("name", 'style.css');
        current = localStorage.getItem("name");
    }
    element.setAttribute('href', current);
}
