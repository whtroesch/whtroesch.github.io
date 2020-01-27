(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,997,1200],[0,1202,600,329],[389,1758,408,54],[389,1814,323,56],[602,1202,283,316],[0,1667,479,88],[481,1667,459,89],[588,1533,416,95],[0,1757,387,87],[0,1533,586,132]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackradiant = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.buttonbg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.goendle_schrift = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.t1_zukunft = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.t2_i3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.t3_bonus = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.t4_mehr = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.t5_disclaimer = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
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
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,997,1200), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t5_disclaimer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,586,132), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.buttonbg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,408,54), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t4_mehr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,387,87), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t3_bonus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,416,95), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t2_i3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.241,1.241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,569.5,110.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.t1_zukunft();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,479,88), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(300,1001,1,1,0,0,0,293,66);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(311).to({_off:false},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(46).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1));

	// t4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.5,992.5,1,1,0,0,0,193.5,43.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(141).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(48));

	// buttonbg
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(301.6,1019.9,1,1,0,0,0,204,27);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).wait(49).to({_off:true},1).wait(98));

	// t3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,996.5,1,1,0,0,0,208,47.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(45).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(191));

	// t2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(251.5,985.8,0.857,0.857,0,0,0,228.1,44);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).wait(1).to({regX:284.7,regY:55.2,x:300,y:995.4,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(49).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(239));

	// t1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300.5,993,1,1,0,0,0,239.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(291));

	// logo
	this.instance_6 = new lib.goendle_schrift();
	this.instance_6.parent = this;
	this.instance_6.setTransform(139,1122);

	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(395,24,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(363));

	// black
	this.instance_8 = new lib.blackradiant();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,790,1,1.247);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(363));

	// bg
	this.instance_9 = new lib.Symbol7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(203.5,600,1,1,0,0,0,498.5,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:204.3},0).wait(1).to({x:205},0).wait(1).to({x:205.8},0).wait(1).to({x:206.5},0).wait(1).to({x:207.3},0).wait(1).to({x:208},0).wait(1).to({x:208.8},0).wait(1).to({x:209.5},0).wait(1).to({x:210.3},0).wait(1).to({x:211},0).wait(1).to({x:211.8},0).wait(1).to({x:212.5},0).wait(1).to({x:213.3},0).wait(1).to({x:214},0).wait(1).to({x:214.8},0).wait(1).to({x:215.5},0).wait(1).to({x:216.2},0).wait(1).to({x:217},0).wait(1).to({x:217.7},0).wait(1).to({x:218.5},0).wait(1).to({x:219.2},0).wait(1).to({x:220},0).wait(1).to({x:220.7},0).wait(1).to({x:221.5},0).wait(1).to({x:222.2},0).wait(1).to({x:223},0).wait(1).to({x:223.7},0).wait(1).to({x:224.5},0).wait(1).to({x:225.2},0).wait(1).to({x:226},0).wait(1).to({x:226.7},0).wait(1).to({x:227.5},0).wait(1).to({x:228.2},0).wait(1).to({x:228.9},0).wait(1).to({x:229.7},0).wait(1).to({x:230.4},0).wait(1).to({x:231.2},0).wait(1).to({x:231.9},0).wait(1).to({x:232.7},0).wait(1).to({x:233.4},0).wait(1).to({x:234.2},0).wait(1).to({x:234.9},0).wait(1).to({x:235.7},0).wait(1).to({x:236.4},0).wait(1).to({x:237.2},0).wait(1).to({x:237.9},0).wait(1).to({x:238.7},0).wait(1).to({x:239.4},0).wait(1).to({x:240.2},0).wait(1).to({x:240.9},0).wait(1).to({x:241.6},0).wait(1).to({x:242.4},0).wait(1).to({x:243.1},0).wait(1).to({x:243.9},0).wait(1).to({x:244.6},0).wait(1).to({x:245.4},0).wait(1).to({x:246.1},0).wait(1).to({x:246.9},0).wait(1).to({x:247.6},0).wait(1).to({x:248.4},0).wait(1).to({x:249.1},0).wait(1).to({x:249.9},0).wait(1).to({x:250.6},0).wait(1).to({x:251.4},0).wait(1).to({x:252.1},0).wait(1).to({x:252.9},0).wait(1).to({x:253.6},0).wait(1).to({x:254.3},0).wait(1).to({x:255.1},0).wait(1).to({x:255.8},0).wait(1).to({x:256.6},0).wait(1).to({x:257.3},0).wait(1).to({x:258.1},0).wait(1).to({x:258.8},0).wait(1).to({x:259.6},0).wait(1).to({x:260.3},0).wait(1).to({x:261.1},0).wait(1).to({x:261.8},0).wait(1).to({x:262.6},0).wait(1).to({x:263.3},0).wait(1).to({x:264.1},0).wait(1).to({x:264.8},0).wait(1).to({x:265.6},0).wait(1).to({x:266.3},0).wait(1).to({x:267},0).wait(1).to({x:267.8},0).wait(1).to({x:268.5},0).wait(1).to({x:269.3},0).wait(1).to({x:270},0).wait(1).to({x:270.8},0).wait(1).to({x:271.5},0).wait(1).to({x:272.3},0).wait(1).to({x:273},0).wait(1).to({x:273.8},0).wait(1).to({x:274.5},0).wait(1).to({x:275.3},0).wait(1).to({x:276},0).wait(1).to({x:276.8},0).wait(1).to({x:277.5},0).wait(1).to({x:278.2},0).wait(212).to({x:276.8},0).wait(1).to({x:275.3},0).wait(1).to({x:273.9},0).wait(1).to({x:272.4},0).wait(1).to({x:270.9},0).wait(1).to({x:269.5},0).wait(1).to({x:268},0).wait(1).to({x:266.5},0).wait(1).to({x:265.1},0).wait(1).to({x:263.6},0).wait(1).to({x:262.1},0).wait(1).to({x:260.7},0).wait(1).to({x:259.2},0).wait(1).to({x:257.7},0).wait(1).to({x:256.3},0).wait(1).to({x:254.8},0).wait(1).to({x:253.3},0).wait(1).to({x:251.9},0).wait(1).to({x:250.4},0).wait(1).to({x:249},0).wait(1).to({x:247.5},0).wait(1).to({x:246},0).wait(1).to({x:244.6},0).wait(1).to({x:243.1},0).wait(1).to({x:241.6},0).wait(1).to({x:240.2},0).wait(1).to({x:238.7},0).wait(1).to({x:237.2},0).wait(1).to({x:235.8},0).wait(1).to({x:234.3},0).wait(1).to({x:232.8},0).wait(1).to({x:231.4},0).wait(1).to({x:229.9},0).wait(1).to({x:228.4},0).wait(1).to({x:227},0).wait(1).to({x:225.5},0).wait(1).to({x:224.1},0).wait(1).to({x:222.6},0).wait(1).to({x:221.1},0).wait(1).to({x:219.7},0).wait(1).to({x:218.2},0).wait(1).to({x:216.7},0).wait(1).to({x:215.3},0).wait(1).to({x:213.8},0).wait(1).to({x:212.3},0).wait(1).to({x:210.9},0).wait(1).to({x:209.4},0).wait(1).to({x:207.9},0).wait(1).to({x:206.5},0).wait(1).to({x:205},0).wait(1).to({x:203.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,600,997,1200.3);
// library properties:
lib.properties = {
	id: '023B906DC1CEDB43AAF84C23D16D1F4C',
	width: 600,
	height: 1200,
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
an.compositions['023B906DC1CEDB43AAF84C23D16D1F4C'] = {
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