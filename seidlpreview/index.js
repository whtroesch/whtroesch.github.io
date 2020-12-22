(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1120,330],[0,332,1120,260],[1122,126,384,40],[0,594,595,133],[1122,84,391,40],[1122,168,349,40],[1122,42,446,40],[597,594,527,60],[1122,0,479,40]]}
];


// symbols:



(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gleisdorf = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mehrals = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.neuwertig = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.oberwart = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.qualitaet = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.schlaue = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
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
	this.instance = new lib.gleisdorf();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,384,40), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.oberwart();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,446,40), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schlaue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,479,40), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.neuwertig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,349,40), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.mehrals();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,391,40), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.qualitaet();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,527,60), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,595,133), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// olow
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(210,192,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).wait(56));

	// oberwart
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(485,225,1,1,0,0,0,223,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).wait(1).to({y:215.75},0).wait(1).to({y:206.5},0).wait(1).to({y:197.25},0).wait(1).to({y:188},0).wait(1).to({y:178.75},0).wait(1).to({y:169.5},0).wait(1).to({y:160.25},0).wait(1).to({y:151},0).wait(40).to({y:160},0).wait(1).to({y:169},0).wait(1).to({y:178},0).wait(1).to({y:187},0).wait(1).to({y:196},0).wait(1).to({y:205},0).wait(1).to({y:214},0).wait(1).to({y:223},0).wait(1));

	// olgd
	this.instance_2 = new lib.CachedBmp_39();
	this.instance_2.setTransform(210,136,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).wait(56));

	// gleisdorf
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(460,164,1,1,0,0,0,192,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).wait(1).to({y:154.75},0).wait(1).to({y:145.5},0).wait(1).to({y:136.25},0).wait(1).to({y:127},0).wait(1).to({y:117.75},0).wait(1).to({y:108.5},0).wait(1).to({y:99.25},0).wait(1).to({y:90},0).wait(40).to({y:99},0).wait(1).to({y:108},0).wait(1).to({y:117},0).wait(1).to({y:126},0).wait(1).to({y:135},0).wait(1).to({y:144},0).wait(1).to({y:153},0).wait(1).to({y:162},0).wait(1));

	// olneu
	this.instance_4 = new lib.CachedBmp_37();
	this.instance_4.setTransform(210,192,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).to({_off:true},51).wait(56));

	// neuwerti
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(420.5,272,1,1,0,0,0,174.5,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({y:256.75},0).wait(1).to({y:241.5},0).wait(1).to({y:226.25},0).wait(1).to({y:211},0).wait(1).to({y:195.75},0).wait(1).to({y:180.5},0).wait(1).to({y:165.25},0).wait(1).to({y:150},0).wait(35).to({y:161.35},0).wait(1).to({y:172.7},0).wait(1).to({y:184.1},0).wait(1).to({y:195.45},0).wait(1).to({y:206.8},0).wait(1).to({y:218.2},0).wait(1).to({y:229.55},0).wait(1).to({y:240.95},0).to({_off:true},1).wait(56));

	// olschl
	this.instance_6 = new lib.CachedBmp_39();
	this.instance_6.setTransform(210,136,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({_off:true},51).wait(56));

	// schlaue
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(485.5,212,1,1,0,0,0,239.5,20);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({y:196.75},0).wait(1).to({y:181.5},0).wait(1).to({y:166.25},0).wait(1).to({y:151},0).wait(1).to({y:135.75},0).wait(1).to({y:120.5},0).wait(1).to({y:105.25},0).wait(1).to({y:90},0).wait(35).to({y:101.35},0).wait(1).to({y:112.7},0).wait(1).to({y:124.1},0).wait(1).to({y:135.45},0).wait(1).to({y:146.8},0).wait(1).to({y:158.2},0).wait(1).to({y:169.55},0).wait(1).to({y:180.95},0).to({_off:true},1).wait(56));

	// olqualw
	this.instance_8 = new lib.CachedBmp_37();
	this.instance_8.setTransform(210,192,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).wait(34).to({_off:true},17).wait(107));

	// qual
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(485.5,232,1,1,0,0,0,263.5,30);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).wait(1).to({y:221.6},0).wait(1).to({y:211.25},0).wait(1).to({y:200.85},0).wait(1).to({y:190.5},0).wait(1).to({y:180.1},0).wait(1).to({y:169.75},0).wait(1).to({y:159.35},0).wait(1).to({y:149},0).wait(35).to({y:159.35},0).wait(1).to({y:169.75},0).wait(1).to({y:180.1},0).wait(1).to({y:190.5},0).wait(1).to({y:200.85},0).wait(1).to({y:211.25},0).wait(1).to({y:221.6},0).wait(1).to({y:232},0).to({_off:true},1).wait(107));

	// olmehr
	this.instance_10 = new lib.CachedBmp_39();
	this.instance_10.setTransform(210,136,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).wait(34).to({_off:true},17).wait(107));

	// mehr
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(417.5,173,1,1,0,0,0,195.5,20);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({_off:false},0).wait(1).to({y:162.6},0).wait(1).to({y:152.25},0).wait(1).to({y:141.85},0).wait(1).to({y:131.5},0).wait(1).to({y:121.1},0).wait(1).to({y:110.75},0).wait(1).to({y:100.35},0).wait(1).to({y:90},0).wait(35).to({y:100.35},0).wait(1).to({y:110.75},0).wait(1).to({y:121.1},0).wait(1).to({y:131.5},0).wait(1).to({y:141.85},0).wait(1).to({y:152.25},0).wait(1).to({y:162.6},0).wait(1).to({y:173},0).to({_off:true},1).wait(107));

	// logo
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(485.5,125.5,1,1,0,0,0,297.5,66.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(34).to({alpha:0.8571},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(158));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(673,184,110,138);
// library properties:
lib.properties = {
	id: 'BE295D5B020B5941A9906F7CFD4E4893',
	width: 970,
	height: 250,
	fps: 24,
	color: "#002E48",
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
an.compositions['BE295D5B020B5941A9906F7CFD4E4893'] = {
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