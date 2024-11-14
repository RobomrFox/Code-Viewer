//Jquery
$(document).ready(function () {
    function update() {
        const htmlCode = $("#html_area").val();
        const cssCode = $("#css_area").val();
        const jsCode = $("#js_area").val();
        const output = $("#output")[0];

        $(output.contentDocument.body).html(htmlCode + "<style>" + cssCode + "</style>");
        output.contentWindow.eval(jsCode);
    }
    $("#html_area, #css_area, #js_area").on("keyup", update);
});


//JavaScript
function darkMode() {
    const colorChange = document.body;
    //toggles between light and dark colors
    colorChange.classList.toggle("dark-mode");

    //changing span Text and image icon
    if (colorChange.classList.contains("dark-mode")) {
        console.log(colorChange.getElementsByTagName("span")[0]);

        document.getElementById("change").innerText = "Light Mode";

        document.getElementById("changeMode").getElementsByTagName("img")[0].src = "./assests/1_Icons/light-mode.svg";
    } else {
        //changing back the icon and innerText for Light Mode
        document.getElementById("change").innerText = "Dark Mode";

        document.getElementById("changeMode").getElementsByTagName("img")[0].src = "./assests/1_Icons/dark-mode.svg";
    }
}