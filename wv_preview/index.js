(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,504,485,100],[0,0,970,250],[487,504,228,38],[0,606,616,68],[0,676,616,68],[0,252,970,250],[0,746,616,68]]}
];


// symbols:



(lib.abdeckung = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.finanzierung = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.servicepaket = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.versicherung = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
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
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,228,38), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.servicepaket();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,616,68), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.finanzierung();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,616,68), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.versicherung();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,616,68), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,970,250), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(308,34,1,1,0,0,0,308,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,616,68), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(308,34,1,1,0,0,0,308,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616,68);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol7();
	this.instance.setTransform(127,209,1,1,0,0,0,114,19);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({alpha:0.0278},0).wait(1).to({alpha:0.0556},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1389},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.1944},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2778},0).wait(1).to({alpha:0.3056},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3611},0).wait(1).to({alpha:0.3889},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4722},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5278},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6111},0).wait(1).to({alpha:0.6389},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6944},0).wait(1).to({alpha:0.7222},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8056},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8611},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.9444},0).wait(1).to({alpha:0.9722},0).wait(1).to({alpha:1},0).wait(327));

	// text
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(363));

	// abdeckung
	this.instance_2 = new lib.abdeckung();
	this.instance_2.setTransform(8,172,1.1608,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(386));

	// abdeckung_oben
	this.instance_3 = new lib.abdeckung();
	this.instance_3.setTransform(12,24,1.1608,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(386));

	// service
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(299,107,1,1,0,0,0,308,34);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(299,105,1,1,0,0,0,308,34);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).wait(1).to({y:109.3},0).wait(1).to({y:111.6},0).wait(1).to({y:113.9},0).wait(1).to({y:116.2},0).wait(1).to({y:118.5},0).wait(1).to({y:120.8},0).wait(1).to({y:123.1},0).wait(1).to({y:125.4},0).wait(1).to({y:127.7},0).wait(1).to({y:130},0).wait(1).to({y:132.3},0).wait(1).to({y:134.6},0).wait(1).to({y:136.9},0).wait(1).to({y:139.2},0).wait(1).to({y:141.5},0).wait(1).to({y:143.8},0).wait(1).to({y:146.1},0).wait(1).to({y:148.4},0).wait(1).to({y:150.7},0).wait(1).to({y:153},0).wait(20).to({y:154.8},0).wait(1).to({y:156.6},0).wait(1).to({y:158.4},0).wait(1).to({y:160.2},0).wait(1).to({y:162},0).wait(1).to({y:163.85},0).wait(1).to({y:165.65},0).wait(1).to({y:167.45},0).wait(1).to({y:169.25},0).wait(1).to({y:171.05},0).wait(1).to({y:172.9},0).wait(1).to({y:174.7},0).wait(1).to({y:176.5},0).wait(1).to({y:178.3},0).wait(1).to({y:180.1},0).wait(1).to({y:181.95},0).wait(1).to({y:183.75},0).wait(1).to({y:185.55},0).wait(1).to({y:187.35},0).wait(1).to({y:189.15},0).wait(1).to({y:191},0).wait(109).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(313).to({_off:false},0).wait(1).to({y:106.9},0).wait(1).to({y:108.8},0).wait(1).to({y:110.75},0).wait(1).to({y:112.65},0).wait(1).to({y:114.6},0).wait(1).to({y:116.5},0).wait(1).to({y:118.4},0).wait(1).to({y:120.35},0).wait(1).to({y:122.25},0).wait(1).to({y:124.2},0).wait(1).to({y:126.1},0).wait(1).to({y:128},0).wait(1).to({y:129.95},0).wait(1).to({y:131.85},0).wait(1).to({y:133.8},0).wait(1).to({y:135.7},0).wait(1).to({y:137.6},0).wait(1).to({y:139.55},0).wait(1).to({y:141.45},0).wait(1).to({y:143.4},0).wait(1).to({y:145.3},0).wait(1).to({y:147.2},0).wait(1).to({y:149.15},0).wait(1).to({y:151.05},0).wait(1).to({y:153},0).wait(24).to({y:154.6},0).wait(1).to({y:156.25},0).wait(1).to({y:157.85},0).wait(1).to({y:159.5},0).wait(1).to({y:161.1},0).wait(1).to({y:162.75},0).wait(1).to({y:164.35},0).wait(1).to({y:166},0).wait(1).to({y:167.6},0).wait(1).to({y:169.25},0).wait(1).to({y:170.85},0).wait(1).to({y:172.5},0).wait(1).to({y:174.1},0).wait(1).to({y:175.75},0).wait(1).to({y:177.35},0).wait(1).to({y:179},0).wait(1).to({y:180.6},0).wait(1).to({y:182.25},0).wait(1).to({y:183.85},0).wait(1).to({y:185.5},0).wait(1).to({y:187.1},0).wait(1).to({y:188.75},0).wait(1).to({y:190.35},0).wait(1).to({y:192},0).wait(1));

	// versicherung
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(299,105,1,1,0,0,0,308,34);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83).to({_off:false},0).wait(1).to({y:106.9},0).wait(1).to({y:108.8},0).wait(1).to({y:110.75},0).wait(1).to({y:112.65},0).wait(1).to({y:114.6},0).wait(1).to({y:116.5},0).wait(1).to({y:118.4},0).wait(1).to({y:120.35},0).wait(1).to({y:122.25},0).wait(1).to({y:124.2},0).wait(1).to({y:126.1},0).wait(1).to({y:128},0).wait(1).to({y:129.95},0).wait(1).to({y:131.85},0).wait(1).to({y:133.8},0).wait(1).to({y:135.7},0).wait(1).to({y:137.6},0).wait(1).to({y:139.55},0).wait(1).to({y:141.45},0).wait(1).to({y:143.4},0).wait(1).to({y:145.3},0).wait(1).to({y:147.2},0).wait(1).to({y:149.15},0).wait(1).to({y:151.05},0).wait(1).to({y:153},0).wait(24).to({y:154.6},0).wait(1).to({y:156.25},0).wait(1).to({y:157.85},0).wait(1).to({y:159.5},0).wait(1).to({y:161.1},0).wait(1).to({y:162.75},0).wait(1).to({y:164.35},0).wait(1).to({y:166},0).wait(1).to({y:167.6},0).wait(1).to({y:169.25},0).wait(1).to({y:170.85},0).wait(1).to({y:172.5},0).wait(1).to({y:174.1},0).wait(1).to({y:175.75},0).wait(1).to({y:177.35},0).wait(1).to({y:179},0).wait(1).to({y:180.6},0).wait(1).to({y:182.25},0).wait(1).to({y:183.85},0).wait(1).to({y:185.5},0).wait(1).to({y:187.1},0).wait(1).to({y:188.75},0).wait(1).to({y:190.35},0).wait(1).to({y:192},0).wait(98).to({y:105},0).wait(1).to({y:106.9},0).wait(1).to({y:108.8},0).wait(1).to({y:110.75},0).wait(1).to({y:112.65},0).wait(1).to({y:114.6},0).wait(1).to({y:116.5},0).wait(1).to({y:118.4},0).wait(1).to({y:120.35},0).wait(1).to({y:122.25},0).wait(1).to({y:124.2},0).wait(1).to({y:126.1},0).wait(1).to({y:128},0).wait(1).to({y:129.95},0).wait(1).to({y:131.85},0).wait(1).to({y:133.8},0).wait(1).to({y:135.7},0).wait(1).to({y:137.6},0).wait(1).to({y:139.55},0).wait(1).to({y:141.45},0).wait(1).to({y:143.4},0).wait(1).to({y:145.3},0).wait(1).to({y:147.2},0).wait(1).to({y:149.15},0).wait(1).to({y:151.05},0).wait(1).to({y:153},0).wait(24).to({y:154.6},0).wait(1).to({y:156.25},0).wait(1).to({y:157.85},0).wait(1).to({y:159.5},0).wait(1).to({y:161.1},0).wait(1).to({y:162.75},0).wait(1).to({y:164.35},0).wait(1).to({y:166},0).wait(1).to({y:167.6},0).wait(1).to({y:169.25},0).wait(1).to({y:170.85},0).wait(1).to({y:172.5},0).wait(1).to({y:174.1},0).wait(1).to({y:175.75},0).wait(1).to({y:177.35},0).wait(1).to({y:179},0).wait(1).to({y:180.6},0).wait(1).to({y:182.25},0).wait(1).to({y:183.85},0).wait(1).to({y:185.5},0).wait(1).to({y:187.1},0).wait(1).to({y:188.75},0).wait(1).to({y:190.35},0).wait(1).to({y:192},0).to({_off:true},1).wait(60));

	// finanzierung
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(299,106,1,1,0,0,0,308,34);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).wait(1).to({y:107.95},0).wait(1).to({y:109.9},0).wait(1).to({y:111.85},0).wait(1).to({y:113.8},0).wait(1).to({y:115.75},0).wait(1).to({y:117.75},0).wait(1).to({y:119.7},0).wait(1).to({y:121.65},0).wait(1).to({y:123.6},0).wait(1).to({y:125.55},0).wait(1).to({y:127.5},0).wait(1).to({y:129.5},0).wait(1).to({y:131.45},0).wait(1).to({y:133.4},0).wait(1).to({y:135.35},0).wait(1).to({y:137.3},0).wait(1).to({y:139.25},0).wait(1).to({y:141.25},0).wait(1).to({y:143.2},0).wait(1).to({y:145.15},0).wait(1).to({y:147.1},0).wait(1).to({y:149.05},0).wait(1).to({y:151},0).wait(1).to({y:153},0).wait(25).to({y:154.6},0).wait(1).to({y:156.2},0).wait(1).to({y:157.8},0).wait(1).to({y:159.4},0).wait(1).to({y:161},0).wait(1).to({y:162.6},0).wait(1).to({y:164.2},0).wait(1).to({y:165.8},0).wait(1).to({y:167.4},0).wait(1).to({y:169},0).wait(1).to({y:170.6},0).wait(1).to({y:172.2},0).wait(1).to({y:173.8},0).wait(1).to({y:175.4},0).wait(1).to({y:177},0).wait(1).to({y:178.6},0).wait(1).to({y:180.2},0).wait(1).to({y:181.8},0).wait(1).to({y:183.4},0).wait(1).to({y:185},0).wait(1).to({y:186.6},0).wait(1).to({y:188.2},0).wait(1).to({y:189.8},0).wait(1).to({y:191.4},0).wait(1).to({y:193},0).to({_off:true},1).wait(96).to({_off:false,y:106},0).wait(1).to({y:107.95},0).wait(1).to({y:109.9},0).wait(1).to({y:111.85},0).wait(1).to({y:113.8},0).wait(1).to({y:115.75},0).wait(1).to({y:117.75},0).wait(1).to({y:119.7},0).wait(1).to({y:121.65},0).wait(1).to({y:123.6},0).wait(1).to({y:125.55},0).wait(1).to({y:127.5},0).wait(1).to({y:129.5},0).wait(1).to({y:131.45},0).wait(1).to({y:133.4},0).wait(1).to({y:135.35},0).wait(1).to({y:137.3},0).wait(1).to({y:139.25},0).wait(1).to({y:141.25},0).wait(1).to({y:143.2},0).wait(1).to({y:145.15},0).wait(1).to({y:147.1},0).wait(1).to({y:149.05},0).wait(1).to({y:151},0).wait(1).to({y:153},0).wait(25).to({y:154.6},0).wait(1).to({y:156.2},0).wait(1).to({y:157.8},0).wait(1).to({y:159.4},0).wait(1).to({y:161},0).wait(1).to({y:162.6},0).wait(1).to({y:164.2},0).wait(1).to({y:165.8},0).wait(1).to({y:167.4},0).wait(1).to({y:169},0).wait(1).to({y:170.6},0).wait(1).to({y:172.2},0).wait(1).to({y:173.8},0).wait(1).to({y:175.4},0).wait(1).to({y:177},0).wait(1).to({y:178.6},0).wait(1).to({y:180.2},0).wait(1).to({y:181.8},0).wait(1).to({y:183.4},0).wait(1).to({y:185},0).wait(1).to({y:186.6},0).wait(1).to({y:188.2},0).wait(1).to({y:189.8},0).wait(1).to({y:191.4},0).wait(1).to({y:193},0).to({_off:true},1).wait(119));

	// logo
	this.instance_8 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(386));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,125,494,147);
// library properties:
lib.properties = {
	id: '332395EAE7F53640A7B61A76C58077F5',
	width: 970,
	height: 250,
	fps: 24,
	color: "#050C1F",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['332395EAE7F53640A7B61A76C58077F5'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;