(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib._10ledblinker = function() {
	this.initialize(img._10ledblinker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._11tuningfelgen = function() {
	this.initialize(img._11tuningfelgen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._12sportauspuff = function() {
	this.initialize(img._12sportauspuff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._1white = function() {
	this.initialize(img._1white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._2red = function() {
	this.initialize(img._2red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._3yellow = function() {
	this.initialize(img._3yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._4black = function() {
	this.initialize(img._4black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._5grey = function() {
	this.initialize(img._5grey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._6handgriffe = function() {
	this.initialize(img._6handgriffe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._7tuningspiegel = function() {
	this.initialize(img._7tuningspiegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._8blackpackohnespiegel = function() {
	this.initialize(img._8blackpackohnespiegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib._9sitzgrau = function() {
	this.initialize(img._9sitzgrau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,266);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


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

	// _12
	this.instance = new lib._12sportauspuff();
	this.instance.setTransform(-22,-35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).wait(46));

	// _11
	this.instance_1 = new lib._11tuningfelgen();
	this.instance_1.setTransform(-22,-35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).wait(57));

	// _10
	this.instance_2 = new lib._10ledblinker();
	this.instance_2.setTransform(-22,-35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).wait(69));

	// _9
	this.instance_3 = new lib._9sitzgrau();
	this.instance_3.setTransform(-22,-35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(81));

	// _8
	this.instance_4 = new lib._8blackpackohnespiegel();
	this.instance_4.setTransform(-22,-35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).wait(93));

	// _7
	this.instance_5 = new lib._7tuningspiegel();
	this.instance_5.setTransform(-22,-35);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).wait(105));

	// _6
	this.instance_6 = new lib._6handgriffe();
	this.instance_6.setTransform(-22,-35);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).wait(118));

	// Ebene_2
	this.instance_7 = new lib._1white();
	this.instance_7.setTransform(-22,-35,0.4578,0.4578);

	this.instance_8 = new lib._2red();
	this.instance_8.setTransform(-22,-35,0.456,0.4578);

	this.instance_9 = new lib._3yellow();
	this.instance_9.setTransform(-22,-35,0.4577,0.4578);

	this.instance_10 = new lib._4black();
	this.instance_10.setTransform(-22,-35,0.4577,0.4578);

	this.instance_11 = new lib._5grey();
	this.instance_11.setTransform(-22,-35,0.4577,0.4578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},10).wait(178));

	// Ebene_1
	this.instance_12 = new lib.bg();
	this.instance_12.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(217));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(463,90,508,161);
// library properties:
lib.properties = {
	id: 'FF86DE5316DC45478884B84BF4685755',
	width: 970,
	height: 250,
	fps: 24,
	color: "#F0F0F0",
	opacity: 1.00,
	manifest: [
		{src:"images/10ledblinker.png", id:"_10ledblinker"},
		{src:"images/11tuningfelgen.png", id:"_11tuningfelgen"},
		{src:"images/12sportauspuff.png", id:"_12sportauspuff"},
		{src:"images/1white.png", id:"_1white"},
		{src:"images/2red.png", id:"_2red"},
		{src:"images/3yellow.png", id:"_3yellow"},
		{src:"images/4black.png", id:"_4black"},
		{src:"images/5grey.png", id:"_5grey"},
		{src:"images/6handgriffe.png", id:"_6handgriffe"},
		{src:"images/7tuningspiegel.png", id:"_7tuningspiegel"},
		{src:"images/8blackpackohnespiegel.png", id:"_8blackpackohnespiegel"},
		{src:"images/9sitzgrau.png", id:"_9sitzgrau"},
		{src:"images/bg.jpg", id:"bg"}
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
an.compositions['FF86DE5316DC45478884B84BF4685755'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;