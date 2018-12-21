//ADOBE ANIMATE GLOBAL VARIABLES

/*
//Banner Setup
clicktagSpecification = ""; //Options: IAB, DCM, AdWords, DoubleClickStudio, Socoto, None
language = ""; //Options: DE, FR, IT
handlerLogo = false;
handlerTextOrientation = true;   // Set handlerTextAlign
*/

/*
//Rechtstext Styling
rechtstextRight = "14px";
rechtstextBottom = "5px";
rechtstextColor = "white";
rechtstextFontSize = "5px";
rechtstextTextColor = "black";
*/

/*
//Handler Text Styling
handlerTextWidth = "";
handlerTextHeight = "";
handlerTextPadding = "";
handlerTopTextSize = "5px";
handlerTopTextColor = "black";
handlerTopTextPadding = "10px";
handlerBottomTextSize = "5px";
handlerBottomTextPadding = "10px";
handlerBottomTextColor = "black";
handlerLogoMargin = "5px";
handlerLogoMaxWidth = "280px";
handlerLogoMaxHeight = "90px";
handlerLogoPadding = "0px 0px 0px 0px";
handlerTopTextWeight = "bold";
handlerTextAlign = "inline-block";
*/

///////////////////////////////////////////// GLOBAL SCRIPTS ///////////////////////////////////////////// 

function exitHandler() {
	Enabler.exit("clickTag", "http://www.google.com");
}

function onClickHandler(evt,link) {
	if (link == true) {
		clickTagHandler();
	} else {
		if (evt.nativeEvent.button == 2) return false;
		clickTagHandler();
	}
}

function clickTagHandler() {
	switch (clicktagSpecification) {
		case "IAB":
		console.log("IAB Clicktag");
		var getUriParams = function () {
			var query_string = {}
			var query = window.location.search.substring(1);
			var parmsArray = query.split("&");
			if (parmsArray.length <= 0) return query_string;
			for (var i = 0; i < parmsArray.length; i++) {
				var pair = parmsArray[i].split("=");
				var val = decodeURIComponent(pair[1]);
				if (val != "" && pair[0] != "") query_string[pair[0]] = val;
			}
			return query_string;
		}();
		window.open(getUriParams.clicktag);
		break;
		case "DCM":
		console.log("DCM Clicktag");
		window.open(window.clickTag);
		break;
		case "AdWords":
		console.log("AdWords Clicktag");
		break;
		case "Socoto":
		console.log("Socoto Banner");
		break;
		case "None":
		console.log("No Clicktag");
		break;
		case "DoubleClickStudio":
		console.log("DoubleClick Studio Clicktag");
		exitHandler();
		break;
		default:
		alert("No Clicktag specified.");
	}
}

///////////////////////////////////////////// RECHTSTEXT SCRIPTS ///////////////////////////////////////////// 

var bannerHeight = document.getElementById("animation_container").offsetHeight;
var rechtstext = document.getElementById("rechtstext");
var rechtstextBox = document.getElementById("rechtstextBox");

//Rechtstext Styling
rechtstext.style.right = rechtstextRight;
rechtstext.style.bottom = rechtstextBottom;
rechtstext.style.color = rechtstextColor;
rechtstext.style.fontSize = rechtstextFontSize;
rechtstextBox.style.color = rechtstextTextColor;

//Text Replacement
rechtstext.innerHTML = window.rechtstextContent.rechtstext;
rechtstextBox.innerHTML = window.rechtstextContent.rechtstextText;

//C02 Replacement
function C02(){
var co2String = rechtstextBox.innerHTML;
var count = (co2String.match(/CO2/g) || []).length;

for (var i = count - 1; i >= 0; i--) {
	$('#rechtstextBox').html($('#rechtstextBox').html().replace("CO2", "CO<sub style='line-height: 0px;'>2</sub>"));	
}
}
C02();

//Rechtstext Box Sizing
rechtstextBoxWidth = window.getComputedStyle(rechtstextBox, null).getPropertyValue('width');
rechtstextBoxWidth = rechtstextBoxWidth.split("px");
newrechtstextBoxWidth = rechtstextBoxWidth[0] - 22;
rechtstextBox.style.width = newrechtstextBoxWidth + 'px';

//Rechtstext Mouseover and Mouseout event Listeners
rechtstext.addEventListener("mouseover", function( event ) {
	rechtstext.style.opacity = "0";
	$("#rechtstextBox").animate({top:rechtstextBoxPositionDifference, opacity: 1});
});
rechtstext.addEventListener("mouseout", function( event ) {
	rechtstext.style.opacity = "1";
	$("#rechtstextBox").animate({top:bannerHeight, opacity:0});
});

//Border Adjustment
barPosition = bannerHeight - 1;
$("#bottomBorder").css("top", barPosition+"px");

//Rechtstext Font Resizing
function decreaseFontSize() {

	if (rechtstextBox.offsetHeight > bannerHeight) {
		fontSize = window.getComputedStyle(rechtstextBox, null).getPropertyValue('font-size');
		fontSize = fontSize.split("px");
		newFontSize = fontSize[0] - 0.1;
		rechtstextBox.style.fontSize = newFontSize + 'px';
		if (rechtstextBox.offsetHeight > bannerHeight) {
			decreaseFontSize();
		}
	}
	//Position Rechtstext at the Bottom
	rechtstextBoxPositionDifference = bannerHeight - rechtstextBox.offsetHeight;	
}
document.addEventListener("mouseover", function(){
	decreaseFontSize();
});

//Show Rechtstext
function showRechtstext(duration) {
	repositionRechtstextBox();
	$(rechtstext).css( "display", "block" );
	$(rechtstext).animate({ opacity: 1 }, duration, function() {});
}

//Hide Rechtstext
function hideRechtstext(duration) {
	$(rechtstext).animate({ opacity: 0 }, duration, function() { $(rechtstext).css( "display", "none" ); });
}

//Resizing the Window
$( window ).resize(function() {
	repositionRechtstextBox();
});

function repositionRechtstextBox() {
	$("#rechtstextBox").css("opacity", "0");
	var rechtstextBoxWidth = document.getElementById("animation_container").offsetWidth;
	$("#rechtstextBox").css("width", rechtstextBoxWidth);
	rechtstextBox.style.fontSize = '10px';
	decreaseFontSize();
	bannerHeight = document.getElementById("animation_container").offsetHeight;
	rechtstextBoxPositionDifference = bannerHeight - rechtstextBox.offsetHeight;
	$("#rechtstextBox").css("top", bannerHeight);
}

setTimeout(repositionRechtstextBox, 2000);

///////////////////////////////////////////// HANDLER SCRIPTS ///////////////////////////////////////////// 

var topText = document.getElementById('topText');
var bottomText = document.getElementById('bottomText');

//Text Replacement and Image
topText.innerHTML = window.handlerContent.TopText;
bottomText.innerHTML = window.handlerContent.BottomText;

/*
topText.style.color = handlerTopTextColor;
topText.style.fontSize = handlerTopTextSize;
bottomText.style.color = rechtstextColor;
bottomText.style.fontSize = handlerBottomTextSize;
*/

$("#topText").css("font-size", handlerTopTextSize);
$("#topText").css("color", handlerTopTextColor);
$("#topText").css("font-weight", handlerTopTextWeight);
$("#bottomText").css("font-size", handlerBottomTextSize);
$("#bottomText").css("color", handlerBottomTextColor);

$("#topText").css("padding", handlerTopTextPadding);
$("#bottomText").css("padding", handlerBottomTextPadding);

$("#handlerText").css("padding", handlerTextPadding);

if (handlerTextOrientation == true) {
	$('#topText').css('display', handlerTextAlign);
	$('#topText').css('vertical-align', 'top');
	$('#topText').css('line-height', 'normal');
	$('#bottomText').css('display', handlerTextAlign);
	$('#bottomText').css('vertical-align', 'middle');
	$('#bottomText').css('line-height', 'normal');
	$('#middleText').css('display', handlerTextAlign);
	$('#middleText').css('vertical-align', 'middle');
	$('#middleText').css('line-height', 'normal');

	$('#topText').insertAfter('#bottomText');
}

if (handlerLogo == true) {
	$('#handlerLogo').attr('src','handlerLogo.png');
	$('#handlerLogo').css('margin', handlerLogoMargin);
	$('#handlerLogo').css('max-width', handlerLogoMaxWidth);
	$('#handlerLogo').css('max-height', handlerLogoMaxHeight);
	$('#handlerLogo').css('padding', handlerLogoPadding);
}

//Custom Handler Container Dimensions
function customHandlerContainer() {
	if (typeof handlerTextWidth !== 'undefined') {
		$("#handlerText").width(handlerTextWidth);
	}
	if (typeof handlerTextHeight !== 'undefined') {
		$("#handlerText").height(handlerTextHeight);
	}
}
customHandlerContainer();

//Show Socoto Text
function showHandler(duration) {
	$(handlerText).css( "display", "table" );
	$(handlerText).animate({ opacity: 1 }, duration, function() {});
}

//Hide Socoto Text
function hideHandler(duration) {
	$(handlerText).animate({ opacity: 0 }, duration, function() { $(handlerText).css( "display", "none" ); });
}