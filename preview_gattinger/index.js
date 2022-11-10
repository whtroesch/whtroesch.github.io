(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1391,0,510,516],[0,0,1389,296],[0,298,970,70]]}
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



(lib.icon = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logotext = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.textfeld = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
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
	this.instance = new lib.textfeld();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,970,70), null);


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
	this.instance = new lib.logotext();
	this.instance.setTransform(0,0,0.2752,0.2752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,382.3,81.5), null);


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
	this.instance = new lib.icon();
	this.instance.setTransform(0,0,0.2752,0.2752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,140.4,142), null);


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

	// textfeld
	this.instance = new lib.Symbol3();
	this.instance.setTransform(485,207,1,1,0,0,0,485,35);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).wait(10).to({alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(1));

	// logotext
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(1191.05,137.7,1,1,0,0,0,191.1,40.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({x:1170.15},0).wait(1).to({x:1149.3},0).wait(1).to({x:1128.45},0).wait(1).to({x:1107.55},0).wait(1).to({x:1086.7},0).wait(1).to({x:1065.85},0).wait(1).to({x:1044.95},0).wait(1).to({x:1024.1},0).wait(1).to({x:1003.25},0).wait(1).to({x:982.4},0).wait(1).to({x:961.5},0).wait(1).to({x:940.65},0).wait(1).to({x:919.8},0).wait(1).to({x:898.9},0).wait(1).to({x:878.05},0).wait(1).to({x:857.2},0).wait(1).to({x:836.3},0).wait(1).to({x:815.45},0).wait(1).to({x:794.6},0).wait(1).to({x:773.75},0).wait(1).to({x:752.85},0).wait(1).to({x:732},0).wait(1).to({x:711.15},0).wait(1).to({x:690.25},0).wait(1).to({x:669.4},0).wait(1).to({x:648.55},0).wait(1).to({x:627.65},0).wait(1).to({x:606.8},0).wait(1).to({x:585.95},0).wait(1).to({x:565.1},0).wait(1).to({y:137.75},0).wait(1).to({y:137.8},0).wait(1).to({y:137.85},0).wait(1).to({y:137.9},0).wait(1).to({y:137.95},0).wait(1).to({y:138},0).wait(1).to({y:138.05},0).wait(1).to({y:138.1},0).wait(1).to({y:138.2},0).wait(1).to({y:138.25},0).wait(1).to({y:138.3},0).wait(1).to({y:138.35},0).wait(1).to({y:138.4},0).wait(1).to({y:138.45},0).wait(1).to({y:138.5},0).wait(1).to({y:138.55},0).wait(1).to({y:138.6},0).wait(1).to({y:138.7},0).wait(1).to({y:138.75},0).wait(1).to({y:138.8},0).wait(1).to({y:138.85},0).wait(1).to({y:138.9},0).wait(1).to({y:138.95},0).wait(1).to({y:139},0).wait(1).to({y:139.05},0).wait(1).to({y:139.1},0).wait(1).to({y:139.2},0).wait(1).to({y:139.25},0).wait(1).to({y:139.3},0).wait(1).to({y:139.35},0).wait(1).to({y:139.4},0).wait(1).to({y:139.45},0).wait(1).to({y:139.5},0).wait(1).to({y:139.55},0).wait(1).to({y:139.6},0).wait(1).to({y:139.7},0).wait(1).to({y:138.05},0).wait(1).to({y:136.45},0).wait(1).to({y:134.8},0).wait(1).to({y:133.2},0).wait(1).to({y:131.55},0).wait(1).to({y:129.95},0).wait(1).to({y:128.3},0).wait(1).to({y:126.7},0).wait(1).to({y:125.05},0).wait(1).to({y:123.45},0).wait(1).to({y:121.8},0).wait(1).to({y:120.2},0).wait(1).to({y:118.55},0).wait(1).to({y:116.95},0).wait(1).to({y:115.3},0).wait(1).to({y:113.7},0).wait(1).to({y:112.05},0).wait(1).to({y:110.45},0).wait(1).to({y:108.8},0).wait(1).to({y:107.2},0).wait(1).to({y:105.55},0).wait(1).to({y:103.95},0).wait(1).to({y:102.3},0).wait(1).to({y:100.7},0).wait(1));

	// icon
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(491.15,128,0.0563,0.0563,0,0,0,70.2,70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:71,scaleX:0.1237,scaleY:0.1237,y:128.05},0).wait(1).to({scaleX:0.1911,scaleY:0.1911,x:491.1,y:128},0).wait(1).to({scaleX:0.2585,scaleY:0.2585,x:491.15},0).wait(1).to({scaleX:0.326,scaleY:0.326},0).wait(1).to({scaleX:0.3934,scaleY:0.3934},0).wait(1).to({scaleX:0.4608,scaleY:0.4608,y:127.95},0).wait(1).to({scaleX:0.5282,scaleY:0.5282},0).wait(1).to({scaleX:0.5956,scaleY:0.5956,y:128},0).wait(1).to({scaleX:0.663,scaleY:0.663,y:127.95},0).wait(1).to({scaleX:0.7304,scaleY:0.7304},0).wait(1).to({scaleX:0.7978,scaleY:0.7978},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,x:491.2},0).wait(1).to({scaleX:0.9326,scaleY:0.9326,x:491.15,y:127.9},0).wait(1).to({scaleX:1,scaleY:1,x:491.2,y:127.95},0).wait(16).to({x:483.9,y:127.8},0).wait(1).to({x:476.6,y:127.65},0).wait(1).to({x:469.3,y:127.55},0).wait(1).to({x:462,y:127.4},0).wait(1).to({x:454.7,y:127.25},0).wait(1).to({x:447.4,y:127.15},0).wait(1).to({x:440.1,y:127},0).wait(1).to({x:432.8,y:126.85},0).wait(1).to({x:425.5,y:126.75},0).wait(1).to({x:418.2,y:126.6},0).wait(1).to({x:410.9,y:126.45},0).wait(1).to({x:403.6,y:126.35},0).wait(1).to({x:396.3,y:126.2},0).wait(1).to({x:389,y:126.05},0).wait(1).to({x:381.7,y:125.95},0).wait(1).to({x:374.4,y:125.8},0).wait(1).to({x:367.1,y:125.65},0).wait(1).to({x:359.8,y:125.55},0).wait(1).to({x:352.5,y:125.4},0).wait(1).to({x:345.2,y:125.25},0).wait(1).to({x:337.9,y:125.15},0).wait(1).to({x:330.6,y:125},0).wait(1).to({x:323.3,y:124.85},0).wait(1).to({x:316,y:124.75},0).wait(1).to({x:308.7,y:124.6},0).wait(1).to({x:301.4,y:124.45},0).wait(1).to({x:294.1,y:124.35},0).wait(1).to({x:286.8,y:124.2},0).wait(1).to({x:279.5,y:124.05},0).wait(1).to({x:272.2,y:123.95},0).wait(1).to({y:124},0).wait(1).to({y:124.05},0).wait(1).to({y:124.1},0).wait(1).to({y:124.15},0).wait(1).to({y:124.2},0).wait(1).to({y:124.25},0).wait(1).to({y:124.3},0).wait(1).to({y:124.35},0).wait(1).to({y:124.45},0).wait(1).to({y:124.5},0).wait(1).to({y:124.55},0).wait(1).to({y:124.6},0).wait(1).to({y:124.65},0).wait(1).to({y:124.7},0).wait(1).to({y:124.75},0).wait(1).to({y:124.8},0).wait(1).to({y:124.85},0).wait(1).to({y:124.95},0).wait(1).to({y:125},0).wait(1).to({y:125.05},0).wait(1).to({y:125.1},0).wait(1).to({y:125.15},0).wait(1).to({y:125.2},0).wait(1).to({y:125.25},0).wait(1).to({y:125.3},0).wait(1).to({y:125.35},0).wait(1).to({y:125.45},0).wait(1).to({y:125.5},0).wait(1).to({y:125.55},0).wait(1).to({y:125.6},0).wait(1).to({y:125.65},0).wait(1).to({y:125.7},0).wait(1).to({y:125.75},0).wait(1).to({y:125.8},0).wait(1).to({y:125.85},0).wait(1).to({y:125.95},0).wait(1).to({y:124.15},0).wait(1).to({y:122.35},0).wait(1).to({y:120.55},0).wait(1).to({y:118.75},0).wait(1).to({y:117},0).wait(1).to({y:115.2},0).wait(1).to({y:113.4},0).wait(1).to({y:111.6},0).wait(1).to({y:109.8},0).wait(1).to({y:108.05},0).wait(1).to({y:106.25},0).wait(1).to({y:104.45},0).wait(1).to({y:102.65},0).wait(1).to({y:100.85},0).wait(1).to({y:99.1},0).wait(1).to({y:97.3},0).wait(1).to({y:95.5},0).wait(1).to({y:93.7},0).wait(1).to({y:91.9},0).wait(1).to({y:90.15},0).wait(1).to({y:88.35},0).wait(1).to({y:86.55},0).wait(1).to({y:84.75},0).wait(1).to({y:83},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(485,137,897.2,105);
// library properties:
lib.properties = {
	id: 'F70FACA32BDC6B44A63803FB3AC933F1',
	width: 970,
	height: 250,
	fps: 24,
	color: "#F6F6F6",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1668086985753", id:"index_atlas_1"}
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
an.compositions['F70FACA32BDC6B44A63803FB3AC933F1'] = {
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