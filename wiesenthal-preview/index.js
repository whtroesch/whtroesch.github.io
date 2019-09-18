(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1191,812,182],[0,0,1971,1189],[814,1369,569,166],[814,1191,744,176],[0,1375,628,37]]}
];


// symbols:



(lib.achtraeder = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cars = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kurzezeit = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.758,0.758);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,431.2,125.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.kurzezeit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,493.1,29.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.cars();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.659,0.659);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,490.1,116), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.achtraeder();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,627.9,140.8), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(1423.6,894.3,1,1,0,0,0,215.6,62.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(32));

	// cars
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1453,572.4,1,1,0,0,0,245,58);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(49));

	// kurz
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1449.5,640.9,1,1,0,0,0,246.5,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(39));

	// acht
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1453,392.4,0.071,0.071,0,0,0,313.9,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:314,scaleX:0.11,scaleY:0.11,y:394.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,y:396.2},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:398.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:400},0).wait(1).to({scaleX:0.27,scaleY:0.27,y:402},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:403.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:405.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:407.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:409.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:411.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:413.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:415.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1453.1,y:417.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1453,y:419.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:421.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:423.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:425.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1453.1,y:427},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1453,y:428.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:430.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1453.1,y:432.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1453,y:434.7},0).wait(1).to({scaleX:1,scaleY:1,y:436.6},0).wait(1).to({y:438.5},0).wait(1).to({y:440.5},0).wait(1).to({y:442.4},0).wait(1).to({y:444.3},0).wait(1).to({y:446.2},0).wait(1).to({y:448.2},0).wait(1).to({y:450.1},0).wait(1).to({y:452},0).wait(1).to({y:453.9},0).wait(1).to({y:455.9},0).wait(1).to({y:457.8},0).wait(1).to({y:457.7},0).wait(60).to({y:457.8},0).wait(1));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(985.5,594.5,1971,1189);
// library properties:
lib.properties = {
	id: 'B2691EADBA0DEC479FB34C1C7EB569F6',
	width: 1971,
	height: 1189,
	fps: 24,
	color: "#FFFFFF",
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
an.compositions['B2691EADBA0DEC479FB34C1C7EB569F6'] = {
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