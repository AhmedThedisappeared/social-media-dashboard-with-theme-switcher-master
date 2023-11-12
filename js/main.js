$(document).ready(function(){
    if(localStorage.getItem("data-theme") ===""){
        localStorage.setItem("data-theme","white");
    } else if(localStorage.getItem("data-theme")==="white"){
        $(".toggle-switch").removeClass("bg-switch");
        $(".toggle-switch span").removeClass("toggle-open")
    } else if(localStorage.getItem("data-theme")==="dark") {
        $(".toggle-switch").addClass("bg-switch");
        $(".toggle-switch span").addClass("toggle-open");
    } 
    $(".toggle-switch").click(function(){
        if(localStorage.getItem("data-theme")==="white"){
            setDarkTheme();
            $(".toggle-switch").addClass("bg-switch");
            getColor();
            $(".toggle-switch span").addClass("toggle-open");
        } else {
            SetWhiteTheme();
            $(".toggle-switch").removeClass("bg-switch");
            getColor();
            $(".toggle-switch span").removeClass("toggle-open");
        }
    })
    getColor();
    $(".toggle-switch").hover(function(){
        if(localStorage.getItem("data-theme")==="white") {
            $(".toggle-switch").addClass("bg-switch");
        } else {
            $(".toggle-switch").css({"opacity":"0.5"});
        }
    },
    function(){
        if(localStorage.getItem("data-theme")==="white") {
            $(".toggle-switch").removeClass("bg-switch");
        } else {
            $(".toggle-switch").css({"opacity":"1"});
        }
    });
});
function getColor(){
    $(":root").css("--main-bg",localStorage.getItem("mainColor"));
    $(":root").css("--head-bg",localStorage.getItem("headColor"));
    $(":root").css("--card-bg",localStorage.getItem("CardColor"));
    $(":root").css("--text-gray",localStorage.getItem("grayColor"));
    $(":root").css("--text-color",localStorage.getItem("textColor"));
}
function SetWhiteTheme(){
    localStorage.setItem("data-theme","white");
    localStorage.setItem("mainColor","hsl(0, 0%, 100%)");
    localStorage.setItem("headColor","hsl(225, 100%, 98%)");
    localStorage.setItem("CardColor","hsl(227, 47%, 96%)");
    localStorage.setItem("grayColor","hsl(228, 12%, 44%)");
    localStorage.setItem("textColor","hsl(230, 17%, 14%)");
}
function setDarkTheme() {
    localStorage.setItem("data-theme","dark");
    localStorage.setItem("mainColor","hsl(230, 17%, 14%)");
    localStorage.setItem("headColor","hsl(232, 19%, 15%)");
    localStorage.setItem("CardColor","hsl(228, 28%, 20%)");
    localStorage.setItem("grayColor","hsl(228, 34%, 66%)");
    localStorage.setItem("textColor","hsl(0, 0%, 100%)");
}
