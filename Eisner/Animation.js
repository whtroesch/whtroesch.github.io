(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animation_atlas_", frames: [[0,539,305,509],[0,1165,641,2],[307,539,298,314],[618,0,303,537],[607,852,295,311],[0,0,307,537],[607,539,300,311],[309,0,307,537]]}
];


// symbols:



(lib.Kasten = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Linie = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.t4 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.t5 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.t6 = function() {
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
	this.instance = new lib.Kasten();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,305,509), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,307,537), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,295,311), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,307,537), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,300,311), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,303,537), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,298,314), null);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// kasten
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(182.4,679.7,1,1,0,0,0,152.5,126);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).wait(1).to({regY:254.5,y:808.2,alpha:0.038},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.192},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.269},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.654},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:1},0).wait(1));

	// graus
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(490.5,274.5,1,1,0,0,0,153.5,268.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.418},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(1));

	// grau
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(488.5,-149.9,1,1,0,0,0,147.5,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-142.8},0).wait(1).to({y:-135.7},0).wait(1).to({y:-128.7},0).wait(1).to({y:-121.6},0).wait(1).to({y:-114.6},0).wait(1).to({y:-107.5},0).wait(1).to({y:-100.5},0).wait(1).to({y:-93.4},0).wait(1).to({y:-86.4},0).wait(1).to({y:-79.3},0).wait(1).to({y:-72.3},0).wait(1).to({y:-65.2},0).wait(1).to({y:-58.1},0).wait(1).to({y:-51.1},0).wait(1).to({y:-44},0).wait(1).to({y:-37},0).wait(1).to({y:-29.9},0).wait(1).to({y:-22.9},0).wait(1).to({y:-15.8},0).wait(1).to({y:-8.8},0).wait(1).to({y:-1.7},0).wait(1).to({y:5.3},0).wait(1).to({y:12.4},0).wait(1).to({y:19.5},0).wait(1).to({y:26.5},0).wait(1).to({y:33.6},0).wait(1).to({y:40.6},0).wait(1).to({y:47.7},0).wait(1).to({y:54.7},0).wait(1).to({y:61.8},0).wait(1).to({y:68.8},0).wait(1).to({y:75.9},0).wait(1).to({y:82.9},0).wait(1).to({y:90},0).wait(1).to({y:97.1},0).wait(1).to({y:104.1},0).wait(1).to({y:111.2},0).wait(1).to({y:118.2},0).wait(1).to({y:125.3},0).wait(1).to({y:132.3},0).wait(1).to({y:139.4},0).wait(1).to({y:146.4},0).wait(1).to({y:153.5},0).wait(1).to({y:160.5},0).wait(56));

	// schwarzs
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(169.5,273.5,1,1,0,0,0,153.5,268.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.418},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(1));

	// schwarz
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,-153.1,1,1,0,0,0,150,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-145.9},0).wait(1).to({y:-138.8},0).wait(1).to({y:-131.7},0).wait(1).to({y:-124.5},0).wait(1).to({y:-117.4},0).wait(1).to({y:-110.3},0).wait(1).to({y:-103.2},0).wait(1).to({y:-96},0).wait(1).to({y:-88.9},0).wait(1).to({y:-81.8},0).wait(1).to({y:-74.7},0).wait(1).to({y:-67.5},0).wait(1).to({y:-60.4},0).wait(1).to({y:-53.3},0).wait(1).to({y:-46.1},0).wait(1).to({y:-39},0).wait(1).to({y:-31.9},0).wait(1).to({y:-24.8},0).wait(1).to({y:-17.6},0).wait(1).to({y:-10.5},0).wait(1).to({y:-3.4},0).wait(1).to({y:3.7},0).wait(1).to({y:10.9},0).wait(1).to({y:18},0).wait(1).to({y:25.1},0).wait(1).to({y:32.3},0).wait(1).to({y:39.4},0).wait(1).to({y:46.5},0).wait(1).to({y:53.6},0).wait(1).to({y:60.8},0).wait(1).to({y:67.9},0).wait(1).to({y:75},0).wait(1).to({y:82.1},0).wait(1).to({y:89.3},0).wait(1).to({y:96.4},0).wait(1).to({y:103.5},0).wait(1).to({y:110.7},0).wait(1).to({y:117.8},0).wait(1).to({y:124.9},0).wait(1).to({y:132},0).wait(1).to({y:139.2},0).wait(1).to({y:146.3},0).wait(1).to({y:153.4},0).wait(1).to({y:160.5},0).wait(56));

	// rots
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(488.5,807.9,1,1,0,0,0,151.5,268.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.418},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(1));

	// rot
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(799,696.8,1,1,0,0,0,149,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:791.9},0).wait(1).to({x:784.8},0).wait(1).to({x:777.7},0).wait(1).to({x:770.6},0).wait(1).to({x:763.5},0).wait(1).to({x:756.5},0).wait(1).to({x:749.4},0).wait(1).to({x:742.3},0).wait(1).to({x:735.2},0).wait(1).to({x:728.1},0).wait(1).to({x:721},0).wait(1).to({x:713.9},0).wait(1).to({x:706.8},0).wait(1).to({x:699.7},0).wait(1).to({x:692.6},0).wait(1).to({x:685.5},0).wait(1).to({x:678.5},0).wait(1).to({x:671.4},0).wait(1).to({x:664.3},0).wait(1).to({x:657.2},0).wait(1).to({x:650.1},0).wait(1).to({x:643},0).wait(1).to({x:635.9},0).wait(1).to({x:628.8},0).wait(1).to({x:621.7},0).wait(1).to({x:614.6},0).wait(1).to({x:607.5},0).wait(1).to({x:600.5},0).wait(1).to({x:593.4},0).wait(1).to({x:586.3},0).wait(1).to({x:579.2},0).wait(1).to({x:572.1},0).wait(1).to({x:565},0).wait(1).to({x:557.9},0).wait(1).to({x:550.8},0).wait(1).to({x:543.7},0).wait(1).to({x:536.6},0).wait(1).to({x:529.5},0).wait(1).to({x:522.5},0).wait(1).to({x:515.4},0).wait(1).to({x:508.3},0).wait(1).to({x:501.2},0).wait(1).to({x:494.1},0).wait(1).to({x:487},0).wait(56));

	// bg
	this.instance_7 = new lib.Linie();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1,538,1.019,1);

	this.instance_8 = new lib.Linie();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5,3,1.03,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,241.4,953,1162.4);
// library properties:
lib.properties = {
	id: 'F11E674C655C8747B1BA02ADAD2B9E25',
	width: 650,
	height: 1100,
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
an.compositions['F11E674C655C8747B1BA02ADAD2B9E25'] = {
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