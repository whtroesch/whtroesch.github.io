(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animation_atlas_", frames: [[1004,1052,500,694],[1506,1361,300,119],[1506,1052,501,307],[502,1052,500,694],[0,0,2000,1050],[1506,1482,390,77],[1506,1561,389,30],[0,1052,500,694]]}
];


// symbols:



(lib.blende = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.MAN_VKL_Baustelle_F39 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ponyhof = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tge = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.van = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(7);
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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.van();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.blende();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.blende();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.ponyhof();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,390,77), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MAN_VKL_Baustelle_F39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1332.9,699.8), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-128,-52,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.87,scaleY:0.87,x:-123,y:-50},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-52,270,107.1);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(241.6,229.8,0.707,0.707);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).wait(315));

	// man
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,388,1,1,0,0,0,250,347);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).wait(15).to({x:250.1},0).wait(29).to({x:250.2},0).wait(29).to({x:250.3},0).wait(29).to({x:250.4},0).wait(30).to({x:250.5},0).wait(29).to({x:250.6},0).wait(29).to({x:250.7},0).wait(29).to({x:250.8},0).wait(29).to({x:250.9},0).wait(29).to({x:251},0).wait(29).to({x:251.1},0).wait(29).to({x:251.2},0).wait(29).to({x:251.3},0).wait(1));

	// van
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133,388,1,1,0,0,0,250,347);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(195).to({_off:true},1).wait(169));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,699);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(601));

	// blende transp
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250,438,1,1,0,0,0,250,347);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).wait(1).to({scaleY:0.1,y:750.2,alpha:0.82},0).wait(1).to({scaleY:0.17,y:727.3,alpha:0.806},0).wait(1).to({scaleY:0.23,y:704.4,alpha:0.793},0).wait(1).to({scaleY:0.3,y:681.5,alpha:0.779},0).wait(1).to({scaleY:0.36,y:658.6,alpha:0.765},0).wait(1).to({scaleY:0.43,y:635.8,alpha:0.751},0).wait(1).to({scaleY:0.5,y:612.9,alpha:0.738},0).wait(1).to({scaleY:0.56,y:590,alpha:0.724},0).wait(1).to({scaleY:0.63,y:567.1,alpha:0.71},0).wait(1).to({scaleY:0.69,y:544.2,alpha:0.696},0).wait(1).to({scaleY:0.76,y:521.4,alpha:0.683},0).wait(1).to({scaleY:0.83,y:498.5,alpha:0.669},0).wait(1).to({scaleY:0.89,y:475.6,alpha:0.655},0).wait(1).to({scaleY:0.96,y:452.8,alpha:0.641},0).wait(1).to({scaleY:1.02,y:429.9,alpha:0.628},0).wait(1).to({scaleY:1.09,y:407,alpha:0.614},0).wait(1).to({scaleY:1.16,y:384.2,alpha:0.6},0).to({_off:true},1).wait(394));

	// blende
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,446,1,1,0,0,0,250,347);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).wait(1).to({scaleY:0.1,y:756.9,alpha:1},0).wait(1).to({scaleY:0.17,y:734.1},0).wait(1).to({scaleY:0.24,y:711.2},0).wait(1).to({scaleY:0.3,y:688.4},0).wait(1).to({scaleY:0.37,y:665.5},0).wait(1).to({scaleY:0.43,y:642.7},0).wait(1).to({scaleY:0.5,y:619.9},0).wait(1).to({scaleY:0.56,y:597.1},0).wait(1).to({scaleY:0.63,y:574.2},0).wait(1).to({scaleY:0.7,y:551.3},0).wait(1).to({scaleY:0.76,y:528.5},0).wait(1).to({scaleY:0.83,y:505.7},0).wait(1).to({scaleY:0.89,y:482.8},0).wait(1).to({scaleY:0.96,y:459.9},0).wait(1).to({scaleY:1.03,y:437.1},0).wait(1).to({scaleY:1.09,y:414.3},0).wait(1).to({scaleY:1.16,y:391.5},0).wait(394));

	// tge
	this.instance_6 = new lib.tge();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25,31);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({_off:true},164).wait(313));

	// ponyhof
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(219,59.5,1,1,0,0,0,195,38.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(103).to({_off:true},1).wait(488));

	// foto
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(295.8,349.9,1,1,0,0,0,666.5,349.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:293.2},0).wait(1).to({x:290.5},0).wait(1).to({x:287.9},0).wait(1).to({x:285.3},0).wait(1).to({x:282.6},0).wait(1).to({x:280},0).wait(1).to({x:277.4},0).wait(1).to({x:274.7},0).wait(1).to({x:272.1},0).wait(1).to({x:269.5},0).wait(1).to({x:266.8},0).wait(1).to({x:264.2},0).wait(1).to({x:261.6},0).wait(1).to({x:258.9},0).wait(1).to({x:256.3},0).wait(1).to({x:253.7},0).wait(1).to({x:251},0).wait(1).to({x:248.4},0).wait(1).to({x:245.8},0).wait(1).to({x:243.1},0).wait(1).to({x:240.5},0).wait(1).to({x:237.9},0).wait(1).to({x:235.2},0).wait(1).to({x:232.6},0).wait(1).to({x:230},0).wait(1).to({x:227.3},0).wait(1).to({x:224.7},0).wait(1).to({x:222.1},0).wait(1).to({x:219.5},0).wait(1).to({x:216.8},0).wait(1).to({x:214.2},0).wait(1).to({x:211.6},0).wait(1).to({x:208.9},0).wait(1).to({x:206.3},0).wait(1).to({x:203.7},0).wait(1).to({x:201},0).wait(1).to({x:198.4},0).wait(1).to({x:195.8},0).wait(1).to({x:193.1},0).wait(1).to({x:190.5},0).wait(1).to({x:187.9},0).wait(1).to({x:185.2},0).wait(1).to({x:182.6},0).wait(1).to({x:180},0).wait(1).to({x:177.3},0).wait(1).to({x:174.7},0).wait(1).to({x:172.1},0).wait(1).to({x:169.4},0).wait(1).to({x:166.8},0).wait(1).to({x:164.2},0).wait(1).to({x:161.5},0).wait(1).to({x:158.9},0).wait(1).to({x:156.3},0).wait(1).to({x:153.6},0).wait(1).to({x:151},0).wait(1).to({x:148.4},0).wait(1).to({x:145.7},0).wait(1).to({x:143.1},0).wait(1).to({x:140.5},0).wait(1).to({x:137.8},0).wait(1).to({x:135.2},0).wait(1).to({x:132.6},0).wait(1).to({x:129.9},0).wait(1).to({x:127.3},0).wait(1).to({x:124.7},0).wait(1).to({x:122},0).wait(1).to({x:119.4},0).wait(1).to({x:116.8},0).wait(1).to({x:114.1},0).wait(1).to({x:111.5},0).wait(1).to({x:108.9},0).wait(1).to({x:106.2},0).wait(1).to({x:103.6},0).wait(1).to({x:101},0).wait(1).to({x:98.4},0).wait(1).to({x:95.7},0).wait(1).to({x:93.1},0).wait(1).to({x:90.4},0).wait(1).to({x:87.8},0).wait(1).to({x:85.2},0).wait(1).to({x:82.6},0).wait(1).to({x:79.9},0).wait(1).to({x:77.3},0).wait(1).to({x:74.7},0).wait(1).to({x:72},0).wait(1).to({x:69.4},0).wait(1).to({x:66.8},0).wait(1).to({x:64.1},0).wait(1).to({x:61.5},0).wait(1).to({x:58.9},0).wait(1).to({x:56.2},0).wait(1).to({x:53.6},0).wait(1).to({x:51},0).wait(1).to({x:48.3},0).wait(1).to({x:45.7},0).wait(1).to({x:43.1},0).wait(1).to({x:40.4},0).wait(1).to({x:37.8},0).wait(1).to({x:35.2},0).wait(1).to({x:32.5},0).wait(1).to({x:29.9},0).wait(1).to({x:27.3},0).wait(1).to({x:24.6},0).wait(1).to({x:22},0).wait(183).to({_off:true},1).wait(313));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,500,1332.9,1006);
// library properties:
lib.properties = {
	id: '66B4ED7846197346959654EF6606C1B1',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Animation_atlas_.png", id:"Animation_atlas_"}
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
an.compositions['66B4ED7846197346959654EF6606C1B1'] = {
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