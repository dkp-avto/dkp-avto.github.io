var navButton = document.getElementById("navigon"),
    sidebar = document.getElementById("sidebar"),
    navigonLines = document.getElementById("navigon-lines"),
    navigonx = document.getElementById("navigon-x");

function removeActiveTab() { for (var e = document.getElementsByClassName("side-bar-active"), t = 0; t < e.length; t++) e[t].classList.remove("side-bar-active") }
sidebar = document.getElementById("sidebar"), navButton.addEventListener("click", (function() { checktype = sidebar.getAttribute("data-type"), "close" === checktype ? (sidebar.style.transform = "translate(0px)", sidebar.setAttribute("data-type", "open"), sidebar.style.zIndex = "1", navigonLines.style.display = "none", navigonx.style.display = "block") : (sidebar.style.transform = "translate(-1000px)", sidebar.setAttribute("data-type", "close"), navigonLines.style.display = "block", navigonx.style.display = "none") })), window.location.href.indexOf("login") > -1 ? (removeActiveTab(), document.getElementById("sidebar_your_checks").classList.add("side-bar-active")) : window.location.href.indexOf("samplereport") > -1 ? (removeActiveTab(), document.getElementById("sidebar_sample_report").classList.add("side-bar-active")) : window.location.href.indexOf("support") > -1 ? (removeActiveTab(), document.getElementById("sidebar_customer_support").classList.add("side-bar-active")) : document.getElementsByClassName("threesqureboxmainouthermaonh4").length > 0 ? (removeActiveTab(), document.getElementById("sidebar_home").classList.add("side-bar-active")) : removeActiveTab();