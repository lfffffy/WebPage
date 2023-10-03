// script.js
var background = document.getElementById("background");
var title = document.getElementById("title");
var footer = document.querySelector("footer");

function adjustFontSize() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
        title.style.fontSize = "40px";
    } else if (windowWidth <= 1024) {
        title.style.fontSize = "50px";
    } else {
        title.style.fontSize = "60px";
    }
}

adjustFontSize();

window.onresize = function (event) {
    adjustFontSize();
};

function updateTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        background.style.backgroundImage = "url(dark.png)";
        title.style.color = "#FFFFFF";
        footer.style.color = "#FFFFFF";
    } else {
        background.style.backgroundImage = "url(day.png)";
        title.style.color = "#000000";
        footer.style.color = "#000000";
    }
}

updateTheme();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip.useragentinfo.com/json', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var ipAddress = response.ip;
        var province = response.province;
        var city = response.city;
        var area = response.area;

        var ipAddressElement = document.getElementById('ip-address');
        ipAddressElement.innerText = 'Your IP：' + ipAddress + '\nYour Address：' + province + city + area;
    }
};
xhr.send();
