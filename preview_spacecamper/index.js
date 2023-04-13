(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,500,1000],[502,0,29,40]]}
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



(lib.nine = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib.nine();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,29,40), null);


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

	// Ebene_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(226.5,527,0.3468,0.3468,0,0,0,14.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.5,regY:20,scaleX:0.3934,scaleY:0.3934,x:226.55},0).wait(1).to({scaleX:0.4401,scaleY:0.4401,x:226.6},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:226.55,y:527.05},0).wait(1).to({scaleX:0.5334,scaleY:0.5334,x:226.6,y:527},0).wait(1).to({scaleX:0.5801,scaleY:0.5801,y:527.05},0).wait(1).to({scaleX:0.6267,scaleY:0.6267},0).wait(1).to({scaleX:0.6734,scaleY:0.6734},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:226.65},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:226.6},0).wait(1).to({scaleX:0.8134,scaleY:0.8134,x:226.65},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.9067,scaleY:0.9067,y:527.1},0).wait(1).to({scaleX:0.9533,scaleY:0.9533,y:527.05},0).wait(1).to({scaleX:1,scaleY:1,x:226.7,y:527.1},0).wait(13).to({scaleX:0.9093,scaleY:0.9093},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:226.65,y:527.05},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:226.6},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:226.65},0).wait(1).to({scaleX:0.8639,scaleY:0.8639,x:226.7,y:527.1},0).wait(1).to({scaleX:0.932,scaleY:0.932,x:226.65},0).wait(1).to({scaleX:1,scaleY:1,x:226.7},0).wait(1).to({scaleX:0.9093,scaleY:0.9093},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:226.65,y:527.05},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:226.6},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:226.65},0).wait(1).to({scaleX:0.8639,scaleY:0.8639,x:226.7,y:527.1},0).wait(1).to({scaleX:0.932,scaleY:0.932,x:226.65},0).wait(1).to({scaleX:1,scaleY:1,x:226.7},0).wait(30).to({scaleX:0.9093,scaleY:0.9093},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:226.65,y:527.05},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:226.6},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:226.65},0).wait(1).to({scaleX:0.8639,scaleY:0.8639,x:226.7,y:527.1},0).wait(1).to({scaleX:0.932,scaleY:0.932,x:226.65},0).wait(1).to({scaleX:1,scaleY:1,x:226.7},0).wait(1).to({scaleX:0.9093,scaleY:0.9093},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:226.65,y:527.05},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:226.6},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:226.65},0).wait(1).to({scaleX:0.8639,scaleY:0.8639,x:226.7,y:527.1},0).wait(1).to({scaleX:0.932,scaleY:0.932,x:226.65},0).wait(1).to({scaleX:1,scaleY:1,x:226.7},0).wait(37));

	// Ebene_1
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(250,500,250,500);
// library properties:
lib.properties = {
	id: '8AF41FEF20FAB949805FF92414B61828',
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
an.compositions['8AF41FEF20FAB949805FF92414B61828'] = {
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