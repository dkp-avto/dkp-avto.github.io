var ioscookieCheck = 2 == document.cookie.split("ios=true").length;
if (ioscookieCheck) {
    hideElementsOnMobileApps();

    // remove this part once app approved
    // var pricingmhac = document.getElementsByClassName("pricing_main")[0];
    // if (pricingmhac != undefined) {
    //     document.getElementsByClassName("pricing_main")[0].style.display = "none";
    //     document.getElementsByClassName("what_we_check")[0].style.display = "none";
    //     document.getElementsByClassName("get-history-check")[0].style.display =
    //         "none";
    //     document.getElementById("important-checks").style.display =
    //         "none";

    // }
}

var cookieCheck = 2 == document.cookie.split("app=true").length;
if (cookieCheck) {
    hideElementsOnMobileApps();
    var mobileShow = document.getElementById("mobile-app-show"),
        mobileShowHr = document.getElementById("mobile-app-show-hr"),
        appLi = document.getElementById("app-li");
    (appLi.style.display = "none"),
    (mobileShow.style.display = "none"),
    (mobileShowHr.style.display = "none");
}

function hideElementsOnMobileApps() {
    var hideOnMobileApp = document.querySelectorAll(".nsmp");
    for (var i = 0; i < hideOnMobileApp.length; i++) {
        hideOnMobileApp[i].style.display = "none";
    }
}