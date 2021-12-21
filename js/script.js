$(function(){
    $("#navbarToggle").blur(function(event){
        var screenWith = window.innerWidth;
        if(screenWith < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function(global){
    var dc = {};

    var homeHtml = "../snippets/home-snippet.html";

    //Convinience function for inserting innnerHTML for 'select'
    var insertHtml = function (selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    // Show loading incon inside element identified by 'selector'.
    var showLoading = function (selector){
        var html = "<div class='text-center'>";
        html += "<img src='../images/spinner.svg'></div>";
        insertHtml(selector, html);
    };

    //On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function(event){

        // On first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml, function(responseText){
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    });
    global.$dc = dc;
})(window);