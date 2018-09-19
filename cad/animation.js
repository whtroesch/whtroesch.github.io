(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_", frames: [[0,300,249,42],[0,0,403,250],[0,252,320,46]]}
];


// symbols:



(lib.button = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.foto = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(2);
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.foto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,403,250), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-127,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-137,y:-23},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-21,249,42);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(160.6,211.1,0.926,0.926);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288));

	// foto
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.5,125,1,1,0,0,0,201.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:201.1},0).wait(1).to({x:200.7},0).wait(1).to({x:200.3},0).wait(1).to({x:199.9},0).wait(1).to({x:199.4},0).wait(1).to({x:199},0).wait(1).to({x:198.6},0).wait(1).to({x:198.2},0).wait(1).to({x:197.7},0).wait(1).to({x:197.3},0).wait(1).to({x:196.9},0).wait(1).to({x:196.5},0).wait(1).to({x:196},0).wait(1).to({x:195.6},0).wait(1).to({x:195.2},0).wait(1).to({x:194.8},0).wait(1).to({x:194.3},0).wait(1).to({x:193.9},0).wait(1).to({x:193.5},0).wait(1).to({x:193.1},0).wait(1).to({x:192.6},0).wait(1).to({x:192.2},0).wait(1).to({x:191.8},0).wait(1).to({x:191.4},0).wait(1).to({x:190.9},0).wait(1).to({x:190.5},0).wait(1).to({x:190.1},0).wait(1).to({x:189.7},0).wait(1).to({x:189.3},0).wait(1).to({x:188.8},0).wait(1).to({x:188.4},0).wait(1).to({x:188},0).wait(1).to({x:187.6},0).wait(1).to({x:187.1},0).wait(1).to({x:186.7},0).wait(1).to({x:186.3},0).wait(1).to({x:185.9},0).wait(1).to({x:185.4},0).wait(1).to({x:185},0).wait(1).to({x:184.6},0).wait(1).to({x:184.2},0).wait(1).to({x:183.7},0).wait(1).to({x:183.3},0).wait(1).to({x:182.9},0).wait(1).to({x:182.5},0).wait(1).to({x:182},0).wait(1).to({x:181.6},0).wait(1).to({x:181.2},0).wait(1).to({x:180.8},0).wait(1).to({x:180.3},0).wait(1).to({x:179.9},0).wait(1).to({x:179.5},0).wait(1).to({x:179.1},0).wait(1).to({x:178.6},0).wait(1).to({x:178.2},0).wait(1).to({x:177.8},0).wait(1).to({x:177.4},0).wait(1).to({x:177},0).wait(1).to({x:176.5},0).wait(1).to({x:176.1},0).wait(1).to({x:175.7},0).wait(1).to({x:175.3},0).wait(1).to({x:174.8},0).wait(1).to({x:174.4},0).wait(1).to({x:174},0).wait(1).to({x:173.6},0).wait(1).to({x:173.1},0).wait(1).to({x:172.7},0).wait(1).to({x:172.3},0).wait(1).to({x:171.9},0).wait(1).to({x:171.4},0).wait(1).to({x:171},0).wait(1).to({x:170.6},0).wait(1).to({x:170.2},0).wait(1).to({x:169.7},0).wait(1).to({x:169.3},0).wait(1).to({x:168.9},0).wait(1).to({x:168.5},0).wait(1).to({x:168},0).wait(1).to({x:167.6},0).wait(1).to({x:167.2},0).wait(1).to({x:166.8},0).wait(1).to({x:166.4},0).wait(1).to({x:165.9},0).wait(1).to({x:165.5},0).wait(1).to({x:165.1},0).wait(1).to({x:164.7},0).wait(1).to({x:164.2},0).wait(1).to({x:163.8},0).wait(1).to({x:163.4},0).wait(1).to({x:163},0).wait(1).to({x:162.5},0).wait(1).to({x:162.1},0).wait(1).to({x:161.7},0).wait(1).to({x:161.3},0).wait(1).to({x:160.8},0).wait(1).to({x:160.4},0).wait(1).to({x:160},0).wait(1).to({x:159.6},0).wait(1).to({x:159.1},0).wait(1).to({x:158.7},0).wait(1).to({x:158.3},0).wait(1).to({x:157.9},0).wait(1).to({x:157.4},0).wait(1).to({x:157},0).wait(1).to({x:156.6},0).wait(1).to({x:156.2},0).wait(1).to({x:155.7},0).wait(1).to({x:155.3},0).wait(1).to({x:154.9},0).wait(1).to({x:154.5},0).wait(1).to({x:154.1},0).wait(1).to({x:153.6},0).wait(1).to({x:153.2},0).wait(1).to({x:152.8},0).wait(1).to({x:152.4},0).wait(1).to({x:151.9},0).wait(1).to({x:151.5},0).wait(1).to({x:151.1},0).wait(1).to({x:150.7},0).wait(1).to({x:150.2},0).wait(1).to({x:149.8},0).wait(1).to({x:149.4},0).wait(1).to({x:149},0).wait(1).to({x:148.5},0).wait(1).to({x:148.1},0).wait(1).to({x:147.7},0).wait(1).to({x:147.3},0).wait(1).to({x:146.8},0).wait(1).to({x:146.4},0).wait(1).to({x:146},0).wait(1).to({x:145.6},0).wait(1).to({x:145.1},0).wait(1).to({x:144.7},0).wait(1).to({x:144.3},0).wait(1).to({x:143.9},0).wait(1).to({x:143.5},0).wait(1).to({x:143},0).wait(1).to({x:142.6},0).wait(1).to({x:142.2},0).wait(1).to({x:141.8},0).wait(1).to({x:141.3},0).wait(1).to({x:140.9},0).wait(1).to({x:140.5},0).wait(1).to({x:140.1},0).wait(1).to({x:139.6},0).wait(1).to({x:139.2},0).wait(1).to({x:138.8},0).wait(1).to({x:138.4},0).wait(1).to({x:137.9},0).wait(1).to({x:137.5},0).wait(1).to({x:137.1},0).wait(1).to({x:136.7},0).wait(1).to({x:136.2},0).wait(1).to({x:135.8},0).wait(1).to({x:135.4},0).wait(1).to({x:135},0).wait(1).to({x:134.5},0).wait(1).to({x:134.1},0).wait(1).to({x:133.7},0).wait(1).to({x:133.3},0).wait(1).to({x:132.8},0).wait(1).to({x:132.4},0).wait(1).to({x:132},0).wait(1).to({x:131.6},0).wait(1).to({x:131.2},0).wait(1).to({x:130.7},0).wait(1).to({x:130.3},0).wait(1).to({x:129.9},0).wait(1).to({x:129.5},0).wait(1).to({x:129},0).wait(1).to({x:128.6},0).wait(1).to({x:128.2},0).wait(1).to({x:127.8},0).wait(1).to({x:127.3},0).wait(1).to({x:126.9},0).wait(1).to({x:126.5},0).wait(1).to({x:126.1},0).wait(1).to({x:125.6},0).wait(1).to({x:125.2},0).wait(1).to({x:124.8},0).wait(1).to({x:124.4},0).wait(1).to({x:123.9},0).wait(1).to({x:123.5},0).wait(1).to({x:123.1},0).wait(1).to({x:122.7},0).wait(1).to({x:122.2},0).wait(1).to({x:121.8},0).wait(1).to({x:121.4},0).wait(1).to({x:121},0).wait(1).to({x:120.5},0).wait(1).to({x:121},0).wait(1).to({x:121.4},0).wait(1).to({x:121.8},0).wait(1).to({x:122.2},0).wait(1).to({x:122.6},0).wait(1).to({x:123},0).wait(1).to({x:123.4},0).wait(1).to({x:123.8},0).wait(1).to({x:124.2},0).wait(1).to({x:124.6},0).wait(1).to({x:125},0).wait(1).to({x:125.4},0).wait(1).to({x:125.8},0).wait(1).to({x:126.2},0).wait(1).to({x:126.6},0).wait(1).to({x:127},0).wait(1).to({x:127.5},0).wait(1).to({x:127.9},0).wait(1).to({x:128.3},0).wait(1).to({x:128.7},0).wait(1).to({x:129.1},0).wait(1).to({x:129.5},0).wait(1).to({x:129.9},0).wait(1).to({x:130.3},0).wait(1).to({x:130.7},0).wait(1).to({x:131.1},0).wait(1).to({x:131.5},0).wait(1).to({x:131.9},0).wait(1).to({x:132.3},0).wait(1).to({x:132.7},0).wait(1).to({x:133.1},0).wait(1).to({x:133.5},0).wait(1).to({x:134},0).wait(1).to({x:134.4},0).wait(1).to({x:134.8},0).wait(1).to({x:135.2},0).wait(1).to({x:135.6},0).wait(1).to({x:136},0).wait(1).to({x:136.4},0).wait(1).to({x:136.8},0).wait(1).to({x:137.2},0).wait(1).to({x:137.6},0).wait(1).to({x:138},0).wait(1).to({x:138.4},0).wait(1).to({x:138.8},0).wait(1).to({x:139.2},0).wait(1).to({x:139.6},0).wait(1).to({x:140},0).wait(1).to({x:140.5},0).wait(1).to({x:140.9},0).wait(1).to({x:141.3},0).wait(1).to({x:141.7},0).wait(1).to({x:142.1},0).wait(1).to({x:142.5},0).wait(1).to({x:142.9},0).wait(1).to({x:143.3},0).wait(1).to({x:143.7},0).wait(1).to({x:144.1},0).wait(1).to({x:144.5},0).wait(1).to({x:144.9},0).wait(1).to({x:145.3},0).wait(1).to({x:145.7},0).wait(1).to({x:146.1},0).wait(1).to({x:146.5},0).wait(1).to({x:147},0).wait(1).to({x:147.4},0).wait(1).to({x:147.8},0).wait(1).to({x:148.2},0).wait(1).to({x:148.6},0).wait(1).to({x:149},0).wait(1).to({x:149.4},0).wait(1).to({x:149.8},0).wait(1).to({x:150.2},0).wait(1).to({x:150.6},0).wait(1).to({x:151},0).wait(1).to({x:151.4},0).wait(1).to({x:151.8},0).wait(1).to({x:152.2},0).wait(1).to({x:152.6},0).wait(1).to({x:153},0).wait(1).to({x:153.5},0).wait(1).to({x:153.9},0).wait(1).to({x:154.3},0).wait(1).to({x:154.7},0).wait(1).to({x:155.1},0).wait(1).to({x:155.5},0).wait(1).to({x:155.9},0).wait(1).to({x:156.3},0).wait(1).to({x:156.7},0).wait(1).to({x:157.1},0).wait(1).to({x:157.5},0).wait(1).to({x:157.9},0).wait(1).to({x:158.3},0).wait(1).to({x:158.7},0).wait(1).to({x:159.1},0).wait(1).to({x:159.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,125,403,250);
// library properties:
lib.properties = {
	id: '3263BB972D8E5C4F93E631D26671AD43',
	width: 320,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_atlas_.png", id:"animation_atlas_"}
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
an.compositions['3263BB972D8E5C4F93E631D26671AD43'] = {
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