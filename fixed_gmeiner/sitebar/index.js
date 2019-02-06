(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,980);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,67);


(lib.lichtnissan = function() {
	this.initialize(img.lichtnissan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);


(lib.banner_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(130,651,0.939,0.939);

	this.instance_1 = new lib.banner();
	this.instance_1.parent = this;

	this.instance_2 = new lib.lichtnissan();
	this.instance_2.parent = this;
	this.instance_2.setTransform(414.4,366.2,0.459,0.454,0,0,-8.4);

	this.instance_3 = new lib.lichtnissan();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89,330,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.939,scaleY:0.939,x:130,y:651}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.994,scaleY:0.994,x:120,y:649}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.995,scaleY:0.995,x:120,y:649}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.995,scaleY:0.995,x:120,y:649}},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,980);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner_1();
	this.instance.parent = this;
	this.instance.setTransform(300,490,1,1,0,0,0,300,490);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.banner_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,490,600,980);
// library properties:
lib.properties = {
	id: 'B9E9C22559C95A4EBCC35F6B030781CA',
	width: 600,
	height: 980,
	fps: 24,
	color: "#22A841",
	opacity: 0.00,
	manifest: [
		{src:"images/banner.jpg", id:"banner"},
		{src:"images/button.png", id:"button"},
		{src:"images/lichtnissan.png", id:"lichtnissan"}
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
an.compositions['B9E9C22559C95A4EBCC35F6B030781CA'] = {
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