(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,119);


(lib.Logo_Badge_MAN_RGB = function() {
	this.initialize(img.Logo_Badge_MAN_RGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,808,453);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,694);


(lib.MAN_4er_Range_ohne_Beschnitt_F39 = function() {
	this.initialize(img.MAN_4er_Range_ohne_Beschnitt_F39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,797);


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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MAN_4er_Range_ohne_Beschnitt_F39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.255,1.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,1254.7,1000), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).wait(314).to({x:241.6,y:307.9},0).wait(1));

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
	this.instance_3 = new lib.Logo_Badge_MAN_RGB();
	this.instance_3.parent = this;
	this.instance_3.setTransform(217,788,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(601));

	// tge
	this.instance_4 = new lib.tge();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25,31);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).wait(477));

	// Ebene_2
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.5,67.5,1,1,0,0,0,216.5,41.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(103).to({_off:true},1).wait(488));

	// foto
	this.instance_6 = new lib.Symbol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(580.4,500,1,1,0,0,0,627.4,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:627.3,x:577.5},0).wait(1).to({x:574.6},0).wait(1).to({x:571.8},0).wait(1).to({x:568.9},0).wait(1).to({x:566},0).wait(1).to({x:563.2},0).wait(1).to({x:560.3},0).wait(1).to({x:557.5},0).wait(1).to({x:554.6},0).wait(1).to({x:551.7},0).wait(1).to({x:548.9},0).wait(1).to({x:546},0).wait(1).to({x:543.1},0).wait(1).to({x:540.3},0).wait(1).to({x:537.4},0).wait(1).to({x:534.6},0).wait(1).to({x:531.7},0).wait(1).to({x:528.8},0).wait(1).to({x:526},0).wait(1).to({x:523.1},0).wait(1).to({x:520.2},0).wait(1).to({x:517.4},0).wait(1).to({x:514.5},0).wait(1).to({x:511.7},0).wait(1).to({x:508.8},0).wait(1).to({x:505.9},0).wait(1).to({x:503.1},0).wait(1).to({x:500.2},0).wait(1).to({x:497.4},0).wait(1).to({x:494.5},0).wait(1).to({x:491.6},0).wait(1).to({x:488.8},0).wait(1).to({x:485.9},0).wait(1).to({x:483},0).wait(1).to({x:480.2},0).wait(1).to({x:477.3},0).wait(1).to({x:474.5},0).wait(1).to({x:471.6},0).wait(1).to({x:468.7},0).wait(1).to({x:465.9},0).wait(1).to({x:463},0).wait(1).to({x:460.1},0).wait(1).to({x:457.3},0).wait(1).to({x:454.4},0).wait(1).to({x:451.6},0).wait(1).to({x:448.7},0).wait(1).to({x:445.8},0).wait(1).to({x:443},0).wait(1).to({x:440.1},0).wait(1).to({x:437.2},0).wait(1).to({x:434.4},0).wait(1).to({x:431.5},0).wait(1).to({x:428.7},0).wait(1).to({x:425.8},0).wait(1).to({x:422.9},0).wait(1).to({x:420.1},0).wait(1).to({x:417.2},0).wait(1).to({x:414.4},0).wait(1).to({x:411.5},0).wait(1).to({x:408.6},0).wait(1).to({x:405.8},0).wait(1).to({x:402.9},0).wait(1).to({x:400},0).wait(1).to({x:397.2},0).wait(1).to({x:394.3},0).wait(1).to({x:391.5},0).wait(1).to({x:388.6},0).wait(1).to({x:385.7},0).wait(1).to({x:382.9},0).wait(1).to({x:380},0).wait(1).to({x:377.1},0).wait(1).to({x:374.3},0).wait(1).to({x:371.4},0).wait(1).to({x:368.6},0).wait(1).to({x:365.7},0).wait(1).to({x:362.8},0).wait(1).to({x:360},0).wait(1).to({x:357.1},0).wait(1).to({x:354.2},0).wait(1).to({x:351.4},0).wait(1).to({x:348.5},0).wait(1).to({x:345.7},0).wait(1).to({x:342.8},0).wait(1).to({x:339.9},0).wait(1).to({x:337.1},0).wait(1).to({x:334.2},0).wait(1).to({x:331.3},0).wait(1).to({x:328.5},0).wait(1).to({x:325.6},0).wait(1).to({x:322.8},0).wait(1).to({x:319.9},0).wait(1).to({x:317},0).wait(1).to({x:314.2},0).wait(1).to({x:311.3},0).wait(1).to({x:308.5},0).wait(1).to({x:305.6},0).wait(1).to({x:302.7},0).wait(1).to({x:299.9},0).wait(1).to({x:297},0).wait(1).to({x:294.1},0).wait(1).to({x:291.3},0).wait(1).to({x:288.4},0).wait(1).to({x:285.6},0).wait(1).to({x:282.7},0).wait(1).to({x:279.8},0).wait(1).to({x:277},0).wait(1).to({x:274.1},0).wait(1).to({x:271.2},0).wait(1).to({x:268.4},0).wait(1).to({x:265.5},0).wait(1).to({x:262.7},0).wait(1).to({x:259.8},0).wait(1).to({x:256.9},0).wait(1).to({x:254.1},0).wait(1).to({x:251.2},0).wait(1).to({x:248.3},0).wait(1).to({x:245.5},0).wait(1).to({x:242.6},0).wait(1).to({x:239.8},0).wait(1).to({x:236.9},0).wait(1).to({x:234},0).wait(1).to({x:231.2},0).wait(1).to({x:228.3},0).wait(1).to({x:225.4},0).wait(17).to({x:226.2},0).wait(1).to({x:227},0).wait(1).to({x:227.8},0).wait(1).to({x:228.6},0).wait(1).to({x:229.4},0).wait(1).to({x:230.1},0).wait(1).to({x:230.9},0).wait(1).to({x:231.7},0).wait(1).to({x:232.5},0).wait(1).to({x:233.3},0).wait(1).to({x:234},0).wait(1).to({x:234.8},0).wait(1).to({x:235.6},0).wait(1).to({x:236.4},0).wait(1).to({x:237.2},0).wait(1).to({x:237.9},0).wait(1).to({x:238.7},0).wait(1).to({x:239.5},0).wait(1).to({x:240.3},0).wait(1).to({x:241.1},0).wait(1).to({x:241.8},0).wait(1).to({x:242.6},0).wait(1).to({x:243.4},0).wait(1).to({x:244.2},0).wait(1).to({x:245},0).wait(1).to({x:245.7},0).wait(1).to({x:246.5},0).wait(1).to({x:247.3},0).wait(1).to({x:248.1},0).wait(1).to({x:248.9},0).wait(1).to({x:249.6},0).wait(1).to({x:250.4},0).wait(1).to({x:251.2},0).wait(1).to({x:252},0).wait(1).to({x:252.8},0).wait(1).to({x:253.5},0).wait(1).to({x:254.3},0).wait(1).to({x:255.1},0).wait(1).to({x:255.9},0).wait(1).to({x:256.7},0).wait(1).to({x:257.4},0).wait(1).to({x:258.2},0).wait(1).to({x:259},0).wait(1).to({x:259.8},0).wait(1).to({x:260.6},0).wait(1).to({x:261.4},0).wait(1).to({x:262.1},0).wait(1).to({x:262.9},0).wait(1).to({x:263.7},0).wait(1).to({x:264.5},0).wait(1).to({x:265.3},0).wait(1).to({x:266},0).wait(1).to({x:266.8},0).wait(1).to({x:267.6},0).wait(1).to({x:268.4},0).wait(1).to({x:269.2},0).wait(1).to({x:269.9},0).wait(1).to({x:270.7},0).wait(1).to({x:271.5},0).wait(1).to({x:272.3},0).wait(1).to({x:273.1},0).wait(1).to({x:273.8},0).wait(1).to({x:274.6},0).wait(1).to({x:275.4},0).wait(1).to({x:276.2},0).wait(1).to({x:277},0).wait(1).to({x:277.7},0).wait(1).to({x:278.5},0).wait(1).to({x:279.3},0).wait(1).to({x:280.1},0).wait(1).to({x:280.9},0).wait(1).to({x:281.6},0).wait(1).to({x:282.4},0).wait(1).to({x:283.2},0).wait(1).to({x:284},0).wait(1).to({x:284.8},0).wait(1).to({x:285.5},0).wait(1).to({x:286.3},0).wait(1).to({x:287.1},0).wait(1).to({x:287.9},0).wait(1).to({x:288.7},0).wait(1).to({x:289.4},0).wait(1).to({x:290.2},0).wait(1).to({x:291},0).wait(1).to({x:291.8},0).wait(1).to({x:292.6},0).wait(1).to({x:293.4},0).wait(1).to({x:294.1},0).wait(1).to({x:294.9},0).wait(1).to({x:295.7},0).wait(1).to({x:296.5},0).wait(1).to({x:297.3},0).wait(1).to({x:298},0).wait(1).to({x:298.8},0).wait(1).to({x:299.6},0).wait(1).to({x:300.4},0).wait(1).to({x:301.2},0).wait(1).to({x:301.9},0).wait(1).to({x:302.7},0).wait(1).to({x:303.5},0).wait(1).to({x:304.3},0).wait(1).to({x:305.1},0).wait(1).to({x:305.8},0).wait(1).to({x:306.6},0).wait(1).to({x:307.4},0).wait(1).to({x:308.2},0).wait(1).to({x:309},0).wait(1).to({x:309.7},0).wait(1).to({x:310.5},0).wait(1).to({x:311.3},0).wait(1).to({x:312.1},0).wait(1).to({x:312.9},0).wait(1).to({x:313.6},0).wait(1).to({x:314.4},0).wait(1).to({x:315.2},0).wait(1).to({x:316},0).wait(1).to({x:316.8},0).wait(1).to({x:317.5},0).wait(1).to({x:318.3},0).wait(1).to({x:319.1},0).wait(1).to({x:319.9},0).wait(1).to({x:320.7},0).wait(1).to({x:321.5},0).wait(1).to({x:322.2},0).wait(1).to({x:323},0).wait(1).to({x:323.8},0).wait(1).to({x:324.6},0).wait(1).to({x:325.4},0).wait(1).to({x:326.1},0).wait(1).to({x:326.9},0).wait(1).to({x:327.7},0).wait(1).to({x:328.5},0).wait(1).to({x:329.3},0).wait(1).to({x:330},0).wait(1).to({x:330.8},0).wait(1).to({x:331.6},0).wait(1).to({x:332.4},0).wait(1).to({x:333.2},0).wait(1).to({x:333.9},0).wait(1).to({x:334.7},0).wait(1).to({x:335.5},0).wait(57).to({x:335.1},0).wait(1).to({x:334.7},0).wait(1).to({x:334.2},0).wait(1).to({x:333.8},0).wait(1).to({x:333.4},0).wait(1).to({x:333},0).wait(1).to({x:332.6},0).wait(1).to({x:332.2},0).wait(1).to({x:331.7},0).wait(1).to({x:331.3},0).wait(1).to({x:330.9},0).wait(1).to({x:330.5},0).wait(1).to({x:330.1},0).wait(1).to({x:329.6},0).wait(1).to({x:329.2},0).wait(1).to({x:328.8},0).wait(1).to({x:328.4},0).wait(1).to({x:328},0).wait(1).to({x:327.6},0).wait(1).to({x:327.1},0).wait(1).to({x:326.7},0).wait(1).to({x:326.3},0).wait(1).to({x:325.9},0).wait(1).to({x:325.5},0).wait(1).to({x:325},0).wait(1).to({x:324.6},0).wait(1).to({x:324.2},0).wait(1).to({x:323.8},0).wait(1).to({x:323.4},0).wait(1).to({x:322.9},0).wait(1).to({x:322.5},0).wait(1).to({x:322.1},0).wait(1).to({x:321.7},0).wait(1).to({x:321.3},0).wait(1).to({x:320.9},0).wait(1).to({x:320.4},0).wait(1).to({x:320},0).wait(1).to({x:319.6},0).wait(1).to({x:319.2},0).wait(1).to({x:318.8},0).wait(1).to({x:318.3},0).wait(1).to({x:317.9},0).wait(1).to({x:317.5},0).wait(1).to({x:317.1},0).wait(1).to({x:316.7},0).wait(1).to({x:316.3},0).wait(1).to({x:315.8},0).wait(1).to({x:315.4},0).wait(1).to({x:315},0).wait(1).to({x:314.6},0).wait(1).to({x:314.2},0).wait(1).to({x:313.7},0).wait(1).to({x:313.3},0).wait(1).to({x:312.9},0).wait(1).to({x:312.5},0).wait(1).to({x:312.1},0).wait(1).to({x:311.6},0).wait(1).to({x:311.2},0).wait(1).to({x:310.8},0).wait(1).to({x:310.4},0).wait(1).to({x:310},0).wait(1).to({x:309.6},0).wait(1).to({x:309.1},0).wait(1).to({x:308.7},0).wait(1).to({x:308.3},0).wait(1).to({x:307.9},0).wait(1).to({x:307.5},0).wait(1).to({x:307},0).wait(1).to({x:306.6},0).wait(1).to({x:306.2},0).wait(1).to({x:305.8},0).wait(1).to({x:305.4},0).wait(1).to({x:305},0).wait(1).to({x:304.5},0).wait(1).to({x:304.1},0).wait(1).to({x:303.7},0).wait(1).to({x:303.3},0).wait(1).to({x:302.9},0).wait(1).to({x:302.4},0).wait(1).to({x:302},0).wait(1).to({x:301.6},0).wait(1).to({x:301.2},0).wait(1).to({x:300.8},0).wait(1).to({x:300.4},0).wait(1).to({x:299.9},0).wait(1).to({x:299.5},0).wait(1).to({x:299.1},0).wait(1).to({x:298.7},0).wait(1).to({x:298.3},0).wait(1).to({x:297.8},0).wait(1).to({x:297.4},0).wait(1).to({x:297},0).wait(1).to({x:296.6},0).wait(1).to({x:296.2},0).wait(1).to({x:295.7},0).wait(1).to({x:295.3},0).wait(1).to({x:294.9},0).wait(1).to({x:294.5},0).wait(1).to({x:294.1},0).wait(1).to({x:293.7},0).wait(1).to({x:293.2},0).wait(1).to({x:292.8},0).wait(1).to({x:292.4},0).wait(1).to({x:292},0).wait(1).to({x:291.6},0).wait(1).to({x:291.1},0).wait(1).to({x:290.7},0).wait(1).to({x:290.3},0).wait(1).to({x:289.9},0).wait(1).to({x:289.5},0).wait(1).to({x:289.1},0).wait(1).to({x:288.6},0).wait(1).to({x:288.2},0).wait(1).to({x:287.8},0).wait(1).to({x:287.4},0).wait(1).to({x:287},0).wait(1).to({x:286.5},0).wait(1).to({x:286.1},0).wait(1).to({x:285.7},0).wait(1).to({x:285.3},0).wait(1).to({x:284.9},0).wait(1).to({x:284.5},0).wait(1).to({x:284},0).wait(1).to({x:283.6},0).wait(1).to({x:283.2},0).wait(1).to({x:282.8},0).wait(1).to({x:282.4},0).wait(1).to({x:281.9},0).wait(1).to({x:281.5},0).wait(1).to({x:281.1},0).wait(1).to({x:280.7},0).wait(1).to({x:280.3},0).wait(1).to({x:279.8},0).wait(1).to({x:279.4},0).wait(1).to({x:279},0).wait(1).to({x:278.6},0).wait(1).to({x:278.2},0).wait(1).to({x:277.8},0).wait(1).to({x:277.3},0).wait(1).to({x:276.9},0).wait(1).to({x:276.5},0).wait(1).to({x:276.1},0).wait(1).to({x:275.7},0).wait(1).to({x:275.2},0).wait(1).to({x:274.8},0).wait(1).to({x:274.4},0).wait(1).to({x:274},0).wait(1).to({x:273.6},0).wait(1).to({x:273.2},0).wait(1).to({x:272.7},0).wait(1).to({x:272.3},0).wait(1).to({x:271.9},0).wait(1).to({x:271.5},0).wait(1).to({x:271.1},0).wait(1).to({x:270.6},0).wait(1).to({x:270.2},0).wait(1).to({x:269.8},0).wait(1).to({x:269.4},0).wait(1).to({x:269},0).wait(1).to({x:268.5},0).wait(1).to({x:268.1},0).wait(1).to({x:267.7},0).wait(1).to({x:267.3},0).wait(1).to({x:266.9},0).wait(1).to({x:266.5},0).wait(1).to({x:266},0).wait(1).to({x:265.6},0).wait(1).to({x:265.2},0).wait(1).to({x:264.8},0).wait(1).to({x:264.4},0).wait(1).to({x:263.9},0).wait(1).to({x:263.5},0).wait(1).to({x:263.1},0).wait(1).to({x:262.7},0).wait(1).to({x:262.3},0).wait(1).to({x:261.9},0).wait(1).to({x:261.4},0).wait(1).to({x:261},0).wait(1).to({x:260.6},0).wait(1).to({x:260.2},0).wait(1).to({x:259.8},0).wait(1).to({x:259.3},0).wait(1).to({x:258.9},0).wait(1).to({x:258.5},0).wait(1).to({x:258.1},0).wait(1).to({x:257.7},0).wait(1).to({x:257.3},0).wait(1).to({x:256.8},0).wait(1).to({x:256.4},0).wait(1).to({x:256},0).wait(1).to({x:255.6},0).wait(1).to({x:255.2},0).wait(1).to({x:254.7},0).wait(1).to({x:254.3},0).wait(1).to({x:253.9},0).wait(1).to({x:253.5},0).wait(1).to({x:253.1},0).wait(1).to({x:252.6},0).wait(1).to({x:252.2},0).wait(1).to({x:251.8},0).wait(1).to({x:251.4},0).wait(1).to({x:251},0).wait(1).to({x:250.6},0).wait(1).to({x:250.1},0).wait(1).to({x:249.7},0).wait(1).to({x:249.3},0).wait(1).to({x:248.9},0).wait(1).to({x:248.5},0).wait(1).to({x:248},0).wait(1).to({x:247.6},0).wait(1).to({x:247.2},0).wait(1).to({x:246.8},0).wait(1).to({x:246.4},0).wait(1).to({x:246},0).wait(1).to({x:245.5},0).wait(1).to({x:245.1},0).wait(1).to({x:244.7},0).wait(1).to({x:244.3},0).wait(1).to({x:243.9},0).wait(1).to({x:243.4},0).wait(1).to({x:243},0).wait(1).to({x:242.6},0).wait(1).to({x:242.2},0).wait(1).to({x:241.8},0).wait(1).to({x:241.4},0).wait(1).to({x:240.9},0).wait(1).to({x:240.5},0).wait(1).to({x:240.1},0).wait(1).to({x:239.7},0).wait(1).to({x:239.3},0).wait(1).to({x:238.8},0).wait(1).to({x:238.4},0).wait(1).to({x:238},0).wait(1).to({x:237.6},0).wait(1).to({x:237.2},0).wait(1).to({x:236.7},0).wait(1).to({x:236.3},0).wait(1).to({x:235.9},0).wait(1).to({x:235.5},0).wait(1).to({x:235.1},0).wait(1).to({x:234.7},0).wait(1).to({x:234.2},0).wait(1).to({x:233.8},0).wait(1).to({x:233.4},0).wait(1).to({x:233},0).wait(1).to({x:232.6},0).wait(1).to({x:232.1},0).wait(1).to({x:231.7},0).wait(1).to({x:231.3},0).wait(1).to({x:230.9},0).wait(1).to({x:230.5},0).wait(1).to({x:230.1},0).wait(1).to({x:229.6},0).wait(1).to({x:229.2},0).wait(1).to({x:228.8},0).wait(1).to({x:228.4},0).wait(1).to({x:228},0).wait(1).to({x:227.5},0).wait(1).to({x:227.1},0).wait(1).to({x:226.7},0).wait(1).to({x:226.3},0).wait(1).to({x:225.9},0).wait(1).to({x:225.4},0).wait(1));

	// foto
	this.instance_7 = new lib.Symbol11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(627.3,500.1,1.357,1.357,0,0,0,462.4,368.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:625.3},0).wait(1).to({x:623.3},0).wait(1).to({x:621.3},0).wait(1).to({x:619.3},0).wait(1).to({x:617.3},0).wait(1).to({x:615.3},0).wait(1).to({x:613.3},0).wait(1).to({x:611.3},0).wait(1).to({x:609.3},0).wait(1).to({x:607.3},0).wait(1).to({x:605.3},0).wait(1).to({x:603.3},0).wait(1).to({x:601.3},0).wait(1).to({x:599.3},0).wait(1).to({x:597.3},0).wait(1).to({x:595.3},0).wait(1).to({x:593.3},0).wait(1).to({x:591.2},0).wait(1).to({x:589.2},0).wait(1).to({x:587.2},0).wait(1).to({x:585.2},0).wait(1).to({x:583.2},0).wait(1).to({x:581.2},0).wait(1).to({x:579.2},0).wait(1).to({x:577.2},0).wait(1).to({x:575.2},0).wait(1).to({x:573.2},0).wait(1).to({x:571.2},0).wait(1).to({x:569.2},0).wait(1).to({x:567.2},0).wait(1).to({x:565.2},0).wait(1).to({x:563.2},0).wait(1).to({x:561.2},0).wait(1).to({x:559.2},0).wait(1).to({x:557.2},0).wait(1).to({x:555.2},0).wait(1).to({x:553.2},0).wait(1).to({x:551.2},0).wait(1).to({x:549.2},0).wait(1).to({x:547.2},0).wait(1).to({x:545.2},0).wait(1).to({x:543.2},0).wait(1).to({x:541.2},0).wait(1).to({x:539.2},0).wait(1).to({x:537.2},0).wait(1).to({x:535.2},0).wait(1).to({x:533.2},0).wait(1).to({x:531.2},0).wait(1).to({x:529.2},0).wait(1).to({x:527.2},0).wait(1).to({x:525.2},0).wait(1).to({x:523.2},0).wait(1).to({x:521.1},0).wait(1).to({x:519.1},0).wait(1).to({x:517.1},0).wait(1).to({x:515.1},0).wait(1).to({x:513.1},0).wait(1).to({x:511.1},0).wait(1).to({x:509.1},0).wait(1).to({x:507.1},0).wait(1).to({x:505.1},0).wait(1).to({x:503.1},0).wait(1).to({x:501.1},0).wait(1).to({x:499.1},0).wait(1).to({x:497.1},0).wait(1).to({x:495.1},0).wait(1).to({x:493.1},0).wait(1).to({x:491.1},0).wait(1).to({x:489.1},0).wait(1).to({x:487.1},0).wait(1).to({x:485.1},0).wait(1).to({x:483.1},0).wait(1).to({scaleX:1.36,x:481.1},0).wait(1).to({x:479.1},0).wait(1).to({x:477.1},0).wait(1).to({x:475.1},0).wait(1).to({x:473.1},0).wait(1).to({x:471.1},0).wait(1).to({x:469.1},0).wait(1).to({x:467.1},0).wait(1).to({x:465.1},0).wait(1).to({x:463.1},0).wait(1).to({x:461.1},0).wait(1).to({x:459.1},0).wait(1).to({x:457.1},0).wait(1).to({x:455.1},0).wait(1).to({x:453.1},0).wait(1).to({x:451},0).wait(1).to({x:449},0).wait(1).to({x:447},0).wait(1).to({x:445},0).wait(1).to({x:443},0).wait(1).to({x:441},0).wait(1).to({x:439},0).wait(1).to({x:437},0).wait(1).to({x:435},0).wait(1).to({x:433},0).wait(1).to({x:431},0).wait(1).to({x:429},0).wait(1).to({x:427},0).wait(1).to({x:425},0).wait(1).to({x:423},0).wait(1).to({x:421},0).wait(1).to({x:419},0).wait(1).to({x:417},0).wait(1).to({x:415},0).wait(1).to({x:413},0).wait(1).to({x:411},0).wait(1).to({x:409},0).wait(1).to({x:407},0).wait(1).to({x:405},0).wait(1).to({x:403},0).wait(1).to({x:401},0).wait(1).to({x:399},0).wait(1).to({x:397},0).wait(1).to({x:395},0).wait(1).to({x:393},0).wait(1).to({x:391},0).wait(1).to({x:389},0).wait(1).to({x:387},0).wait(1).to({x:385},0).wait(1).to({x:383},0).wait(1).to({x:380.9},0).wait(1).to({x:378.9},0).wait(1).to({x:376.9},0).wait(1).to({x:374.9},0).wait(1).to({x:372.9},0).wait(1).to({x:370.9},0).wait(1).to({x:368.9},0).wait(1).to({x:366.9},0).wait(1).to({x:364.9},0).wait(1).to({x:362.9},0).wait(1).to({x:360.9},0).wait(1).to({x:358.9},0).wait(1).to({x:356.9},0).wait(1).to({x:354.9},0).wait(1).to({x:352.9},0).wait(1).to({x:350.9},0).wait(1).to({x:348.9},0).wait(1).to({x:346.9},0).wait(1).to({x:344.9},0).wait(1).to({x:342.9},0).wait(1).to({x:340.9},0).wait(1).to({x:338.9},0).wait(1).to({x:336.9},0).wait(1).to({x:334.9},0).wait(1).to({x:332.9},0).wait(1).to({x:330.9},0).wait(1).to({x:328.9},0).wait(1).to({x:326.9},0).wait(1).to({x:324.9},0).wait(1).to({x:322.9},0).wait(1).to({x:320.9},0).wait(1).to({x:318.9},0).wait(1).to({x:316.9},0).wait(1).to({x:314.9},0).wait(1).to({x:312.9},0).wait(1).to({x:310.8},0).wait(1).to({x:308.8},0).wait(1).to({x:306.8},0).wait(1).to({x:304.8},0).wait(1).to({x:302.8},0).wait(1).to({x:300.8},0).wait(1).to({x:298.8},0).wait(1).to({x:296.8},0).wait(1).to({x:294.8},0).wait(1).to({x:292.8},0).wait(1).to({x:290.8},0).wait(1).to({x:288.8},0).wait(1).to({x:286.8},0).wait(1).to({x:284.8},0).wait(1).to({x:282.8},0).wait(1).to({x:280.8},0).wait(1).to({x:278.8},0).wait(1).to({x:276.8},0).wait(1).to({x:274.8},0).wait(1).to({x:272.8},0).wait(1).to({x:270.8},0).wait(1).to({x:268.8},0).wait(1).to({x:266.8},0).wait(1).to({x:264.8},0).wait(1).to({x:262.8},0).wait(1).to({x:260.8},0).wait(1).to({x:258.8},0).wait(1).to({x:256.8},0).wait(1).to({x:254.8},0).wait(1).to({x:252.8},0).wait(1).to({x:250.8},0).wait(1).to({x:248.8},0).wait(1).to({x:246.8},0).wait(1).to({x:244.8},0).wait(1).to({x:242.8},0).wait(1).to({x:240.7},0).wait(1).to({x:238.7},0).wait(1).to({x:236.7},0).wait(1).to({x:234.7},0).wait(1).to({x:232.7},0).wait(1).to({x:230.7},0).wait(1).to({x:228.7},0).wait(1).to({x:226.7},0).wait(1).to({x:224.7},0).wait(1).to({x:222.7},0).wait(1).to({x:220.7},0).wait(1).to({x:218.7},0).wait(1).to({x:216.7},0).wait(1).to({x:214.7},0).wait(1).to({x:212.7},0).wait(1).to({x:210.7},0).wait(1).to({x:208.7},0).wait(1).to({x:206.7},0).wait(1).to({x:204.7},0).wait(1).to({x:202.7},0).wait(1).to({x:200.7},0).wait(1).to({x:198.7},0).wait(1).to({x:196.6},0).wait(1).to({x:194.6},0).wait(1).to({x:192.6},0).wait(1).to({scaleX:1.36,x:192.7},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:192.8},0).wait(1).to({scaleY:1.36,x:192.9},0).wait(1).to({scaleX:1.36},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:193},0).wait(1).to({scaleY:1.36},0).wait(1).to({scaleX:1.36,x:193.1},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:193.2},0).wait(1).to({scaleY:1.36,x:193.3},0).wait(1).to({scaleX:1.36},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:193.4},0).wait(1).to({scaleY:1.37},0).wait(1).to({scaleX:1.37,x:193.5},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:193.6},0).wait(1).to({scaleY:1.37,x:193.7},0).wait(1).to({scaleX:1.37},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:193.8},0).wait(1).to({scaleY:1.37},0).wait(1).to({scaleX:1.37,x:193.9},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:194},0).wait(1).to({scaleY:1.37,x:194.1},0).wait(1).to({scaleX:1.37},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:194.2},0).wait(1).to({scaleY:1.37},0).wait(1).to({scaleX:1.37,x:194.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:194.4},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:194.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:194.6},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:194.7},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:194.8},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:194.9},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:195},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:195.1},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:195.2},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:195.3},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:195.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:195.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:195.6},0).wait(2).to({scaleX:1.39,scaleY:1.39,x:195.7},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({x:195.8},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:195.9},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:196},0).wait(2).to({scaleX:1.39,scaleY:1.39,x:196.1},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({x:196.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:196.3},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:196.4},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:196.5},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:196.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:196.7},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:196.8},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:196.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:197},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:197.1},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:197.2},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:197.3},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:197.4},0).wait(2).to({scaleX:1.41,scaleY:1.41,x:197.5},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:197.6},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:197.7},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:197.8},0).wait(2).to({scaleX:1.41,scaleY:1.41,x:197.9},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:198},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:198.1},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:198.2},0).wait(2).to({scaleX:1.41,scaleY:1.41,x:198.3},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:198.4},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:198.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:198.6},0).wait(2).to({scaleX:1.42,scaleY:1.42,x:198.7},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:198.8},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:198.9},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:199},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:199.1},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:199.2},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:199.3},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:199.4},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:199.5},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({x:199.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:199.7},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({x:199.8},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:199.9},0).wait(1).to({x:200},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:200.1},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({x:200.2},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:200.3},0).wait(1).to({x:200.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:200.5},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({x:200.6},0).wait(2).to({x:200.7},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:200.8},0).wait(1).to({x:200.9},0).wait(2).to({scaleX:1.43,scaleY:1.43,x:201},0).wait(1).to({x:201.1},0).wait(2).to({scaleX:1.43,scaleY:1.43,x:201.2},0).wait(2).to({x:201.3},0).wait(1).to({x:201.4},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:201.5},0).wait(2).to({x:201.6},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({x:201.7},0).wait(1).to({x:201.8},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:201.9},0).wait(2).to({x:202},0).wait(2).to({scaleX:1.43,scaleY:1.43,x:202.1},0).wait(1).to({x:202.2},0).wait(2).to({scaleX:1.43,scaleY:1.43,x:202.3},0).wait(1).to({x:202.4},0).wait(1).to({x:202.5},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({x:202.6},0).wait(2).to({x:202.7},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:202.8},0).wait(1).to({x:202.9},0).wait(2).to({scaleX:1.43,scaleY:1.43,x:203},0).wait(2).to({x:203.1},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:203.2},0).wait(2).to({x:203.3},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:203.4},0).wait(1).to({x:203.5},0).wait(2).to({x:203.6},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:203.7},0).wait(1).to({x:203.8},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:203.9},0).wait(1).to({x:204},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:204.1},0).wait(1).to({x:204.2},0).wait(2).to({scaleX:1.42,scaleY:1.42,x:204.3},0).wait(2).to({x:204.5},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({x:204.6},0).wait(2).to({scaleX:1.42,scaleY:1.42,x:204.7},0).wait(2).to({x:204.8},0).wait(1).to({x:204.9},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:205},0).wait(2).to({x:205.1},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:205.2},0).wait(2).to({x:205.3},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:205.4},0).wait(1).to({x:205.5},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:205.6},0).wait(2).to({x:205.7},0).wait(2).to({scaleX:1.41,scaleY:1.41,x:205.8},0).wait(1).to({x:205.9},0).wait(1).to({x:206},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:206.1},0).wait(1).to({x:206.2},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:206.3},0).wait(2).to({x:206.4},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:206.5},0).wait(1).to({x:206.6},0).wait(2).to({scaleX:1.41,scaleY:1.41,x:206.7},0).wait(2).to({x:206.8},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:206.9},0).wait(2).to({x:207},0).wait(1).to({x:207.1},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:207.2},0).wait(2).to({x:207.3},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({x:207.4},0).wait(1).to({x:207.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:207.6},0).wait(2).to({x:207.7},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:207.8},0).wait(1).to({x:207.9},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:208},0).wait(1).to({x:208.1},0).wait(1).to({x:208.2},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:208.3},0).wait(2).to({scaleX:1.4,scaleY:1.4,x:208.4},0).wait(1).to({x:208.5},0).wait(2).to({x:208.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:208.7},0).wait(2).to({x:208.8},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:208.9},0).wait(2).to({x:209},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:209.1},0).wait(1).to({x:209.2},0).wait(1).to({x:209.3},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:209.4},0).wait(1).to({x:209.5},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({x:209.6},0).wait(1).to({x:209.7},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({x:209.8},0).wait(1).to({x:209.9},0).wait(1).to({scaleX:1.39},0).wait(1).to({scaleY:1.39,x:210},0).wait(2).to({x:210.1},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:210.2},0).wait(1).to({x:210.3},0).wait(2).to({scaleX:1.39,scaleY:1.39,x:210.4},0).wait(2).to({x:210.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:210.6},0).wait(1).to({x:210.7},0).wait(2).to({x:210.8},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:210.9},0).wait(2).to({x:211},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({x:211.1},0).wait(1).to({x:211.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:211.3},0).wait(2).to({x:211.4},0).wait(2).to({scaleX:1.39,scaleY:1.39,x:211.5},0).wait(1).to({x:211.6},0).wait(2).to({scaleX:1.39,scaleY:1.39,x:211.7},0).wait(1).to({x:211.8},0).wait(1).to({x:211.9},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:212},0).wait(2).to({scaleX:1.38,x:212.1},0).wait(1).to({scaleY:1.38,x:212.2},0).wait(1).to({x:212.3},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:212.4},0).wait(2).to({x:212.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:212.6},0).wait(2).to({x:212.7},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:212.8},0).wait(1).to({x:212.9},0).wait(2).to({x:213},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:213.1},0).wait(1).to({x:213.2},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:213.3},0).wait(1).to({x:213.4},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:213.5},0).wait(1).to({x:213.6},0).wait(2).to({scaleX:1.38,scaleY:1.38,x:213.7},0).wait(2).to({x:213.9},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({x:214},0).wait(2).to({scaleX:1.37,scaleY:1.37,x:214.1},0).wait(1).to({x:214.2},0).wait(2).to({scaleX:1.37,x:214.3},0).wait(1).to({scaleY:1.37,x:214.4},0).wait(2).to({x:214.5},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:214.6},0).wait(2).to({x:214.7},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({x:214.8},0).wait(1).to({x:214.9},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:215},0).wait(2).to({x:215.1},0).wait(2).to({scaleX:1.37,scaleY:1.37,x:215.2},0).wait(1).to({x:215.3},0).wait(1).to({x:215.4},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({x:215.5},0).wait(1).to({x:215.6},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({x:215.7},0).wait(2).to({x:215.8},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:215.9},0).wait(1).to({x:216},0).wait(2).to({scaleX:1.37,scaleY:1.37,x:216.1},0).wait(2).to({x:216.2},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:216.3},0).wait(2).to({x:216.4},0).wait(1).to({scaleX:1.36,x:216.5},0).wait(1).to({scaleY:1.36,x:216.6},0).wait(2).to({x:216.7},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({x:216.8},0).wait(1).to({x:216.9},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:217},0).wait(2).to({x:217.1},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({x:217.2},0).wait(1).to({x:217.3},0).wait(2).to({scaleX:1.36,scaleY:1.36,x:217.4},0).wait(1).to({x:217.5},0).wait(1).to({x:217.6},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({x:217.7},0).wait(2).to({scaleX:1.36,scaleY:1.36,x:217.8},0).wait(2).to({x:217.9},0).wait(1).to({x:218,y:500},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203,500,1301.7,1000);
// library properties:
lib.properties = {
	id: '66B4ED7846197346959654EF6606C1B1',
	width: 500,
	height: 1000,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png?1568204030434", id:"button"},
		{src:"images/Logo_Badge_MAN_RGB.jpg?1568204030434", id:"Logo_Badge_MAN_RGB"},
		{src:"images/man.png?1568204030434", id:"man"},
		{src:"images/MAN_4er_Range_ohne_Beschnitt_F39.jpg?1568204030434", id:"MAN_4er_Range_ohne_Beschnitt_F39"},
		{src:"images/text1.png?1568204030434", id:"text1"},
		{src:"images/tge.png?1568204030434", id:"tge"},
		{src:"images/van.png?1568204030434", id:"van"}
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