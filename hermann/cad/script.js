

var config = {
    items: null,
    itemIndex: 0,
    pageDelay: 10000,
    perPage: null,
    redirect: null
};



function dynamicResize() {
    var availableHeight = $(window).innerHeight();
    var availableWidth = $(window).innerWidth();

    // minimum
    var targetHeight = 250;
    var targetWidth = 300;

    // adapt
    if (availableHeight > 249 && availableWidth > 299) {
        if ((availableWidth / availableHeight * 2) < 1) {
            var targetHeight = availableWidth * 2;
            var targetWidth = availableWidth;
        } else {
            var targetHeight = availableHeight
            var targetWidth = availableHeight / 2;
        }
    }

    // maximum
    if (availableHeight > 250 && availableWidth > 300) {
        var targetHeight = 250;
        var targetWidth = 300;
    }

    $("#superbrand").css({
        "height": targetHeight,
        "width": targetWidth
    });
}

function jqReady() {
    $(document).ready(function() {
        dynamicResize();
        window.setInterval(dynamicResize, 250);

        // button
        var target1 = getUriParams()["clicktag1"] || null;
        if (target1 != null) $("#superbrandButton1").attr("href", target1);

        preloading(0);
    });
}


window.getUriParams = function() {
    var queryString = {};
    var query = window.location.search.substring(1);
    var keyValueArray = query.split("&");
    if (keyValueArray.length <= 0) return queryString;
    for (var i = 0; i < keyValueArray.length; i++) {
        var keyValue = keyValueArray[i].split("=");
        var value = decodeURIComponent(keyValue[1]);
        if (value != "" && keyValue[0] != "") queryString[keyValue[0]] = value;
    }
    return queryString;
};

if (typeof jQuery == "undefined") {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement("script");
    jqTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js";
    jqTag.onload = jqReady;
    jqTag.type = "text/javascript";
    headTag.appendChild(jqTag);
} else {
    jqReady();
}