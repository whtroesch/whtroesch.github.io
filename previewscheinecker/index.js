(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,900,114],[0,116,348,168]]}
];


// symbols:



(lib.logoschrift = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.so = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("EghXATgMAAAgm/MBCvAAAMAAAAm/g");
	this.shape.setTransform(213.6,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,427.3,249.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logoschrift();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,671.3,85.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.so();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,348,168), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// so
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(456.5,75.4,0.034,0.034,0,0,0,142.2,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:174,regY:84,scaleX:0.13,scaleY:0.13,x:460.4,y:80},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:463.3,y:85},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:466.2,y:90},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:469.1,y:95},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:472,y:100},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:474.9,y:105},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:477.7,y:110},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:480.6,y:115},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:483.5,y:120.1},0).wait(1).to({scaleX:1,scaleY:1,x:486.4,y:125.1},0).wait(9).to({x:486.5},0).wait(11).to({scaleY:1},0).wait(5).to({x:486.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:471.5,y:124.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:456.4,y:123.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:441.3,y:122.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:426.2,y:122.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:411.1,y:121.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:396,y:120.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:380.9,y:120},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:365.8,y:119.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:350.7,y:118.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:335.6,y:117.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:320.5,y:117.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:305.4,y:116.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:290.4,y:115.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:275.3,y:115},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:260.2,y:114.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:245.1,y:113.6},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:230,y:112.8},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:214.9,y:112.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:199.8,y:111.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:184.7,y:110.6},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:169.6,y:109.9},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:154.5,y:109.2},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:139.4,y:108.5},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:124.3,y:107.8},0).wait(48));

	// Ebene_3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213.6,124.8,1,1,0,0,0,213.6,124.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(36).to({x:193.7},0).wait(1).to({x:173.7},0).wait(1).to({x:153.7},0).wait(1).to({x:133.7},0).wait(1).to({x:113.7},0).wait(1).to({x:93.7},0).wait(1).to({x:73.7},0).wait(1).to({x:53.7},0).wait(1).to({x:33.8},0).wait(1).to({x:13.8},0).wait(1).to({x:-6.2},0).wait(1).to({x:-26.2},0).wait(46).to({_off:true},1).wait(1));

	// schrift
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,136.5,1,1,0,0,0,335.7,42.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(1).to({x:71.2},0).wait(1).to({x:91.4},0).wait(1).to({x:111.5},0).wait(1).to({x:131.7},0).wait(1).to({x:151.8},0).wait(1).to({x:172},0).wait(1).to({x:192.1},0).wait(1).to({x:212.3},0).wait(1).to({x:232.4},0).wait(1).to({x:252.6},0).wait(1).to({x:272.7},0).wait(1).to({x:292.9},0).wait(1).to({x:313.1},0).wait(1).to({x:333.2},0).wait(1).to({x:353.3},0).wait(1).to({x:373.5},0).wait(1).to({x:393.6},0).wait(1).to({x:413.8},0).wait(1).to({x:433.9},0).wait(1).to({x:454.1},0).wait(1).to({x:474.2},0).wait(1).to({x:494.4},0).wait(1).to({x:514.5},0).wait(1).to({x:534.7},0).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(936.6,197.1,12,5.8);
// library properties:
lib.properties = {
	id: '7EF4C212BDFBF24F9391043144C8E8A6',
	width: 970,
	height: 250,
	fps: 24,
	color: "#1D1D1B",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['7EF4C212BDFBF24F9391043144C8E8A6'] = {
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