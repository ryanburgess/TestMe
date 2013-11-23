function read_cookie ( cookie_name ){
    "use strict";
    var results = document.cookie.match ( "(^|;) ?" + cookie_name + "=([^;]*)(;|$)" );
    if (results){
        return ( unescape ( results[2] ) );
    }else{
        return null;
    }
}

var testMe = {
    init: function(config){
        "use strict";

        var _gaq = [];//for localhost

        // Get the running experiments
        for (var experiments in config) {
            experiments = config;
        }

        for (var experimentName in experiments) {
            var choice;
            var variance = experiments[experimentName];

            // check if cookie exists for experiment name
            var currentlySet = read_cookie(experimentName);
            if(currentlySet != null){
                choice = currentlySet;
            }else{
                // choose a random variance number
                choice = Math.floor(Math.random()*experiments[experimentName].length);
                // set cookie
                document.cookie = experimentName + "=" + choice;
            }
            var chosenVariance = variance[choice];
            var chosenVarianceID = document.getElementById(chosenVariance);
            // Show chosen variance
            if(chosenVariance != null){
                chosenVarianceID.style.display="inline";
            }

            // Pass Google Analytics Event Tracking for item viewed
            _gaq.push(["_trackEvent", experimentName, chosenVariance, "Viewed"]);

            // if test variance is a link add click event
            /*if(chosenVarianceID.nodeName && (chosenVarianceID.nodeName.toLowerCase() === 'a')){
                chosenVarianceID.className = document.getElementById(chosenVariance).className + " a-b-click-event";
                chosenVarianceID.setAttribute("data-category", experimentName);
                chosenVarianceID.setAttribute("data-action", chosenVariance);
                chosenVarianceID.setAttribute("data-label", "Clicked");
            }*/
        }
    }
};