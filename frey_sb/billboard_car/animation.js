(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,287);


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


(lib.schein = function() {
	this.initialize(img.schein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.642,0.642);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,256.4,184.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schein();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.647,0.647);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,323.6,647.1), null);


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
	this.instance.setTransform(152,134,1,1,0,0,0,100,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(8).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(44));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.8,79.5,1,1,0,0,0,183.8,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(53));

	// frey
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(707,42,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

	// car
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(520.2,129.2,1,1,0,0,0,128.2,92.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.251},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.376},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.501},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.877},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.94},0).wait(110));

	// film
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(431.9,78.6,1,1,0,0,0,538,147.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(1).to({regY:147.5,x:432,y:78.5,alpha:0.012},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.2},0).wait(1).to({x:433.1},0).wait(1).to({x:434.3},0).wait(1).to({x:435.4},0).wait(1).to({x:436.5},0).wait(1).to({x:437.7},0).wait(1).to({x:438.8},0).wait(1).to({x:440},0).wait(1).to({x:441.1},0).wait(1).to({x:442.2},0).wait(1).to({x:443.4},0).wait(1).to({x:444.5},0).wait(1).to({x:445.7},0).wait(1).to({x:446.8},0).wait(1).to({x:448},0).wait(1).to({x:449.1},0).wait(1).to({x:450.2},0).wait(1).to({x:451.4},0).wait(1).to({x:452.5},0).wait(1).to({x:453.7},0).wait(1).to({x:454.8},0).wait(1).to({x:455.9},0).wait(1).to({x:457.1},0).wait(1).to({x:458.2},0).wait(1).to({x:459.4},0).wait(1).to({x:460.5},0).wait(1).to({x:461.6},0).wait(1).to({x:462.8},0).wait(1).to({x:463.9},0).wait(1).to({x:465.1},0).wait(1).to({x:466.2},0).wait(1).to({x:467.3},0).wait(1).to({x:468.5},0).wait(1).to({x:469.6},0).wait(1).to({x:470.8},0).wait(1).to({x:471.9},0).wait(1).to({x:473.1},0).wait(1).to({x:474.2},0).wait(1).to({x:475.3},0).wait(1).to({x:476.5},0).wait(1).to({x:477.6},0).wait(1).to({x:478.8},0).wait(1).to({x:479.9},0).wait(1).to({x:481},0).wait(1).to({x:482.2},0).wait(1).to({x:483.3},0).wait(1).to({x:484.5},0).wait(1).to({x:485.6},0).wait(1).to({x:486.7},0).wait(1).to({x:487.9},0).wait(1).to({x:489},0).wait(1).to({x:490.2},0).wait(1).to({x:491.3},0).wait(1).to({x:492.5},0).wait(1).to({x:493.6},0).wait(1).to({x:494.7},0).wait(1).to({x:495.9},0).wait(1).to({x:497},0).wait(1).to({x:498.2},0).wait(1).to({x:499.3},0).wait(1).to({x:500.4},0).wait(1).to({x:501.6},0).wait(1).to({x:502.7},0).wait(1).to({x:503.9},0).wait(1).to({x:505},0).wait(1).to({x:506.1},0).wait(1).to({x:507.3},0).wait(1).to({x:508.4},0).wait(1).to({x:509.6},0).wait(1).to({x:510.7},0).wait(1).to({x:511.8},0).wait(1).to({x:513},0).wait(1).to({x:514.1},0).wait(1).to({x:515.3},0).wait(1).to({x:516.4},0).wait(1).to({x:517.6},0).wait(1).to({x:518.7},0).wait(1).to({x:519.8},0).wait(1).to({x:521},0).wait(1).to({x:522.1},0).wait(1).to({x:523.3},0).wait(1).to({x:524.4},0).wait(1).to({x:525.5},0).wait(1).to({x:526.7},0).wait(1).to({x:527.8},0).wait(1).to({x:529},0).wait(1).to({x:530.1},0).wait(1).to({x:531.2},0).wait(1).to({x:532.4},0).wait(1).to({x:533.5},0).wait(1).to({x:534.7},0).wait(1).to({x:535.8},0).wait(1).to({x:536.9},0).wait(1));

	// schein
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(504.8,47.5,1,1,0,0,0,161.8,323.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(828,-183,602,647.1);
// library properties:
lib.properties = {
	id: '984C6EBA87C40045B2A0D99B104642C7',
	width: 970,
	height: 186,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/car.png", id:"car"},
		{src:"images/film.png", id:"film"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/raeder.png", id:"raeder"},
		{src:"images/schein.jpg", id:"schein"},
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