(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.blende = function() {
	this.initialize(img.blende);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,694);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,119);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,307);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,694);


(lib.MAN_4er_Range_ohne_Beschnitt_F39 = function() {
	this.initialize(img.MAN_4er_Range_ohne_Beschnitt_F39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,797);


(lib.MAN_VKL_Baustelle_F39 = function() {
	this.initialize(img.MAN_VKL_Baustelle_F39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1484,1050);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,83);


(lib.tge = function() {
	this.initialize(img.tge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,30);


(lib.van = function() {
	this.initialize(img.van);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,694);// helper functions:

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


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MAN_4er_Range_ohne_Beschnitt_F39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,924.9,737.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,433,83), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.van();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.blende();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.blende();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,694), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MAN_VKL_Baustelle_F39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,989,699.8), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-128,-52,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.87,scaleY:0.87,x:-123,y:-50},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-52,270,107.1);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(245.1,370.5,0.707,0.707);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).wait(314).to({x:241.6,y:229.8},0).wait(1));

	// man
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,388,1,1,0,0,0,250,347);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({x:250.1,alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(25).to({x:250.2},0).wait(29).to({x:250.3},0).wait(28).to({x:250.4},0).wait(29).to({x:250.5},0).wait(29).to({x:250.6},0).wait(28).to({x:250.7},0).wait(29).to({x:250.8},0).wait(29).to({x:250.9},0).wait(28).to({x:251},0).wait(29).to({x:251.1},0).wait(29).to({x:251.2},0).wait(28).to({x:251.3},0).wait(1));

	// van
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133,388,1,1,0,0,0,250,347);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:1},0).wait(366));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,699);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(601));

	// blende transp
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250,438,1,1,0,0,0,250,347);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).wait(1).to({scaleY:0.1,y:750.2,alpha:0.82},0).wait(1).to({scaleY:0.17,y:727.3,alpha:0.806},0).wait(1).to({scaleY:0.23,y:704.4,alpha:0.793},0).wait(1).to({scaleY:0.3,y:681.5,alpha:0.779},0).wait(1).to({scaleY:0.36,y:658.6,alpha:0.765},0).wait(1).to({scaleY:0.43,y:635.8,alpha:0.751},0).wait(1).to({scaleY:0.5,y:612.9,alpha:0.738},0).wait(1).to({scaleY:0.56,y:590,alpha:0.724},0).wait(1).to({scaleY:0.63,y:567.1,alpha:0.71},0).wait(1).to({scaleY:0.69,y:544.2,alpha:0.696},0).wait(1).to({scaleY:0.76,y:521.4,alpha:0.683},0).wait(1).to({scaleY:0.83,y:498.5,alpha:0.669},0).wait(1).to({scaleY:0.89,y:475.6,alpha:0.655},0).wait(1).to({scaleY:0.96,y:452.8,alpha:0.641},0).wait(1).to({scaleY:1.02,y:429.8,alpha:0.628},0).wait(1).to({scaleY:1.09,y:407,alpha:0.614},0).wait(1).to({scaleY:1.16,y:384.2,alpha:0.6},0).to({_off:true},1).wait(394));

	// blende
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,446,1,1,0,0,0,250,347);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).wait(1).to({scaleY:0.1,y:756.9,alpha:1},0).wait(1).to({scaleY:0.17,y:734.1},0).wait(1).to({scaleY:0.24,y:711.2},0).wait(1).to({scaleY:0.3,y:688.4},0).wait(1).to({scaleY:0.37,y:665.5},0).wait(1).to({scaleY:0.43,y:642.7},0).wait(1).to({scaleY:0.5,y:619.9},0).wait(1).to({scaleY:0.56,y:597},0).wait(1).to({scaleY:0.63,y:574.2},0).wait(1).to({scaleY:0.7,y:551.3},0).wait(1).to({scaleY:0.76,y:528.5},0).wait(1).to({scaleY:0.83,y:505.7},0).wait(1).to({scaleY:0.89,y:482.8},0).wait(1).to({scaleY:0.96,y:459.9},0).wait(1).to({scaleY:1.03,y:437.1},0).wait(1).to({scaleY:1.09,y:414.3},0).wait(1).to({scaleY:1.16,y:391.5},0).wait(394));

	// tge
	this.instance_6 = new lib.tge();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25,31);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({_off:true},164).wait(313));

	// Ebene_2
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(236.5,67.5,1,1,0,0,0,216.5,41.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(103).to({_off:true},1).wait(488));

	// Ebene_1
	this.instance_8 = new lib.Symbol11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(462.4,368.6,1,1,0,0,0,462.4,368.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:460.5},0).wait(1).to({x:458.5},0).wait(1).to({x:456.6},0).wait(1).to({x:454.6},0).wait(1).to({x:452.6},0).wait(1).to({x:450.7},0).wait(1).to({x:448.7},0).wait(1).to({x:446.8},0).wait(1).to({x:444.8},0).wait(1).to({x:442.8},0).wait(1).to({x:440.9},0).wait(1).to({x:438.9},0).wait(1).to({x:436.9},0).wait(1).to({x:435},0).wait(1).to({x:433},0).wait(1).to({x:431.1},0).wait(1).to({x:429.1},0).wait(1).to({x:427.1},0).wait(1).to({x:425.2},0).wait(1).to({x:423.2},0).wait(1).to({x:421.3},0).wait(1).to({x:419.3},0).wait(1).to({x:417.3},0).wait(1).to({x:415.4},0).wait(1).to({x:413.4},0).wait(1).to({x:411.4},0).wait(1).to({x:409.5},0).wait(1).to({x:407.5},0).wait(1).to({x:405.6},0).wait(1).to({x:403.6},0).wait(1).to({x:401.6},0).wait(1).to({x:399.7},0).wait(1).to({x:397.7},0).wait(1).to({x:395.8},0).wait(1).to({x:393.8},0).wait(1).to({x:391.8},0).wait(1).to({x:389.9},0).wait(1).to({x:387.9},0).wait(1).to({x:385.9},0).wait(1).to({x:384},0).wait(1).to({x:382},0).wait(1).to({x:380.1},0).wait(1).to({x:378.1},0).wait(1).to({x:376.1},0).wait(1).to({x:374.2},0).wait(1).to({x:372.2},0).wait(1).to({x:370.3},0).wait(1).to({x:368.3},0).wait(1).to({x:366.3},0).wait(1).to({x:364.4},0).wait(1).to({x:362.4},0).wait(1).to({x:360.4},0).wait(1).to({x:358.5},0).wait(1).to({x:356.5},0).wait(1).to({x:354.6},0).wait(1).to({x:352.6},0).wait(1).to({x:350.6},0).wait(1).to({x:348.7},0).wait(1).to({x:346.7},0).wait(1).to({x:344.8},0).wait(1).to({x:342.8},0).wait(1).to({x:340.8},0).wait(1).to({x:338.9},0).wait(1).to({x:336.9},0).wait(1).to({x:334.9},0).wait(1).to({x:333},0).wait(1).to({x:331},0).wait(1).to({x:329.1},0).wait(1).to({x:327.1},0).wait(1).to({x:325.1},0).wait(1).to({x:323.2},0).wait(1).to({x:321.2},0).wait(1).to({x:319.3},0).wait(1).to({x:317.3},0).wait(1).to({x:315.3},0).wait(1).to({x:313.4},0).wait(1).to({x:311.4},0).wait(1).to({x:309.4},0).wait(1).to({x:307.5},0).wait(1).to({x:305.5},0).wait(1).to({x:303.6},0).wait(1).to({x:301.6},0).wait(1).to({x:299.6},0).wait(1).to({x:297.7},0).wait(1).to({x:295.7},0).wait(1).to({x:293.8},0).wait(1).to({x:291.8},0).wait(1).to({x:289.8},0).wait(1).to({x:287.9},0).wait(1).to({x:285.9},0).wait(1).to({x:283.9},0).wait(1).to({x:282},0).wait(1).to({x:280},0).wait(1).to({x:278.1},0).wait(1).to({x:276.1},0).wait(1).to({x:274.1},0).wait(1).to({x:272.2},0).wait(1).to({x:270.2},0).wait(1).to({x:268.3},0).wait(1).to({x:266.3},0).wait(1).to({x:264.3},0).wait(1).to({x:262.4},0).wait(1).to({x:260.4},0).wait(1).to({x:258.4},0).wait(183).to({_off:true},1).wait(313));

	// foto
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(637.8,349.9,1,1,0,0,0,666.4,349.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:494.5,x:463.3},0).wait(1).to({x:460.6},0).wait(1).to({x:458},0).wait(1).to({x:455.4},0).wait(1).to({x:452.7},0).wait(1).to({x:450.1},0).wait(1).to({x:447.5},0).wait(1).to({x:444.8},0).wait(1).to({x:442.2},0).wait(1).to({x:439.6},0).wait(1).to({x:436.9},0).wait(1).to({x:434.3},0).wait(1).to({x:431.7},0).wait(1).to({x:429},0).wait(1).to({x:426.4},0).wait(1).to({x:423.8},0).wait(1).to({x:421.1},0).wait(1).to({x:418.5},0).wait(1).to({x:415.9},0).wait(1).to({x:413.2},0).wait(1).to({x:410.6},0).wait(1).to({x:408},0).wait(1).to({x:405.3},0).wait(1).to({x:402.7},0).wait(1).to({x:400.1},0).wait(1).to({x:397.4},0).wait(1).to({x:394.8},0).wait(1).to({x:392.2},0).wait(1).to({x:389.6},0).wait(1).to({x:386.9},0).wait(1).to({x:384.3},0).wait(1).to({x:381.7},0).wait(1).to({x:379},0).wait(1).to({x:376.4},0).wait(1).to({x:373.8},0).wait(1).to({x:371.1},0).wait(1).to({x:368.5},0).wait(1).to({x:365.9},0).wait(1).to({x:363.2},0).wait(1).to({x:360.6},0).wait(1).to({x:358},0).wait(1).to({x:355.3},0).wait(1).to({x:352.7},0).wait(1).to({x:350.1},0).wait(1).to({x:347.4},0).wait(1).to({x:344.8},0).wait(1).to({x:342.2},0).wait(1).to({x:339.5},0).wait(1).to({x:336.9},0).wait(1).to({x:334.3},0).wait(1).to({x:331.6},0).wait(1).to({x:329},0).wait(1).to({x:326.4},0).wait(1).to({x:323.7},0).wait(1).to({x:321.1},0).wait(1).to({x:318.5},0).wait(1).to({x:315.8},0).wait(1).to({x:313.2},0).wait(1).to({x:310.6},0).wait(1).to({x:307.9},0).wait(1).to({x:305.3},0).wait(1).to({x:302.7},0).wait(1).to({x:300},0).wait(1).to({x:297.4},0).wait(1).to({x:294.8},0).wait(1).to({x:292.1},0).wait(1).to({x:289.5},0).wait(1).to({x:286.9},0).wait(1).to({x:284.2},0).wait(1).to({x:281.6},0).wait(1).to({x:279},0).wait(1).to({x:276.3},0).wait(1).to({x:273.7},0).wait(1).to({x:271.1},0).wait(1).to({x:268.4},0).wait(1).to({x:265.8},0).wait(1).to({x:263.2},0).wait(1).to({x:260.5},0).wait(1).to({x:257.9},0).wait(1).to({x:255.3},0).wait(1).to({x:252.7},0).wait(1).to({x:250},0).wait(1).to({x:247.4},0).wait(1).to({x:244.8},0).wait(1).to({x:242.1},0).wait(1).to({x:239.5},0).wait(1).to({x:236.9},0).wait(1).to({x:234.2},0).wait(1).to({x:231.6},0).wait(1).to({x:229},0).wait(1).to({x:226.3},0).wait(1).to({x:223.7},0).wait(1).to({x:221.1},0).wait(1).to({x:218.4},0).wait(1).to({x:215.8},0).wait(1).to({x:213.2},0).wait(1).to({x:210.5},0).wait(1).to({x:207.9},0).wait(1).to({x:205.3},0).wait(1).to({x:202.6},0).wait(1).to({x:200},0).wait(1).to({x:197.4},0).wait(1).to({x:194.7},0).wait(1).to({x:192.1},0).wait(183).to({_off:true},1).wait(313));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(221.4,500,989,1006);
// library properties:
lib.properties = {
	id: '66B4ED7846197346959654EF6606C1B1',
	width: 500,
	height: 1000,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blende.png", id:"blende"},
		{src:"images/button.png", id:"button"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/man.png", id:"man"},
		{src:"images/MAN_4er_Range_ohne_Beschnitt_F39.jpg", id:"MAN_4er_Range_ohne_Beschnitt_F39"},
		{src:"images/MAN_VKL_Baustelle_F39.jpg", id:"MAN_VKL_Baustelle_F39"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/tge.png", id:"tge"},
		{src:"images/van.png", id:"van"}
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
an.compositions['66B4ED7846197346959654EF6606C1B1'] = {
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