(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,500,1000],[502,181,212,52],[716,181,234,36],[502,93,450,86],[502,0,451,91],[716,219,207,27]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cta = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.neu = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.partner = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.peugeot = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pölten = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.cta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,212,52), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.pölten();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,207,27), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.partner();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,450,86), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.peugeot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,451,91), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.neu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,234,36), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cta
	this.instance = new lib.Symbol5();
	this.instance.setTransform(152.25,497,0.1582,0.1582,0,0,0,105,24.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({regX:106,regY:26,scaleX:0.2424,scaleY:0.2424,x:152.2,y:497.1,alpha:0.1},0).wait(1).to({scaleX:0.3265,scaleY:0.3265,x:152,alpha:0.2},0).wait(1).to({scaleX:0.4107,scaleY:0.4107,x:151.8,alpha:0.3},0).wait(1).to({scaleX:0.4949,scaleY:0.4949,x:151.6,y:497.05,alpha:0.4},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,x:151.4,alpha:0.5},0).wait(1).to({scaleX:0.6633,scaleY:0.6633,x:151.2,alpha:0.6},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:151,alpha:0.7},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,x:150.8,y:497,alpha:0.8},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,x:150.6,alpha:0.9},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,alpha:1},0).wait(34).to({scaleX:0.9565,scaleY:0.9565,x:150.35,y:496.95},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3},0).wait(1).to({scaleX:0.8695,scaleY:0.8695,x:150.2,y:496.9},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3,y:496.95},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,y:497},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35,y:496.95},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3},0).wait(1).to({scaleX:0.8695,scaleY:0.8695,x:150.2,y:496.9},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3,y:496.95},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,y:497},0).wait(87).to({scaleX:0.9565,scaleY:0.9565,x:150.35,y:496.95},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3},0).wait(1).to({scaleX:0.8695,scaleY:0.8695,x:150.2,y:496.9},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3,y:496.95},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,y:497},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35,y:496.95},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3},0).wait(1).to({scaleX:0.8695,scaleY:0.8695,x:150.2,y:496.9},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:150.3,y:496.95},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:150.35},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,y:497},0).wait(121));

	// poelten
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(150.5,435.4,1,1,0,0,0,103.5,13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({y:434.55,alpha:0.05},0).wait(1).to({y:433.7,alpha:0.1},0).wait(1).to({y:432.85,alpha:0.15},0).wait(1).to({y:432,alpha:0.2},0).wait(1).to({y:431.15,alpha:0.25},0).wait(1).to({y:430.3,alpha:0.3},0).wait(1).to({y:429.45,alpha:0.35},0).wait(1).to({y:428.6,alpha:0.4},0).wait(1).to({y:427.75,alpha:0.45},0).wait(1).to({y:426.95,alpha:0.5},0).wait(1).to({y:426.1,alpha:0.55},0).wait(1).to({y:425.25,alpha:0.6},0).wait(1).to({y:424.4,alpha:0.65},0).wait(1).to({y:423.55,alpha:0.7},0).wait(1).to({y:422.7,alpha:0.75},0).wait(1).to({y:421.85,alpha:0.8},0).wait(1).to({y:421,alpha:0.85},0).wait(1).to({y:420.15,alpha:0.9},0).wait(1).to({y:419.3,alpha:0.95},0).wait(1).to({y:418.5,alpha:1},0).wait(276));

	// partner
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(-244.75,360,1,1,0,0,0,225,43);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({x:-220.05},0).wait(1).to({x:-195.4},0).wait(1).to({x:-170.75},0).wait(1).to({x:-146.1},0).wait(1).to({x:-121.4},0).wait(1).to({x:-96.75},0).wait(1).to({x:-72.1},0).wait(1).to({x:-47.45},0).wait(1).to({x:-22.75},0).wait(1).to({x:1.9},0).wait(1).to({x:26.55},0).wait(1).to({x:51.2},0).wait(1).to({x:75.9},0).wait(1).to({x:100.55},0).wait(1).to({x:125.2},0).wait(1).to({x:149.85},0).wait(1).to({x:174.55},0).wait(1).to({x:199.2},0).wait(1).to({x:223.85},0).wait(1).to({x:248.5},0).wait(276));

	// peugeot
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(827.35,271.4,1,1,0,0,0,219.1,45.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:225.5,regY:45.5,x:804.55,y:271.7},0).wait(1).to({x:775.35,y:271.9},0).wait(1).to({x:746.15,y:272.1},0).wait(1).to({x:716.95,y:272.3},0).wait(1).to({x:687.8,y:272.5},0).wait(1).to({x:658.6,y:272.7},0).wait(1).to({x:629.4,y:272.9},0).wait(1).to({x:600.2,y:273.1},0).wait(1).to({x:571,y:273.3},0).wait(1).to({x:541.85,y:273.55},0).wait(1).to({x:512.65,y:273.75},0).wait(1).to({x:483.45,y:273.95},0).wait(1).to({x:454.25,y:274.15},0).wait(1).to({x:425.05,y:274.35},0).wait(1).to({x:395.9,y:274.55},0).wait(1).to({x:366.7,y:274.75},0).wait(1).to({x:337.5,y:274.95},0).wait(1).to({x:308.3,y:275.15},0).wait(1).to({x:279.1,y:275.35},0).wait(1).to({x:249.95,y:275.6},0).wait(276));

	// neu
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(169.5,182.6,1,1,0,0,0,117,18);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({x:169.45,y:184.1,alpha:0.05},0).wait(1).to({x:169.4,y:185.65,alpha:0.1},0).wait(1).to({y:187.15,alpha:0.15},0).wait(1).to({x:169.35,y:188.7,alpha:0.2},0).wait(1).to({y:190.2,alpha:0.25},0).wait(1).to({x:169.3,y:191.75,alpha:0.3},0).wait(1).to({y:193.25,alpha:0.35},0).wait(1).to({x:169.25,y:194.8,alpha:0.4},0).wait(1).to({y:196.3,alpha:0.45},0).wait(1).to({x:169.2,y:197.85,alpha:0.5},0).wait(1).to({x:169.15,y:199.35,alpha:0.55},0).wait(1).to({y:200.9,alpha:0.6},0).wait(1).to({x:169.1,y:202.4,alpha:0.65},0).wait(1).to({y:203.95,alpha:0.7},0).wait(1).to({x:169.05,y:205.45,alpha:0.75},0).wait(1).to({y:207,alpha:0.8},0).wait(1).to({x:169,y:208.5,alpha:0.85},0).wait(1).to({y:210.05,alpha:0.9},0).wait(1).to({x:168.95,y:211.55,alpha:0.95},0).wait(1).to({y:213.1,alpha:1},0).wait(276));

	// bg
	this.instance_5 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-219.7,500,1279,500);
// library properties:
lib.properties = {
	id: '1848DA499F35954DAF4C6FBF47583D68',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['1848DA499F35954DAF4C6FBF47583D68'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;