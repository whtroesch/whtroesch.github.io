(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,500,1000],[502,1064,342,65],[502,1002,432,60],[0,1002,500,409],[502,0,500,1000]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fzg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.megasale = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.oben = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rest = function() {
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.rest();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.fzg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,342,65), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.megasale();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,432,60), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// rest
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(1));

	// megasale
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,337,0.008,0.008,0,180,0,204.1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:216,regY:30,scaleX:0.05,scaleY:0.04,skewX:0,x:250.6,y:337.4},0).wait(1).to({scaleX:0.1,scaleY:0.08,x:251.1,y:338},0).wait(1).to({scaleX:0.14,scaleY:0.12,x:251.7,y:338.5},0).wait(1).to({scaleX:0.18,scaleY:0.17,x:252.2,y:339},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:252.7,y:339.6},0).wait(1).to({scaleX:0.27,scaleY:0.26,x:253.2,y:340.1},0).wait(1).to({scaleX:0.31,scaleY:0.3,x:253.7,y:340.6},0).wait(1).to({scaleX:0.35,scaleY:0.34,x:254.2,y:341.1},0).wait(1).to({scaleX:0.4,scaleY:0.39,x:254.7,y:341.6},0).wait(1).to({scaleX:0.44,scaleY:0.43,x:255.3,y:342.2},0).wait(1).to({scaleX:0.48,scaleY:0.47,x:255.8,y:342.7},0).wait(1).to({scaleX:0.53,scaleY:0.52,x:256.3,y:343.2},0).wait(1).to({scaleX:0.57,scaleY:0.56,x:256.8,y:343.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:257.3,y:344.3},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:257.8,y:344.8},0).wait(1).to({scaleX:0.7,scaleY:0.69,x:258.3,y:345.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:258.8,y:345.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:259.4,y:346.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:259.9,y:346.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:260.4,y:347.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:260.9,y:347.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:261.4,y:348.5},0).wait(1).to({scaleX:1,scaleY:1,x:262,y:349},0).wait(49));

	// oben
	this.instance_2 = new lib.oben();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(53));

	// fzg
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250,338.8,1,1,0,0,0,171,32.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({y:344.1},0).wait(1).to({y:349.5},0).wait(1).to({y:354.9},0).wait(1).to({y:360.3},0).wait(1).to({y:365.7},0).wait(1).to({y:371},0).wait(1).to({y:376.4},0).wait(1).to({y:381.8},0).wait(1).to({y:387.2},0).wait(1).to({y:392.6},0).wait(1).to({y:397.9},0).wait(1).to({y:403.3},0).wait(1).to({y:408.7},0).wait(1).to({y:414.1},0).wait(1).to({y:419.5},0).wait(1).to({y:424.8},0).wait(1).to({y:430.2},0).wait(1).to({y:435.6},0).wait(1).to({y:441},0).wait(1).to({y:446.4},0).wait(1).to({y:451.7},0).wait(1).to({y:457.1},0).wait(1).to({y:462.5},0).wait(30));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,500,500,1000);
// library properties:
lib.properties = {
	id: '83DE7A61F4D95F48BA9884493159488A',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
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
an.compositions['83DE7A61F4D95F48BA9884493159488A'] = {
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