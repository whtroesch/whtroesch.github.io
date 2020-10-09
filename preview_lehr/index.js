(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,500,1000],[0,1002,500,1000],[502,0,500,1000],[502,1002,500,1000],[1004,0,500,1000]]}
];


// symbols:



(lib.adresse = function() {
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



(lib.logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.initialize(ss["index_atlas_"]);
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
	this.instance = new lib.adresse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,500,1000), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// adresse
	this.instance = new lib.Symbol4();
	this.instance.setTransform(533.5,500,1,1,0,0,0,250,500);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({x:524.6},0).wait(1).to({x:515.75},0).wait(1).to({x:506.9},0).wait(1).to({x:498.05},0).wait(1).to({x:489.2},0).wait(1).to({x:480.3},0).wait(1).to({x:471.45},0).wait(1).to({x:462.6},0).wait(1).to({x:453.75},0).wait(1).to({x:444.9},0).wait(1).to({x:436},0).wait(1).to({x:427.15},0).wait(1).to({x:418.3},0).wait(1).to({x:409.45},0).wait(1).to({x:400.6},0).wait(1).to({x:391.75},0).wait(1).to({x:382.85},0).wait(1).to({x:374},0).wait(1).to({x:365.15},0).wait(1).to({x:356.3},0).wait(1).to({x:347.45},0).wait(1).to({x:338.55},0).wait(1).to({x:329.7},0).wait(1).to({x:320.85},0).wait(1).to({x:312},0).wait(1).to({x:303.15},0).wait(1).to({x:294.25},0).wait(1).to({x:285.4},0).wait(1).to({x:276.55},0).wait(1).to({x:267.7},0).wait(1).to({x:258.85},0).wait(1).to({x:250},0).wait(65));

	// logo
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(-23.75,500,1,1,0,0,0,250,500);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({x:-15.15},0).wait(1).to({x:-6.6},0).wait(1).to({x:1.95},0).wait(1).to({x:10.5},0).wait(1).to({x:19.05},0).wait(1).to({x:27.6},0).wait(1).to({x:36.15},0).wait(1).to({x:44.7},0).wait(1).to({x:53.25},0).wait(1).to({x:61.8},0).wait(1).to({x:70.4},0).wait(1).to({x:78.95},0).wait(1).to({x:87.5},0).wait(1).to({x:96.05},0).wait(1).to({x:104.6},0).wait(1).to({x:113.15},0).wait(1).to({x:121.7},0).wait(1).to({x:130.25},0).wait(1).to({x:138.8},0).wait(1).to({x:147.35},0).wait(1).to({x:155.9},0).wait(1).to({x:164.5},0).wait(1).to({x:173.05},0).wait(1).to({x:181.6},0).wait(1).to({x:190.15},0).wait(1).to({x:198.7},0).wait(1).to({x:207.25},0).wait(1).to({x:215.8},0).wait(1).to({x:224.35},0).wait(1).to({x:232.9},0).wait(1).to({x:241.45},0).wait(1).to({x:250},0).wait(65));

	// button
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({alpha:0.0333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.1333},0).wait(1).to({x:249.95,alpha:0.1667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2333},0).wait(1).to({alpha:0.2667},0).wait(1).to({x:249.9,alpha:0.3},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3667},0).wait(1).to({alpha:0.4},0).wait(1).to({x:249.85,alpha:0.4333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5333},0).wait(1).to({x:249.8,alpha:0.5667},0).wait(1).to({y:500.05,alpha:0.6},0).wait(1).to({alpha:0.6333},0).wait(1).to({alpha:0.6667},0).wait(1).to({x:249.75,alpha:0.7},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7667},0).wait(1).to({alpha:0.8},0).wait(1).to({x:249.7,alpha:0.8333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.9333},0).wait(1).to({x:249.65,alpha:0.9667},0).wait(1).to({alpha:1},0).wait(3).to({x:249.6},0).wait(3).to({y:500.1},0).wait(1).to({x:249.55},0).wait(4).to({x:249.5},0).wait(4).to({x:249.45},0).wait(4).to({x:249.4},0).wait(4).to({x:249.35,y:500.15},0).wait(4).to({x:249.3},0).wait(4).to({x:249.25},0).wait(4).to({x:249.2},0).wait(4).to({x:249.15},0).wait(2).to({y:500.2},0).wait(2).to({x:249.1},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:246.8,y:504.25},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:244.5,y:508.3},0).wait(1).to({scaleX:0.9436,scaleY:0.9436,x:242.2,y:512.35},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:244.5,y:508.3},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:246.8,y:504.25},0).wait(1).to({scaleX:1,scaleY:1,x:249.1,y:500.2},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:246.8,y:504.25},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:244.5,y:508.3},0).wait(1).to({scaleX:0.9436,scaleY:0.9436,x:242.2,y:512.35},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:244.5,y:508.3},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:246.8,y:504.25},0).wait(1).to({scaleX:1,scaleY:1,x:249.1,y:500.2},0).wait(36));

	// txt
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.0357},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1071},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1786},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3214},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.3929},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.4643},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5357},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6071},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.6786},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8214},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.8929},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.9643},0).wait(1).to({alpha:1},0).wait(116));

	// bg
	this.instance_4 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,500,807.2,500.20000000000005);
// library properties:
lib.properties = {
	id: 'F2BBBBBE7AA7204BA7A3C0A7D0C6390A',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_.png?1602250803120", id:"index_atlas_"}
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
an.compositions['F2BBBBBE7AA7204BA7A3C0A7D0C6390A'] = {
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