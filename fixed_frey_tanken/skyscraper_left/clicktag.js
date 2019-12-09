// hybrid code to process Google clicktags or IAB Austria clicktags
var getUriParams = function() {
    var query_string = {}, query = window.location.search.substring(1), parmsArray = query.split('&');
    if(parmsArray.length <= 0) return query_string;
    for(var i = 0; i < parmsArray.length; i++) {
        var pair = parmsArray[i].split('=');
        var val = decodeURIComponent(pair[1]);
        if (val !== '' && pair[0] !== '') query_string[pair[0].toLowerCase()] = val;
    }
    return query_string;
}();

var ct = document.getElementById('hybrid-clicktag');

if (getUriParams.clicktag) {
    ct.setAttribute('href', getUriParams.clicktag);
    ct.setAttribute('target', '_blank')
} else {
    ct.onclick = function () {
        window.open(window.clickTag);
        return false;
    }
}