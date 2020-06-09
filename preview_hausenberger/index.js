(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[711,0,770,508],[0,710,426,136],[711,640,300,202],[1013,640,300,139],[1483,246,300,205],[711,510,1083,128],[1315,640,300,60],[1483,0,300,244],[0,0,709,708]]}
];


// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.auto = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cadillac = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.chevrolet = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corvette = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hausenberger = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.isuzu = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.opel = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.rim = function() {
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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.rim();
	this.instance.setTransform(-141.2,-141,0.3983,0.3983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-141,282.4,282);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.isuzu();
	this.instance.setTransform(0,0,0.3242,0.3242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,97.3,19.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.corvette();
	this.instance.setTransform(0,0,0.4011,0.4011);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,120.3,82.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.chevrolet();
	this.instance.setTransform(0,0,0.2861,0.2861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,85.8,39.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.cadillac();
	this.instance.setTransform(0,0,0.2937,0.2937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,88.1,59.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.opel();
	this.instance.setTransform(0,0,0.3315,0.3315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,99.5,80.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,385,254), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.hausenberger();
	this.instance.setTransform(0,0,0.3778,0.3778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,409.2,48.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.auto();
	this.instance.setTransform(0,0,0.3778,0.3778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,161,51.4), null);


(lib.rim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(141.2,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90},12).to({rotation:-180},12).to({rotation:-270},12).to({rotation:-360},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-58.6,399.2,399.1);


(lib.rim_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.rim2();
	this.instance.setTransform(955.15,141,1,1,0,0,0,141.2,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:148.2},79).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,0,1089.4,282);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// isuzu
	this.instance = new lib.Symbol8();
	this.instance.setTransform(907.6,78.7,1,1,0,0,0,48.6,9.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(4));

	// corvette
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(701.1,179.1,1,1,0,0,0,60.1,41.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).wait(1).to({regX:60.2,x:701.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(15));

	// chevrolet
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(778.9,79.9,1,1,0,0,0,42.9,19.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(25));

	// cadillac
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(858.1,181.7,1,1,0,0,0,44.1,29.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(36));

	// opel
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(649.7,74.5,1,1,0,0,0,49.7,40.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).wait(1).to({regY:40.4,y:74.4,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(46));

	// Ebene_11
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(778.35,125.1,1,1,0,0,0,192.6,126.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80).to({_off:false},0).wait(1).to({regX:192.5,regY:127,x:778.25,y:125.2,alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({y:125.15,alpha:1},0).wait(57));

	// rim
	this.instance_6 = new lib.rim_1();
	this.instance_6.setTransform(298.2,42,1,1,0,0,0,141.2,141);

	this.instance_7 = new lib.rim();
	this.instance_7.setTransform(175,-98,0.3983,0.3983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},80).wait(66));

	// hausenberger
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(229.6,299.2,1,1,0,0,0,204.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({y:298.1},0).wait(1).to({y:297.05},0).wait(1).to({y:295.95},0).wait(1).to({y:294.9},0).wait(1).to({y:293.8},0).wait(1).to({y:292.75},0).wait(1).to({y:291.65},0).wait(1).to({y:290.6},0).wait(1).to({y:289.5},0).wait(1).to({y:288.45},0).wait(1).to({y:287.35},0).wait(1).to({y:286.3},0).wait(1).to({y:285.2},0).wait(1).to({y:284.15},0).wait(1).to({y:283.05},0).wait(1).to({y:282},0).wait(1).to({y:280.9},0).wait(1).to({y:279.85},0).wait(1).to({y:278.75},0).wait(1).to({y:277.7},0).wait(1).to({y:276.6},0).wait(1).to({y:275.55},0).wait(1).to({y:274.45},0).wait(1).to({y:273.4},0).wait(1).to({y:272.3},0).wait(1).to({y:271.25},0).wait(1).to({y:270.15},0).wait(1).to({y:269.1},0).wait(1).to({y:268},0).wait(1).to({y:266.95},0).wait(1).to({y:265.85},0).wait(1).to({y:264.8},0).wait(1).to({y:263.7},0).wait(1).to({y:262.65},0).wait(1).to({y:261.55},0).wait(1).to({y:260.5},0).wait(1).to({y:259.4},0).wait(1).to({y:258.35},0).wait(1).to({y:257.25},0).wait(1).to({y:256.2},0).wait(1).to({y:255.1},0).wait(1).to({y:254.05},0).wait(1).to({y:252.95},0).wait(1).to({y:251.9},0).wait(1).to({y:250.8},0).wait(1).to({y:249.75},0).wait(1).to({y:248.65},0).wait(1).to({y:247.6},0).wait(1).to({y:246.5},0).wait(1).to({y:245.45},0).wait(1).to({y:244.35},0).wait(1).to({y:243.3},0).wait(1).to({y:242.2},0).wait(1).to({y:241.15},0).wait(1).to({y:240.05},0).wait(1).to({y:239},0).wait(1).to({y:237.9},0).wait(1).to({y:236.85},0).wait(1).to({y:235.75},0).wait(1).to({y:234.7},0).wait(1).to({y:233.6},0).wait(1).to({y:232.55},0).wait(1).to({y:231.45},0).wait(1).to({y:230.4},0).wait(1).to({y:229.3},0).wait(1).to({y:228.25},0).wait(1).to({y:227.15},0).wait(1).to({y:226.1},0).wait(1).to({y:225},0).wait(1).to({y:223.95},0).wait(1).to({y:222.85},0).wait(1).to({y:221.8},0).wait(1).to({y:220.7},0).wait(1).to({y:219.65},0).wait(1).to({y:218.55},0).wait(1).to({y:217.5},0).wait(1).to({y:216.4},0).wait(1).to({y:215.35},0).wait(1).to({y:214.25},0).wait(1).to({y:213.2},0).wait(66));

	// auto
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(-100.2,157.3,1,1,0,0,0,80.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:-97.6},0).wait(1).to({x:-95.05},0).wait(1).to({x:-92.5},0).wait(1).to({x:-89.95},0).wait(1).to({x:-87.4},0).wait(1).to({x:-84.8},0).wait(1).to({x:-82.25},0).wait(1).to({x:-79.7},0).wait(1).to({x:-77.15},0).wait(1).to({x:-74.6,y:157.35},0).wait(1).to({x:-72.05},0).wait(1).to({x:-69.45},0).wait(1).to({x:-66.9},0).wait(1).to({x:-64.35},0).wait(1).to({x:-61.8},0).wait(1).to({x:-59.25},0).wait(1).to({x:-56.7},0).wait(1).to({x:-54.1},0).wait(1).to({x:-51.55},0).wait(1).to({x:-49,y:157.4},0).wait(1).to({x:-46.45},0).wait(1).to({x:-43.9},0).wait(1).to({x:-41.3},0).wait(1).to({x:-38.75},0).wait(1).to({x:-36.2},0).wait(1).to({x:-33.65},0).wait(1).to({x:-31.1},0).wait(1).to({x:-28.55},0).wait(1).to({x:-25.95},0).wait(1).to({x:-23.4,y:157.45},0).wait(1).to({x:-20.85},0).wait(1).to({x:-18.3},0).wait(1).to({x:-15.75},0).wait(1).to({x:-13.2},0).wait(1).to({x:-10.6},0).wait(1).to({x:-8.05},0).wait(1).to({x:-5.5},0).wait(1).to({x:-2.95},0).wait(1).to({x:-0.4},0).wait(1).to({x:2.15,y:157.5},0).wait(1).to({x:4.75},0).wait(1).to({x:7.3},0).wait(1).to({x:9.85},0).wait(1).to({x:12.4},0).wait(1).to({x:14.95},0).wait(1).to({x:17.55},0).wait(1).to({x:20.1},0).wait(1).to({x:22.65},0).wait(1).to({x:25.2},0).wait(1).to({x:27.75,y:157.55},0).wait(1).to({x:30.3},0).wait(1).to({x:32.9},0).wait(1).to({x:35.45},0).wait(1).to({x:38},0).wait(1).to({x:40.55},0).wait(1).to({x:43.1},0).wait(1).to({x:45.65},0).wait(1).to({x:48.25},0).wait(1).to({x:50.8},0).wait(1).to({x:53.35,y:157.6},0).wait(1).to({x:55.9},0).wait(1).to({x:58.45},0).wait(1).to({x:61.05},0).wait(1).to({x:63.6},0).wait(1).to({x:66.15},0).wait(1).to({x:68.7},0).wait(1).to({x:71.25},0).wait(1).to({x:73.8},0).wait(1).to({x:76.4},0).wait(1).to({x:78.95,y:157.65},0).wait(1).to({x:81.45},0).wait(1).to({x:84},0).wait(1).to({x:86.55},0).wait(1).to({x:89.1},0).wait(1).to({x:91.7},0).wait(1).to({x:94.25},0).wait(1).to({x:96.8},0).wait(1).to({x:99.35},0).wait(1).to({x:101.9},0).wait(1).to({x:104.5,y:157.7},0).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304.3,26,949.1000000000001,297.4);
// library properties:
lib.properties = {
	id: '8B9EBC82289EEE40B11F305CEB5611DF',
	width: 970,
	height: 250,
	fps: 60,
	color: "#182039",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1591707253814", id:"index_atlas_"}
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
an.compositions['8B9EBC82289EEE40B11F305CEB5611DF'] = {
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