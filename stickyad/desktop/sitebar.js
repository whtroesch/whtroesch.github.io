(function(cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.haendler_logo = function() {
    this.initialize(img.haendler_logo);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 77); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
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

  (lib.shield = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Häkchen
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag4gBIAMgMIAeAhIA8g+IALALIhIBKg");
    this.shape.setTransform(8.975, 12.35);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Häkchenhintergrund
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#ffcf3c")
      .s()
      .p("AhTgBQgFgcADgeIACgZIBTgjIBUAjIADAZQACAegEAcQgOBZhHAgQhGgggNhZg");
    this.shape_1.setTransform(8.7, 12.025);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.shield,
    new cjs.Rectangle(0, 0, 17.4, 24.1),
    null
  );

  (lib.logo = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.instance = new lib.haendler_logo();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.logo,
    new cjs.Rectangle(0, 0, 500, 77),
    null
  );

  (lib.liner = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Strichlierte Linie
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#8496b0")
      .s()
      .p(
        "AgJJGIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfgAgGIPQgDgEAAgDIAAggQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAgQAAADgDAEQgDADgEAAQgDAAgDgDgAgGHQQgDgDAAgEIAAggQAAgEADgDQADgDADgBQAEABADADQADADAAAEIAAAgQAAAEgDADQgDADgEAAQgDAAgDgDgAgGGRQgDgDAAgEIAAggQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAgQAAAEgDADQgDADgEAAQgDAAgDgDgAgGFTQgDgEAAgEIAAggQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAgQAAAEgDAEQgDACgEAAQgDAAgDgCgAgGEUQgDgDAAgFIAAggQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAgQAAAFgDADQgDACgEAAQgDAAgDgCgAgGDVQgDgDAAgFIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAFgDADQgDADgEAAQgDAAgDgDgAgGCWQgDgEAAgEIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGBXQgDgDAAgEIAAgfQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAfQAAAEgDADQgDADgEAAQgDAAgDgDgAgGAYQgDgDAAgEIAAgeQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAeQAAAEgDADQgDAEgEgBQgDABgDgEgAgGglQgDgDAAgFIAAgfQAAgFADgCQADgEADAAQAEAAADAEQADACAAAFIAAAfQAAAFgDADQgDACgEAAQgDAAgDgCgAgGhkQgDgEAAgEIAAgfQAAgEADgDQADgDADgBQAEABADADQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGijQgDgEAAgEIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGjiQgDgDAAgFIAAgeQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAeQAAAFgDADQgDADgEAAQgDAAgDgDgAgGkhQgDgDAAgEIAAgfQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEIAAAfQAAAEgDADQgDAEgEgBQgDABgDgEgAgGlgQgDgCAAgFIAAgfQAAgFADgCQADgEADAAQAEAAADAEQADACAAAFIAAAfQAAAFgDACQgDADgEAAQgDAAgDgDgAgGmfQgDgCAAgFIAAgfQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAfQAAAFgDACQgDADgEAAQgDAAgDgDgAgGndQgDgDAAgFIAAgfQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAfQAAAFgDADQgDADgEAAQgDAAgDgDgAgGocQgDgDAAgFIAAgeIABgDIASAAIAAADIAAAeQAAAFgDADQgDADgEAAQgDAAgDgDg"
      );
    this.shape.setTransform(1, 58.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.liner,
    new cjs.Rectangle(0, 0, 2, 116.4),
    null
  );

  (lib.hla = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Headline
    this.txt_hl = new cjs.Text(
      "WIE WÄR'S MIT UNS BEIDEN?",
      "bold 33px 'Open Sans'",
      "#ffcf3c"
    );
    this.txt_hl.name = "txt_hl";
    this.txt_hl.textAlign = "center";
    this.txt_hl.lineHeight = 47;
    this.txt_hl.lineWidth = 496;
    this.txt_hl.parent = this;
    this.txt_hl.setTransform(249.75, 2);

    this.timeline.addTween(cjs.Tween.get(this.txt_hl).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.hla,
    new cjs.Rectangle(0, 0, 499.5, 48.9),
    null
  );

  (lib.cta = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Button Text
    this.txt_cta = new cjs.Text(
      "JETZT ANSEHEN",
      "bold 28px 'Open Sans'",
      "#fff"
    );
    this.txt_cta.name = "txt_cta";
	  this.txt_cta.textBaseline = "middle";
    this.txt_cta.textAlign = "center";
	  this.txt_cta.lineWidth = 272;
    this.txt_cta.parent = this;
    this.txt_cta.setTransform(137.8, 30);

    this.timeline.addTween(cjs.Tween.get(this.txt_cta).wait(1));

    // Button Hintergrund
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#ffcf3c")
      .s()
      .p("A1hEsIAApXMArDAAAIAAJXg");
    this.shape.setTransform(137.8, 30);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.cta,
    new cjs.Rectangle(0, 0, 275.6, 60),
    null
  );

  (lib.comp2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.txt_comp2_sub = new cjs.Text(
      "KM WENIGER",
      "25px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp2_sub.name = "txt_comp2_sub";
    this.txt_comp2_sub.textAlign = "center";
    this.txt_comp2_sub.lineHeight = 40;
    this.txt_comp2_sub.lineWidth = 500;
    this.txt_comp2_sub.parent = this;
    this.txt_comp2_sub.setTransform(105.55, 95.5);

    this.txt_comp2_wert = new cjs.Text(
      "1.200",
      "bold 53px 'Open Sans'",
      "#ffcf3c"
    );
	
	this.txt_comp2_wert.textBaseline = "middle";
    this.txt_comp2_wert.name = "txt_comp2_wert";
    this.txt_comp2_wert.textAlign = "center";
    this.txt_comp2_wert.lineWidth = 500;
	this.txt_comp2_wert.lineHeight = 40;
    this.txt_comp2_wert.parent = this;
    this.txt_comp2_wert.setTransform(105.55, 63);	

    this.txt_comp2_titel = new cjs.Text(
      "UND ICH HABE",
      "25px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp2_titel.name = "txt_comp2_titel";
    this.txt_comp2_titel.textAlign = "center";
    this.txt_comp2_titel.lineHeight = 40;
    this.txt_comp2_titel.lineWidth = 500;
    this.txt_comp2_titel.parent = this;
    this.txt_comp2_titel.setTransform(105.55, 2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.txt_comp2_titel },
            { t: this.txt_comp2_wert },
            { t: this.txt_comp2_sub }
          ]
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.comp2,
    new cjs.Rectangle(0, 0, 211.2, 135.7),
    null
  );

  (lib.comp1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.txt_comp1_sub = new cjs.Text(
      "GÜNSTIGER",
      "25px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp1_sub.name = "txt_comp1_sub";
    this.txt_comp1_sub.textAlign = "center";
    this.txt_comp1_sub.lineHeight = 40;
    this.txt_comp1_sub.lineWidth = 500;
    this.txt_comp1_sub.parent = this;
    this.txt_comp1_sub.setTransform(105.55, 95.5);

    this.txt_comp1_wert = new cjs.Text(
      "€ 500",
      "bold 53px 'Open Sans'",
      "#ffcf3c"
    );
	
	this.txt_comp1_wert.textBaseline = "middle";
    this.txt_comp1_wert.name = "txt_comp1_wert";
    this.txt_comp1_wert.textAlign = "center";
    this.txt_comp1_wert.lineWidth = 500;
	this.txt_comp1_wert.lineHeight = 40;
    this.txt_comp1_wert.parent = this;
    this.txt_comp1_wert.setTransform(105.55, 63);

    this.txt_comp1_titel = new cjs.Text(
      "ICH BIN UM",
      "25px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp1_titel.name = "txt_comp1_titel";
    this.txt_comp1_titel.textAlign = "center";
    this.txt_comp1_titel.lineHeight = 40;
    this.txt_comp1_titel.lineWidth = 500;
    this.txt_comp1_titel.parent = this;
    this.txt_comp1_titel.setTransform(105.55, 2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.txt_comp1_titel },
            { t: this.txt_comp1_wert },
            { t: this.txt_comp1_sub }
          ]
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.comp1,
    new cjs.Rectangle(0, 0, 211.2, 135.7),
    null
  );

  (lib.car_desc = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Fahrzeugtitel - Marke Modell
    this.txt_cardesc = new cjs.Text(
      "FR 1,4 TSI ACT DSG 4 Drive",
      "18px 'Open Sans'",
      "#8496b0"
    );
    this.txt_cardesc.name = "txt_cardesc";
    this.txt_cardesc.textAlign = "center";
    this.txt_cardesc.lineHeight = 27;
    this.txt_cardesc.lineWidth = 495;
    this.txt_cardesc.parent = this;
    this.txt_cardesc.setTransform(249.6, 36.55);

    this.txt_carname = new cjs.Text(
      "Seat Ateca",
      "400 24px 'Open Sans'",
      "#8496b0"
    );
    this.txt_carname.name = "txt_carname";
    this.txt_carname.textAlign = "center";
    this.txt_carname.lineHeight = 32;
    this.txt_carname.lineWidth = 495;
    this.txt_carname.parent = this;
    this.txt_carname.setTransform(250, 2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.txt_carname }, { t: this.txt_cardesc }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.car_desc,
    new cjs.Rectangle(0, 0, 499.7, 76.7),
    null
  );

  (lib.btn_clicktag = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
    this.shape.setTransform(250, 500, 0.5, 1);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(3)
        .to({ _off: false }, 0)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 1000);

  (lib.bphl = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Headline Händlervorteile
    this.txt_bphl = new cjs.Text(
      "Deine VORTEILE beim Händlerkauf:",
      "400 24px 'Open Sans'",
      "#2c2c2c;"
    );
	this.txt_bphl.textBaseline = "top";
    this.txt_bphl.name = "txt_bphl";
    this.txt_bphl.textAlign = "center";
    //this.txt_bphl.lineHeight = 25;
    this.txt_bphl.lineWidth = 448;
    this.txt_bphl.parent = this;
    this.txt_bphl.setTransform(225.95, 8);

    this.timeline.addTween(cjs.Tween.get(this.txt_bphl).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.bphl,
    new cjs.Rectangle(0, 0, 452, 40.8),
    null
  );

  (lib.bp3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Vorteil 3
    this.txt_bp3 = new cjs.Text(
      "Kostenloses Winterservice",
      "300 16px 'Open Sans'",
      "#2c2c2c"
    );
    this.txt_bp3.name = "txt_bp3";
	  this.txt_bp3.textBaseline = "middle";
    this.txt_bp3.lineWidth = 399;
    this.txt_bp3.parent = this;
    this.txt_bp3.setTransform(2, 19);

    this.timeline.addTween(cjs.Tween.get(this.txt_bp3).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.bp3,
    new cjs.Rectangle(0, 0, 403.5, 36.7),
    null
  );

  (lib.bp2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Vorteil 2
    this.txt_bp2 = new cjs.Text(
      "Kostenlose Reifeneinlagerung",
      "300 16px 'Open Sans'",
      "#2c2c2c"
    );
    this.txt_bp2.name = "txt_bp2";
	this.txt_bp2.textBaseline = "middle";
    this.txt_bp2.lineWidth = 399;
    this.txt_bp2.parent = this;
    this.txt_bp2.setTransform(2, 19);

    this.timeline.addTween(cjs.Tween.get(this.txt_bp2).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.bp2,
    new cjs.Rectangle(0, 0, 403.5, 36.7),
    null
  );

  (lib.bp1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Vorteil 1
    this.txt_bp1 = new cjs.Text(
      "2 Jahre erweiterte Garantie",
      "300 16px 'Open Sans'",
      "#272727"
    );
    this.txt_bp1.name = "txt_bp1";
    this.txt_bp1.textBaseline = "middle";
    this.txt_bp1.lineWidth = 399;
    this.txt_bp1.parent = this;
    this.txt_bp1.setTransform(2, 19);

    this.timeline.addTween(cjs.Tween.get(this.txt_bp1).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.bp1,
    new cjs.Rectangle(0, 0, 403.5, 36.7),
    null
  );

  (lib.box = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Kästchen Hintergrund Händlervorteile
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#f5f7fa")
      .s()
      .p("Egi1AMWIAA4rMBFrAAAIAAYrg");
    this.shape.setTransform(223, 79);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.box,
    new cjs.Rectangle(0, 0, 446, 158),
    null
  );

  // stage content:
  (lib.sitebar = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { ender: 249 });

    // timeline functions:
    this.frame_0 = function() {
      this.maxloops = 1;
      if (this.numloops == undefined) {
        this.numloops = 1;
      }
      this.btn_clicktag.addEventListener("click", window.open_clicktag);
    };
    this.frame_249 = function() {
      if (this.maxloops > -1) {
        if (this.numloops < this.maxloops) {
          this.numloops++;
        } else {
          this.stop();
        }
      }
    };
    this.frame_259 = function() {
      this.gotoAndPlay(1);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(249)
        .call(this.frame_249)
        .wait(10)
        .call(this.frame_259)
        .wait(1)
    );

    // clicktag
    this.btn_clicktag = new lib.btn_clicktag();
    this.btn_clicktag.name = "btn_clicktag";
    this.btn_clicktag.parent = this;
    this.btn_clicktag.setTransform(500, 500, 1, 1, 0, 0, 0, 500, 500);
    new cjs.ButtonHelper(
      this.btn_clicktag,
      0,
      1,
      2,
      false,
      new lib.btn_clicktag(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.btn_clicktag).wait(260));

    // liner
    this.instance = new lib.liner();
    this.instance.parent = this;
    this.instance.setTransform(248.85, 572.8, 1, 1, 0, 0, 0, 1, 58.2);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(43)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 6, cjs.Ease.cubicInOut)
        .wait(211)
    );

    // m2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A27MwIAA5fMAt3AAAIAAZfg");
    mask.setTransform(400.4, 572.8);

    // comp2
    this.comp2 = new lib.comp2();
    this.comp2.name = "comp2";
    this.comp2.parent = this;
    this.comp2.setTransform(364.1, 569.75, 1, 1, 0, 0, 0, 105.5, 67.8);
    this.comp2.alpha = 0;

    var maskedShapeInstanceList = [this.comp2];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.comp2)
        .wait(49)
        .to({ x: 141.7, alpha: 1 }, 0)
        .to({ x: 364.1 }, 15, cjs.Ease.cubicInOut)
        .wait(196)
    );

    // m1 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p("A27MwIAA5fMAt3AAAIAAZfg");
    mask_1.setTransform(98.8, 572.8);

    // comp1
    this.comp1 = new lib.comp1();
    this.comp1.name = "comp1";
    this.comp1.parent = this;
    this.comp1.setTransform(135.75, 569.75, 1, 1, 0, 0, 0, 105.5, 67.8);
    this.comp1.alpha = 0;

    var maskedShapeInstanceList = [this.comp1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.comp1)
        .wait(49)
        .to({ x: 353.35, alpha: 1 }, 0)
        .to({ x: 135.75 }, 15, cjs.Ease.cubicInOut)
        .wait(196)
    );

    // cta
    this.cta = new lib.cta();
    this.cta.name = "cta";
    this.cta.parent = this;
    this.cta.setTransform(250, 688.1, 1, 1, 0, 0, 0, 137.8, 30);
    this.cta.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.cta)
        .wait(74)
        .to({ scaleX: 0.6533, scaleY: 0.6533, x: 250.05 }, 0)
        .to(
          { regY: 30.1, scaleX: 1.0638, scaleY: 1.0638, y: 688.2, alpha: 1 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, x: 250, y: 688.1 },
          5,
          cjs.Ease.cubicInOut
        )
        .wait(111)
        .to(
          { regY: 30.1, scaleX: 1.0813, scaleY: 1.0813, y: 688.25 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, y: 688.1 },
          8,
          cjs.Ease.cubicInOut
        )
        .wait(13)
        .to(
          { regY: 30.1, scaleX: 1.0813, scaleY: 1.0813, y: 688.25 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, y: 688.1 },
          8,
          cjs.Ease.cubicInOut
        )
        .wait(14)
    );

    // ico1
    this.instance_1 = new lib.shield();
    this.instance_1.parent = this;
    this.instance_1.setTransform(71.9, 804.3, 1, 1, 0, 0, 0, 8.7, 12);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(124)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 8.8,
            regY: 12.1,
            scaleX: 1.25,
            scaleY: 1.25,
            x: 72.05,
            y: 804.45,
            alpha: 1
          },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regX: 8.7, regY: 12, scaleX: 1, scaleY: 1, x: 71.9, y: 804.3 },
          6,
          cjs.Ease.cubicInOut
        )
        .wait(121)
    );

    // ico2
    this.instance_2 = new lib.shield();
    this.instance_2.parent = this;
    this.instance_2.setTransform(71.9, 839.95, 1, 1, 0, 0, 0, 8.7, 12);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(148)
        .to({ _off: false }, 0)
        .to(
          { regX: 8.8, scaleX: 1.25, scaleY: 1.25, x: 72.05, alpha: 1 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regX: 8.7, scaleX: 1, scaleY: 1, x: 71.9 },
          6,
          cjs.Ease.cubicInOut
        )
        .wait(97)
    );

    // ico3
    this.instance_3 = new lib.shield();
    this.instance_3.parent = this;
    this.instance_3.setTransform(71.9, 875.6, 1, 1, 0, 0, 0, 8.7, 12);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(172)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 8.8,
            regY: 12.1,
            scaleX: 1.2333,
            scaleY: 1.2333,
            x: 72.05,
            y: 875.7,
            alpha: 1
          },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regX: 8.7, regY: 12, scaleX: 1, scaleY: 1, x: 71.9, y: 875.6 },
          6,
          cjs.Ease.cubicInOut
        )
        .wait(73)
    );

    // thl
    this.bphl = new lib.bphl();
    this.bphl.name = "bphl";
    this.bphl.parent = this;
    this.bphl.setTransform(250.05, 770.05, 1, 1, 0, 0, 0, 226, 20.4);
    this.bphl.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.bphl)
        .wait(104)
        .to({ alpha: 1 }, 9, cjs.Ease.cubicInOut)
        .wait(147)
    );

    // bmask (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    mask_2.graphics.p("EggUAIaIAAwzMBApAAAIAAQzg");
    mask_2.setTransform(291.525, 839.775);

    // b1
    this.bp1 = new lib.bp1();
    this.bp1.name = "bp1";
    this.bp1.parent = this;
    this.bp1.setTransform(287.95, 804.35, 1, 1, 0, 0, 0, 201.7, 18.4);
    this.bp1.alpha = 0;

    var maskedShapeInstanceList = [this.bp1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.bp1)
        .wait(133)
        .to({ x: -120.05, alpha: 1 }, 0)
        .to({ x: 287.95 }, 15, cjs.Ease.cubicInOut)
        .wait(112)
    );

    // b2
    this.bp2 = new lib.bp2();
    this.bp2.name = "bp2";
    this.bp2.parent = this;
    this.bp2.setTransform(287.95, 840.15, 1, 1, 0, 0, 0, 201.7, 18.4);
    this.bp2.alpha = 0;

    var maskedShapeInstanceList = [this.bp2];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.bp2)
        .wait(157)
        .to({ x: -120.05, alpha: 1 }, 0)
        .to({ x: 287.95 }, 15, cjs.Ease.cubicInOut)
        .wait(88)
    );

    // b3
    this.bp3 = new lib.bp3();
    this.bp3.name = "bp3";
    this.bp3.parent = this;
    this.bp3.setTransform(287.95, 875.95, 1, 1, 0, 0, 0, 201.7, 18.4);
    this.bp3.alpha = 0;

    var maskedShapeInstanceList = [this.bp3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.bp3)
        .wait(181)
        .to({ x: -120.05, alpha: 1 }, 0)
        .to({ x: 287.95 }, 15, cjs.Ease.cubicInOut)
        .wait(64)
    );

    // hla
    this.hla = new lib.hla();
    this.hla.name = "hla";
    this.hla.parent = this;
    this.hla.setTransform(250.05, 27.15, 1, 1, 0, 0, 0, 249.8, 24.4);
    this.hla.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.hla)
        .wait(4)
        .to({ y: 75.15 }, 0)
        .to({ y: 27.15, alpha: 1 }, 10, cjs.Ease.cubicInOut)
        .wait(246)
    );

    // car_desc
    this.car_desc = new lib.car_desc();
    this.car_desc.name = "car_desc";
    this.car_desc.parent = this;
    this.car_desc.setTransform(249.8, 390.7, 1, 1, 0, 0, 0, 249.8, 38.4);
    this.car_desc.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.car_desc)
        .wait(19)
        .to({ y: 462.7 }, 0)
        .to({ alpha: 1 }, 10, cjs.Ease.cubicInOut)
        .wait(231)
    );

    // box
    this.instance_4 = new lib.box();
    this.instance_4.parent = this;
    this.instance_4.setTransform(250, 826, 1, 1, 0, 0, 0, 223, 79);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(88)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 21, cjs.Ease.cubicInOut)
        .wait(151)
    );

    // haendler_desc
    this.txt_plzort = new cjs.Text("6604 Höfen", "20px 'Open Sans'", "#d8dada");
    this.txt_plzort.name = "txt_plzort";
    this.txt_plzort.textAlign = "right";
    this.txt_plzort.lineHeight = 29;
    this.txt_plzort.lineWidth = 315;
    this.txt_plzort.parent = this;
    this.txt_plzort.setTransform(485.75, 969.65);

    this.txt_strasse = new cjs.Text(
      "Gewerbegebiet 8",
      "20px 'Open Sans'",
      "#d8dada"
    );
    this.txt_strasse.name = "txt_strasse";
    this.txt_strasse.textAlign = "right";
    this.txt_strasse.lineHeight = 29;
    this.txt_strasse.lineWidth = 315;
    this.txt_strasse.parent = this;
    this.txt_strasse.setTransform(485.75, 945.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.txt_strasse }, { t: this.txt_plzort }] })
        .wait(260)
    );

    // haendler_logo
    this.instance_5 = new lib.logo();
    this.instance_5.parent = this;
    this.instance_5.setTransform(250, 961.5, 1, 1, 0, 0, 0, 250, 45);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(260));

    // background
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#fff")
      .s()
      .p("EgnDBOIMAAAicPMBOHAAAMAAACcPg");
    this.shape.setTransform(250, 500);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(260));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(250, 500, 250, 500);
  // library properties:
  lib.properties = {
    id: "38726675515179418EF8DE4E205E0C8F",
    width: 500,
    height: 1000,
    fps: 25,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "./haendler_logo.png?1544114810940", id: "haendler_logo" }
    ],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function() {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function(ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function(ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function() {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function() {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["38726675515179418EF8DE4E205E0C8F"] = {
    getStage: function() {
      return exportRoot.getStage();
    },
    getLibrary: function() {
      return lib;
    },
    getSpriteSheet: function() {
      return ss;
    },
    getImages: function() {
      return img;
    }
  };

  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function(id) {
    return an.compositions[id];
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
