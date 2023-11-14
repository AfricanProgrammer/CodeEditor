// You should javascript basics to know to master this.Also how the DOM Works

function run(){
    let htmlBox = document.getElementById("html-box");
    let cssBox = document.getElementById("css-box");
    let jsBox = document.getElementById("js-box");
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlBox.value + "<style>" + cssBox.value + "</style>";
    output.contentWindow.eval(jsBox.value);
        
}
function mode(){
    var elementHtml = document.getElementById("html-box");
    var elementCss = document.getElementById("css-box");
    var elementJs = document.getElementById("js-box");
    elementHtml.classList.toggle("dark-mode");
    elementCss.classList.toggle("dark-mode");
    elementJs.classList.toggle("dark-mode");

    // Toggle functionality must be used.

}







