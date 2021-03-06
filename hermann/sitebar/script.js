var jsonFeed = "https://mhauens.github.io/tom_json/test.json";

var config = {
    items: null,
    itemIndex: 0,
    pageDelay: 10000,
    perPage: null,
    redirect: null
};

var preloadingFiles = [];
var preloadingImages = [];

function arrayShuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        // pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function arrayTrim(array) {
    var surplus = array.length % config.perPage;

    if (surplus > 0) {
        for (var i = 0; i < surplus; i++) {
            array.pop();
        }
    }

    return array;
}

function cropTitle(title) {
    if (title.length > 64) {
        title = title.substr(0, 63).trim() + "&hellip;";
    }

    return title;
}

function dynamicResize() {
    var availableHeight = $(window).innerHeight();
    var availableWidth = $(window).innerWidth();

    // minimum
    var targetHeight = 600;
    var targetWidth = 300;

    // adapt
    if (availableHeight > 599 && availableWidth > 299) {
        if ((availableWidth / availableHeight * 2) < 1) {
            var targetHeight = availableWidth * 2;
            var targetWidth = availableWidth;
        } else {
            var targetHeight = availableHeight
            var targetWidth = availableHeight / 2;
        }
    }

    // maximum
    if (availableHeight > 1200 && availableWidth > 600) {
        var targetHeight = 1200;
        var targetWidth = 600;
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

        // button
        var target2 = getUriParams()["clicktag2"] || null;
        if (target2 != null) $("#superbrandButton2").attr("href", target2);

        // button
        var target3 = getUriParams()["clicktag3"] || null;
        if (target3 != null) $("#superbrandButton3").attr("href", target3);
        
        // button
        var target4 = getUriParams()["clicktag4"] || null;
        if (target4 != null) $("#superbrandButton4").attr("href", target4);

        // redirect
        config.redirect = getUriParams()["feed"] || null;

        preloading(0);
    });
}

function preloading(index) {
    if (index >= preloadingFiles.length) {
        dynamicResize();
        window.setInterval(dynamicResize, 250);

        config.perPage = $(".itemBox").length;

        var jsonUrl = getUriParams()["jsonFeed"] || window["jsonFeed"] || null;
        if (jsonUrl != null) {
            $.getJSON(jsonUrl, {
                "shopId": config.shopId
            }, function(data) {
                config.items = arrayTrim(arrayShuffle(data.items));
                shopCycle();
            });
        }
    } else {
        preloadingImages[index] = new Image();
        preloadingImages[index].src = preloadingFiles[index];
        preloadingImages[index].onload = function() {
            preloading(++index);
        }
    }
}

function shopCycle() {
    for (var i = 0; i < config.perPage; i++) {
        $("#ib" + i).animate({
            "opacity": 0
        }, 125);

        var image = new Image();
        image.src = config.items[config.itemIndex].image;

        $("#ib" + i).addClass(((image.height > image.width) ? "itemBoxVertical" : "itemBoxHorizontal"));
        $("#ib" + i).removeClass(((image.height > image.width) ? "itemBoxHorizontal" : "itemBoxVertical"));
        $("#ib" + i).css({
            "background-image": "url(" + image.src + ")"
        });
        if (config.redirect !== null) {
            $("#ib" + i).parent().attr("href", config.redirect + encodeURIComponent(config.items[config.itemIndex].target));
        } else {
            $("#ib" + i).parent().attr("href", config.items[config.itemIndex].target);
        }

        var price = config.items[config.itemIndex].price;
        if (price % 1 === 0) $("#ib" + i).find(".itemPrice").html("&euro; " + config.items[config.itemIndex].price);
        else $("#ib" + i).find(".itemPrice").html("&euro; " + config.items[config.itemIndex].price.toFixed(2).replace(".", ","));

        $("#ib" + i).find(".itemTitle").html(cropTitle(config.items[config.itemIndex].title));

        config.itemIndex++;

        if (config.itemIndex >= config.items.length) {
            config.itemIndex = 0;
        }

        $("#ib" + i).delay(i * 125).animate({
            "opacity": 1
        }, 125);
    }
    window.setTimeout(shopFadeout, config.pageDelay);
}

function shopFadeout() {
    for (var i = 0; i < config.perPage; i++) {
        $("#ib" + i).delay(i * 125).animate({
            "opacity": 0
        }, 125);
    }
    window.setTimeout(shopCycle, config.perPage * 125);
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