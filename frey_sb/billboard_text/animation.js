(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.film = function() {
	this.initialize(img.film);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,857,235);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,120);


(lib.raeder = function() {
	this.initialize(img.raeder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,48);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,91);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.raeder();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,200,24), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,367.6,66.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.film();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.256,1.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1076.1,295.1), null);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// raeder
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(280.1,153.1,1.47,1.469,0,0,0,100,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({x:280,y:153},0).wait(2).to({y:153.1},0).wait(6).to({x:280.1,y:153.2},0).wait(3).to({alpha:0.024},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.071},0).wait(1).to({scaleY:1.47,alpha:0.095},0).wait(1).to({alpha:0.119},0).wait(1).to({y:153.1,alpha:0.143},0).wait(1).to({alpha:0.167},0).wait(1).to({x:280,alpha:0.19},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.357},0).wait(1).to({y:153,alpha:0.381},0).wait(1).to({scaleY:1.47,alpha:0.405},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.619},0).wait(1).to({y:152.9,alpha:0.643},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.833},0).wait(1).to({y:153,alpha:0.857},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:1},0).wait(15).to({scaleY:1.47},0).wait(16).to({scaleY:1.47},0).wait(4).to({y:153.1},0).wait(12).to({scaleY:1.47},0).wait(8));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.9,72.3,1.648,1.647,0,0,0,183.8,33.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({regY:33.5,x:302.8,y:72.5,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.123},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.168},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.572},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.663},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:1},0).wait(1).to({y:72.4},0).wait(10).to({x:302.9},0).wait(57));

	// frey
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(667,32,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

	// film
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(431.9,78.6,1,1,0,0,0,538,147.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(1).to({regY:147.5,x:432,y:78.5,alpha:0.025},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.35},0).wait(1).to({x:432.9},0).wait(1).to({x:433.9},0).wait(1).to({x:434.8},0).wait(1).to({x:435.8},0).wait(1).to({x:436.7},0).wait(1).to({x:437.7},0).wait(1).to({x:438.7},0).wait(1).to({x:439.6},0).wait(1).to({x:440.6},0).wait(1).to({x:441.5},0).wait(1).to({x:442.5},0).wait(1).to({x:443.4},0).wait(1).to({x:444.4},0).wait(1).to({x:445.3},0).wait(1).to({x:446.3},0).wait(1).to({x:447.2},0).wait(1).to({x:448.2},0).wait(1).to({x:449.2},0).wait(1).to({x:450.1},0).wait(1).to({x:451.1},0).wait(1).to({x:452},0).wait(1).to({x:453},0).wait(1).to({x:453.9},0).wait(1).to({x:454.9},0).wait(1).to({x:455.8},0).wait(1).to({x:456.8},0).wait(1).to({x:457.7},0).wait(1).to({x:458.7},0).wait(1).to({x:459.7},0).wait(1).to({x:460.6},0).wait(1).to({x:461.6},0).wait(1).to({x:462.5},0).wait(1).to({x:463.5},0).wait(1).to({x:464.4},0).wait(1).to({x:465.4},0).wait(1).to({x:466.3},0).wait(1).to({x:467.3},0).wait(1).to({x:468.2},0).wait(1).to({x:469.2},0).wait(1).to({x:470.1},0).wait(1).to({x:471.1},0).wait(1).to({x:472.1},0).wait(1).to({x:473},0).wait(1).to({x:474},0).wait(1).to({x:474.9},0).wait(1).to({x:475.9},0).wait(1).to({x:476.8},0).wait(1).to({x:477.8},0).wait(1).to({x:478.7},0).wait(1).to({x:479.7},0).wait(1).to({x:480.6},0).wait(1).to({x:481.6},0).wait(1).to({x:482.6},0).wait(1).to({x:483.5},0).wait(1).to({x:484.5},0).wait(1).to({x:485.4},0).wait(1).to({x:486.4},0).wait(1).to({x:487.3},0).wait(1).to({x:488.3},0).wait(1).to({x:489.2},0).wait(1).to({x:490.2},0).wait(1).to({x:491.1},0).wait(1).to({x:492.1},0).wait(1).to({x:493.1},0).wait(1).to({x:494},0).wait(1).to({x:495},0).wait(1).to({x:495.9},0).wait(1).to({x:496.9},0).wait(1).to({x:497.8},0).wait(1).to({x:498.8},0).wait(1).to({x:499.7},0).wait(1).to({x:500.7},0).wait(1).to({x:501.6},0).wait(1).to({x:502.6},0).wait(1).to({x:503.5},0).wait(1).to({x:504.5},0).wait(1).to({x:505.5},0).wait(1).to({x:506.4},0).wait(1).to({x:507.4},0).wait(1).to({x:508.3},0).wait(1).to({x:509.3},0).wait(1).to({x:510.2},0).wait(1).to({x:511.2},0).wait(1).to({x:512.1},0).wait(1).to({x:513.1},0).wait(1).to({x:514},0).wait(1).to({x:515},0).wait(1).to({x:516},0).wait(1).to({x:516.9},0).wait(1).to({x:517.9},0).wait(1).to({x:518.8},0).wait(1).to({x:519.8},0).wait(1).to({x:520.7},0).wait(1).to({x:521.7},0).wait(1).to({x:522.6},0).wait(1).to({x:523.6},0).wait(1).to({x:524.5},0).wait(1).to({x:525.5},0).wait(1).to({x:526.5},0).wait(1).to({x:527.4},0).wait(1).to({x:528.4},0).wait(1).to({x:529.3},0).wait(1).to({x:530.3},0).wait(1).to({x:531.2},0).wait(1).to({x:532.2},0).wait(1).to({x:533.1},0).wait(1).to({x:534.1},0).wait(1).to({x:535},0).wait(1).to({x:536},0).wait(1).to({x:536.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1152,125,282,122.7);
// library properties:
lib.properties = {
	id: '984C6EBA87C40045B2A0D99B104642C7',
	width: 970,
	height: 186,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/film.png", id:"film"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/raeder.png", id:"raeder"},
		{src:"images/text.png", id:"text"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['984C6EBA87C40045B2A0D99B104642C7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;