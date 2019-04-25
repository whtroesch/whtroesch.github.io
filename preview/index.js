(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.carwoom = function() {
	this.initialize(img.carwoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,472);


(lib.Hintergrund20 = function() {
	this.initialize(img.Hintergrund20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2835,2481);


(lib.schrift = function() {
	this.initialize(img.schrift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,134);


(lib.superheroes = function() {
	this.initialize(img.superheroes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,453);// helper functions:

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
	this.instance = new lib.schrift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,449,134), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.carwoom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,659,472), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.superheroes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,453), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// carwoom
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(301.1,602.1,0.118,0.118,0,0,0,329.3,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:329.5,regY:236,scaleX:0.19,scaleY:0.19,y:602.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:602.3},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:602.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:301.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:602.5},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:602.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:301.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:301.2,y:602.7},0).wait(24));

	// helden
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,1296.5,1,1,0,0,0,300,226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1235},0).wait(1).to({y:1173.6},0).wait(1).to({y:1112.1},0).wait(1).to({y:1050.6},0).wait(1).to({y:989.1},0).wait(1).to({y:927.7},0).wait(1).to({y:866.2},0).wait(1).to({y:804.7},0).wait(1).to({y:743.3},0).wait(1).to({y:681.8},0).wait(1).to({y:620.3},0).wait(1).to({y:558.8},0).wait(1).to({y:497.4},0).wait(1).to({y:435.9},0).wait(34));

	// text
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.9,177.7,0.035,0.234,0,0,0,269.9,80);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regX:224.5,regY:67,scaleX:0.09,scaleY:0.28,x:27.7,y:174},0).wait(1).to({scaleX:0.14,scaleY:0.32,x:40.2,y:173.4},0).wait(1).to({scaleX:0.19,scaleY:0.37,x:52.6,y:172.9},0).wait(1).to({scaleX:0.24,scaleY:0.41,x:65,y:172.3},0).wait(1).to({scaleX:0.3,scaleY:0.45,x:77.5,y:171.7},0).wait(1).to({scaleX:0.35,scaleY:0.5,x:89.9,y:171.1},0).wait(1).to({scaleX:0.4,scaleY:0.54,x:102.3,y:170.6},0).wait(1).to({scaleX:0.45,scaleY:0.58,x:114.8,y:170},0).wait(1).to({scaleX:0.51,scaleY:0.63,x:127.2,y:169.4},0).wait(1).to({scaleX:0.56,scaleY:0.67,x:139.6,y:168.9},0).wait(1).to({scaleX:0.61,scaleY:0.71,x:152.1,y:168.3},0).wait(1).to({scaleX:0.66,scaleY:0.76,x:164.5,y:167.7},0).wait(1).to({scaleX:0.72,scaleY:0.8,x:176.9,y:167.1},0).wait(1).to({scaleX:0.77,scaleY:0.85,x:189.4,y:166.6},0).wait(1).to({scaleX:0.82,scaleY:0.89,x:201.8,y:166},0).wait(1).to({scaleX:0.87,scaleY:0.93,x:214.2,y:165.4},0).wait(1).to({scaleX:0.93,scaleY:0.98,x:226.7,y:164.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:239.1,y:164.2},0).wait(1).to({scaleX:1.03,scaleY:1.06,x:251.5,y:163.7},0).wait(1).to({scaleX:1.08,scaleY:1.11,x:264,y:163.1},0).wait(1).to({scaleX:1.13,scaleY:1.15,x:276.4,y:162.5},0).wait(1).to({scaleX:1.19,scaleY:1.2,x:288.9,y:161.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:301.3,y:161.4},0).wait(1));

	// bg
	this.instance_3 = new lib.Hintergrund20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-337,-25,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,525,1295.1,1548);
// library properties:
lib.properties = {
	id: '6C8B2E369FBFED47B414510077FAC7FC',
	width: 600,
	height: 1100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/carwoom.png", id:"carwoom"},
		{src:"images/Hintergrund20.jpg", id:"Hintergrund20"},
		{src:"images/schrift.png", id:"schrift"},
		{src:"images/superheroes.png", id:"superheroes"}
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
an.compositions['6C8B2E369FBFED47B414510077FAC7FC'] = {
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