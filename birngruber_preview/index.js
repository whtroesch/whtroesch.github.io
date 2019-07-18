(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.birngruber_dacarwoom_bg = function() {
	this.initialize(img.birngruber_dacarwoom_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1072,1080);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,276);


(lib.carwoom = function() {
	this.initialize(img.carwoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,472);


(lib.mai = function() {
	this.initialize(img.mai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,250);


(lib.schriftpngKopie = function() {
	this.initialize(img.schriftpngKopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,304,276), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.mai();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,478.5,178), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schriftpngKopie();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.641,0.641);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,622.1,57.7), null);


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
	this.instance.setTransform(551.1,602.1,0.118,0.118,0,0,0,329.3,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:329.5,regY:236,scaleX:0.19,scaleY:0.19,y:602.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:602.3},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:602.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:551.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:602.5},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:602.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:551.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:551.2,y:602.7},0).wait(24));

	// helden
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(550,1296.5,1,1,0,0,0,300,226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1235},0).wait(1).to({y:1173.6},0).wait(1).to({y:1112.1},0).wait(1).to({y:1050.6},0).wait(1).to({y:989.1},0).wait(1).to({y:927.7},0).wait(1).to({y:866.2},0).wait(1).to({y:804.7},0).wait(1).to({y:743.3},0).wait(1).to({y:681.8},0).wait(1).to({y:620.3},0).wait(1).to({y:558.8},0).wait(1).to({y:497.4},0).wait(1).to({y:435.9},0).wait(34));

	// datum
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(552.2,1002,1,1,0,0,0,239.2,89);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(15));

	// button
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(601,832,1,1,0,0,0,152,138);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(15));

	// gwtage
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(554.1,209.9,1,1,0,0,0,311.1,28.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).wait(1).to({regX:311,x:554,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(15));

	// bg
	this.instance_5 = new lib.birngruber_dacarwoom_bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10,-8,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,542,1111.7,1531);
// library properties:
lib.properties = {
	id: '6C8B2E369FBFED47B414510077FAC7FC',
	width: 1100,
	height: 1100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/birngruber_dacarwoom_bg.jpg", id:"birngruber_dacarwoom_bg"},
		{src:"images/button.png", id:"button"},
		{src:"images/carwoom.png", id:"carwoom"},
		{src:"images/mai.png", id:"mai"},
		{src:"images/schriftpngKopie.png", id:"schriftpngKopie"},
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