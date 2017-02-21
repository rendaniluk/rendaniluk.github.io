(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"assets/Attachments.png", id:"Attachments"},
		{src:"assets/BG_728x90.jpg", id:"BG_728x90"},
		{src:"assets/Device.png", id:"Device"},
		{src:"assets/Device2.png", id:"Device2"},
		{src:"assets/MotoZLogo.png", id:"MotoZLogo"},
		{src:"assets/vc_icon_02.png", id:"vc_icon_02"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Attachments = function() {
	this.initialize(img.Attachments);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,207);


(lib.BG_728x90 = function() {
	this.initialize(img.BG_728x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Device = function() {
	this.initialize(img.Device);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,382);


(lib.Device2 = function() {
	this.initialize(img.Device2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,382);


(lib.MotoZLogo = function() {
	this.initialize(img.MotoZLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,31);


(lib.vc_icon_02 = function() {
	this.initialize(img.vc_icon_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.Tween6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBMQgIgEgHgJQgGgIgDgLQgDgLgBgNQAAgJACgIQACgGAEgHQAIgPALgGQANgGALAAQAIAAAGABIAKADIAAgvIASAAIAACeIgQAAIgCgJQgGAGgHADQgHADgIAAQgKAAgJgFgAgDgUQgFACgFAEQgFAEgDAEQgDAFgCADQgCALAAAIIABAOIAEAMQAEALAJAEQAHAEAHAAQAGAAAHgDQAHgDAFgHIAAhGQgFgCgGgCIgLgBQgGAAgEACg");
	this.shape.setTransform(121.4,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA3QgJgGgGgIQgHgJgDgLQgDgLAAgKQAAgIACgHQABgJAEgHQAHgPAMgGIAMgFIALgCQARAAAMALQAMAKAFAOQAEAOAAAKQAAAIgCAJQgCAIgDAHQgEAIgFAGQgFAEgGAEQgFADgGABQgGABgGAAQgLAAgKgEgAgKgpQgFABgEAFQgIAHgDALQgCAKAAAHQAAANAFALQAFALAHAFQAIAFAHAAQAFAAAFgCQAFgCAEgEQAIgHADgLQADgLAAgIQAAgMgFgLQgFgLgIgFQgHgFgIAAQgFAAgFADg");
	this.shape_1.setTransform(109.5,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBRIgqh9IgGB6IgPAAIAHieIAVAAIApCBIAqiBIAWAAIAGCeIgSAAIgFh5IgrB8g");
	this.shape_2.setTransform(94.9,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA3QgJgGgGgIQgHgJgDgLQgDgLAAgKQAAgIACgHQABgJAEgHQAHgPAMgGIAMgFIALgCQARAAAMALQAMAKAFAOQAEAOAAAKQAAAIgCAJQgCAIgDAHQgEAIgFAGQgFAEgGAEQgFADgGABQgGABgGAAQgLAAgKgEgAgKgpQgFABgEAFQgIAHgDALQgCAKAAAHQAAANAFALQAFALAHAFQAIAFAHAAQAFAAAFgCQAFgCAEgEQAIgHADgLQADgLAAgIQAAgMgFgLQgFgLgIgFQgHgFgIAAQgFAAgFADg");
	this.shape_3.setTransform(75.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBDQgDgDgCgFQgCgGAAgHIAAhJIgSAAIAAgPIASAAIAAgeIAQAAIAAAeIAcAAIAAAPIgcAAIAABIQAAAIADADQADADAFAAQAHAAAIgHIAFAPQgEADgGABQgGACgHAAQgLABgGgHg");
	this.shape_4.setTransform(65.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA3QgJgGgGgIQgHgJgDgLQgDgLAAgKQAAgIACgHQABgJAEgHQAHgPAMgGIAMgFIALgCQARAAAMALQAMAKAFAOQAEAOAAAKQAAAIgCAJQgCAIgDAHQgEAIgFAGQgFAEgGAEQgFADgGABQgGABgGAAQgLAAgKgEgAgKgpQgFABgEAFQgIAHgDALQgCAKAAAHQAAANAFALQAFALAHAFQAIAFAHAAQAFAAAFgCQAFgCAEgEQAIgHADgLQADgLAAgIQAAgMgFgLQgFgLgIgFQgHgFgIAAQgFAAgFADg");
	this.shape_5.setTransform(56,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBRIgqh9IgFB6IgQAAIAHieIAVAAIApCBIAriBIAUAAIAHCeIgRAAIgGh5IgrB8g");
	this.shape_6.setTransform(41.4,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA3QgJgGgGgIQgHgJgDgLQgDgLAAgKQAAgIACgHQABgJAEgHQAHgPAMgGIAMgFIALgCQARAAAMALQAMAKAFAOQAEAOAAAKQAAAIgCAJQgCAIgDAHQgEAIgFAGQgFAEgGAEQgFADgGABQgGABgGAAQgLAAgKgEgAgKgpQgFABgEAFQgIAHgDALQgCAKAAAHQAAANAFALQAFALAHAFQAIAFAHAAQAFAAAFgCQAFgCAEgEQAIgHADgLQADgLAAgIQAAgMgFgLQgFgLgIgFQgHgFgIAAQgFAAgFADg");
	this.shape_7.setTransform(22.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBPIAAhxIAPAAIAABxgAgHg5QgDgDAAgGQAAgFADgEQAEgDADAAQAEAAAEADQADAEAAAFQAAAGgDADQgEADgEAAQgDAAgEgDg");
	this.shape_8.setTransform(13.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBRIAAieIAPAAIACAJQAHgGAIgDQAHgDAIAAQARAAAKALQAGAFADAFQAEAGABAHQADAOAAALQAAAUgJANQgIAQgNAEQgMAGgKAAQgNAAgJgEIAAAvgAgPg9QgHADgGAGIAABHIAHADQAFABAGAAQAHAAAEgBQAFgCAFgEQAFgDADgEQADgEACgFQAFgJAAgMQAAgMgFgLQgEgLgHgFQgHgFgHAAQgIAAgGAEg");
	this.shape_9.setTransform(5.5,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBPIAAhxIAQAAIAABxgAgHg5QgDgDAAgGQAAgFADgEQAEgDADAAQAEAAAEADQADAEAAAFQAAAGgDADQgEADgEAAQgDAAgEgDg");
	this.shape_10.setTransform(-3.2,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMA4QgJgDgHgIQgHgIgEgKQgFgMAAgPQABgUAIgPQAKgPALgEQALgEAHgBQAMAAAJAGQAJAEAFAGIAFAJIgMAJQgFgIgGgGQgGgEgLAAQgIAAgIAGQgIAHgDAKQgDALAAAJQAAAKADAJQADAIAEAGQAFAFAGAEQAFADAGAAQALAAAHgEQAIgDAGgGIAEAPQgFAGgLADQgJADgMAAQgHABgKgEg");
	this.shape_11.setTransform(-10.9,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA6IAAhFQAAgPgGgIQgDgEgFgCQgFgCgHAAQgHAAgIAEIgOAIIAABYIgSAAIAAhwIAQAAIABAJQAHgFAJgEQAJgDAIAAQAWAAAJALQAKAMAAAXIAABFg");
	this.shape_12.setTransform(-22.6,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBQIAAieIAQAAIAACeg");
	this.shape_13.setTransform(-31.5,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIBmAAIAAAcIhHAAIAAAlIA6AAIAAAbIg6AAIAAAkIBMAAIAAAeg");
	this.shape_14.setTransform(-45,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIBmAAIAAAcIhHAAIAAAlIA6AAIAAAbIg6AAIAAAkIBMAAIAAAeg");
	this.shape_15.setTransform(-58.3,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBQIgLgpIgEgJIgDgGQgCgCgEgCIgGAAIgXAAIAAA8IgfAAIAAieIA5AAQAHAAAKABQAJADAIAFQAIAGAEAIQAFAKAAAOIgBALQgCAGgDAGQgCAFgFADQgDADgHADQAIAEADAFQAFAHADAOIANAsgAgbgGIAVAAQAZAAAAgWQAAgMgGgFQgDgDgFgCIgLAAIgVAAg");
	this.shape_16.setTransform(-72,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyBQIAAieIBlAAIAAAcIhGAAIAAAmIA4AAIAAAbIg4AAIAABBg");
	this.shape_17.setTransform(-84.9,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLA8IAAgvIgsAAIAAgYIAsAAIAAgxIAXAAIAAAxIAsAAIAAAYIgsAAIAAAvg");
	this.shape_18.setTransform(-102.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-15.4,240.5,30.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAsQgPgQAAgcQAAgJACgIQACgJAEgHQADgHAFgFQAFgFAFgDQAMgFAJgBQAIABAHACQAHACAGAEQALAKAFAOQAEAOAAAMIhNAAQAAAUAJAMQAFAHAGACQAHAEAHAAQALAAAIgEQAIgDAGgGIAFAPQgFAGgLADQgLAEgLgBQgXAAgOgPgAAcgOQgBgKgEgHQgFgHgHgDQgGgDgFAAQgJAAgIAHQgEADgDAGQgCAGgCAIIA4AAIAAAAg");
	this.shape.setTransform(102.8,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBJQgFgIAAgRIAAh/IASAAIAACCQAAAIACAEQAAADAFAAQAFAAAHgDIAEANIgIAEIgKABQgMAAgGgIg");
	this.shape_1.setTransform(94.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWA4QgIgDgFgGQgJgLAAgWIAAhHIARAAIAABHQAAAIACAFQABAGAEADQAGAIAOgBQAGAAAIgDQAJgEAFgFIAAhYIASAAIAABxIgRAAIgBgJQgGAFgJADQgHADgKAAQgLAAgHgCg");
	this.shape_2.setTransform(84.9,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBMQgKgEgGgJQgGgIgDgLQgDgLAAgNQAAgJABgIQACgGAFgHQAHgPAMgGQAMgGALAAQAIAAAGABIAKADIAAgvIARAAIAACeIgPAAIgCgJQgGAGgHADQgHADgIAAQgKAAgIgFgAgDgUQgGACgEAEQgFAEgDAEQgDAFgCADQgCALAAAIIABAOIAEAMQAEALAJAEQAHAEAHAAQAGAAAHgDQAGgDAGgHIAAhGQgEgCgHgCIgLgBQgGAAgEACg");
	this.shape_3.setTransform(72.6,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgJgGgGgIQgHgJgDgLQgDgLAAgKQAAgIACgHQABgJAEgHQAHgPAMgGIAMgFIALgCQARAAAMALQAMAKAFAOQAEAOAAAKQAAAIgCAJQgCAIgDAHQgEAIgFAGQgFAEgGAEQgFADgGABQgGABgGAAQgLAAgKgEgAgKgpQgFABgEAFQgIAHgDALQgCAKAAAHQAAANAFALQAFALAHAFQAIAFAHAAQAFAAAFgCQAFgCAEgEQAIgHADgLQADgLAAgIQAAgMgFgLQgFgLgIgFQgHgFgIAAQgFAAgFADg");
	this.shape_4.setTransform(60.7,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBRIgqh9IgGB6IgPAAIAHieIAVAAIApCBIAqiBIAVAAIAHCeIgSAAIgFh5IgrB8g");
	this.shape_5.setTransform(46.1,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BAQASgBAIgEQAJgEAGgIIAFgJIgrh1IAUAAIAgBiQAKgTAIgaQAIgaAHgbIATAAQgMArgKAbQgKAZgIAQIgKASQgEAJgGAGQgHAGgLAEQgKAFgRAAg");
	this.shape_6.setTransform(27.4,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA6IAAhwIAQAAIACALQAHgGAEgEQAIgEAHAAIAKABIgCARIgJgBQgHAAgIAFQgEAEgGAGIAABTg");
	this.shape_7.setTransform(19.5,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAsQgPgQAAgcQAAgJACgIQACgJAEgHQADgHAFgFQAFgFAFgDQAMgFAJgBQAIABAHACQAHACAGAEQALAKAFAOQAEAOAAAMIhNAAQAAAUAJAMQAFAHAGACQAHAEAHAAQALAAAIgEQAIgDAGgGIAFAPQgFAGgLADQgLAEgLgBQgXAAgOgPgAAcgOQgBgKgEgHQgFgHgHgDQgGgDgFAAQgJAAgIAHQgEADgDAGQgCAGgCAIIA4AAIAAAAg");
	this.shape_8.setTransform(9.4,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBDQgDgDgCgFQgCgGAAgHIAAhJIgSAAIAAgPIASAAIAAgeIAQAAIAAAeIAcAAIAAAPIgcAAIAABIQAAAIADADQADADAFAAQAHAAAIgHIAFAPQgEADgGABQgGACgHAAQgLABgGgHg");
	this.shape_9.setTransform(-0.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBDQgDgDgCgFQgCgGAAgHIAAhJIgSAAIAAgPIASAAIAAgeIAQAAIAAAeIAcAAIAAAPIgcAAIAABIQAAAIADADQADADAFAAQAHAAAIgHIAFAPQgEADgGABQgGACgHAAQgLABgGgHg");
	this.shape_10.setTransform(-7.6,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRA5QgGgCgGgFQgFgEgDgHQgDgGAAgJQAAgIADgHQADgGAGgEQAMgJAQgDQANgDALABIAAgCQAAgHgCgFQgBgFgDgEQgGgGgLAAQgFAAgIADQgIAEgIAFIgFgNQAGgFAJgEQAJgEAMgBQASAAAKAKQAFAFADAJQACAIAAAMIAABIIgQAAIAAgKQgGAGgIADQgHADgHAAQgHAAgHgCgAgBABQgLACgFAHQgFAFAAAJQAAAIAEAFQAFAFAEACIAIABQAGAAAHgEQAGgDAGgGIAAghQgPABgKABg");
	this.shape_11.setTransform(-17.1,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBQIAAieIArAAQAJgBAJADQAJADAGAFQALALABATQAAAQgJAIQgEAEgFADQgGACgGABQALACAJADQAIAGAEAIQAFAJAAALQAAAPgHALIgIAJQgEADgFACQgKAEgKABgAgdA/IAgAAQALAAAIgHQADgDACgGQACgGAAgGQAAgQgJgHQgJgIgPAAIgZAAgAgdgLIAYAAQAFAAAFgCQAFgBAEgFQADgDADgFQACgFAAgHQgBgXgYAAIgaAAg");
	this.shape_12.setTransform(-27.6,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIBmAAIAAAcIhHAAIAAAlIA6AAIAAAbIg6AAIAAAkIBMAAIAAAeg");
	this.shape_13.setTransform(-45,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIBmAAIAAAcIhHAAIAAAlIA6AAIAAAbIg6AAIAAAkIBMAAIAAAeg");
	this.shape_14.setTransform(-58.3,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaBQIgLgpIgEgJIgDgGQgCgCgEgCIgGAAIgXAAIAAA8IgfAAIAAieIA5AAQAHAAAKABQAJADAIAFQAIAGAEAIQAFAKAAAOIgBALQgCAGgDAGQgCAFgFADQgDADgHADQAIAEADAFQAFAHADAOIANAsgAgbgGIAVAAQAZAAAAgWQAAgMgGgFQgDgDgFgCIgLAAIgVAAg");
	this.shape_15.setTransform(-72,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBQIAAieIBlAAIAAAcIhGAAIAAAmIA4AAIAAAbIg4AAIAABBg");
	this.shape_16.setTransform(-84.9,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLA8IAAgvIgsAAIAAgYIAsAAIAAgxIAXAAIAAAxIAsAAIAAAYIgsAAIAAAvg");
	this.shape_17.setTransform(-102.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-15.4,221.4,30.9);


(lib.vodapower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAzQgIgDgEgFQgJgKAAgVIAAhAIAQAAIAABBQABAHABAFQACAFADADQAFAHANAAQAFAAAIgEQAHgDAFgFIAAhQIARAAIAABnIgQAAIgBgIQgFAEgHADQgIADgIAAQgKAAgHgCg");
	this.shape.setTransform(107.7,408.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgFgIQgGgHgDgLQgDgKAAgJQAAgHACgHQACgHADgIQAGgNALgGIALgEIAKgBQAQAAALAJQALAJAEANQAEANAAAJQAAAHgCAIQgCAIgDAGIgHAMQgFAFgFADIgLAEQgFABgGABQgKAAgJgGgAgJgnQgEACgEAFQgIAHgCAJQgCAKAAAGQAAALAEALQAFALAHAEQAHAEAGAAQAEAAAFgCQAEgBAEgEQAIgIACgJQADgKAAgHQAAgLgFgKQgEgLgHgEQgHgEgHAAQgEAAgFABg");
	this.shape_1.setTransform(96.5,408.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA6QAQAAAIgEQAIgEAFgHIAFgIIgohrIATAAIAdBZQAJgRAHgXQAIgYAGgZIARAAQgKAngKAZQgJAXgHAPIgJAQQgEAIgFAGQgHAGgJADQgKAEgPAAg");
	this.shape_2.setTransform(85.9,410.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAxQgJgEgGgIQgGgHgDgLQgDgKAAgJQAAgHACgHQABgHADgIQAHgNALgGIALgEIAKgBQAQAAALAJQALAJAEANQAEANAAAJQAAAHgBAIQgCAIgEAGIgIAMQgEAFgGADIgKAEQgGABgFABQgKAAgIgGgAgIgnQgGACgDAFQgHAHgDAJQgCAKAAAGQAAALAFALQAEALAHAEQAHAEAGAAQAEAAAFgCQAEgBAFgEQAHgIADgJQACgKAAgHQAAgLgEgKQgFgLgHgEQgHgEgHAAQgEAAgEABg");
	this.shape_3.setTransform(71.4,408.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA9QgCgCgCgGQgCgEABgGIAAhDIgRAAIAAgOIARAAIAAgcIAOAAIAAAcIAaAAIAAAOIgaAAIAABBQAAAIADACQACADAFAAQAGAAAIgGIAFANIgJAFQgGACgHAAQgJAAgHgHg");
	this.shape_4.setTransform(62.4,407.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA1IAAhnIAOAAIACALIAKgKQAHgDAHAAIAJABIgCAPIgIAAQgHAAgGAEQgFAEgFAFIAABMg");
	this.shape_5.setTransform(52.3,408.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAoQgOgOAAgaQAAgIACgIQACgHADgHQAEgHAEgEQAEgFAFgDQALgEAIAAQAIAAAGACQAHABAFAFQAKAHAEAOQAEANAAALIhHAAQAAASAJALQAEAGAGADQAHADAGAAQAJAAAIgEQAHgDAGgFIAEAOQgEAFgKADQgKADgLABQgUAAgNgPgAAagNQgBgJgEgHQgEgGgHgDQgGgCgEAAQgIAAgHAGQgEADgCAGIgEAMIAzAAIAAAAg");
	this.shape_6.setTransform(43.1,408.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXA0IgXhKIgWBKIgPAAIgfhnIASAAIAWBPIAZhPIAIAAIAZBPIAVhPIASAAIgfBng");
	this.shape_7.setTransform(30.9,408.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAxQgIgEgGgIQgGgHgDgLQgDgKAAgJQAAgHACgHQACgHACgIQAHgNALgGIALgEIAKgBQAQAAALAJQALAJAEANQAEANAAAJQAAAHgCAIQgBAIgEAGIgHAMQgFAFgFADIgLAEQgFABgGABQgKAAgJgGgAgJgnQgFACgDAFQgIAHgCAJQgCAKAAAGQAAALAFALQAEALAHAEQAHAEAGAAQAFAAAEgCQAEgBAEgEQAIgIADgJQACgKAAgHQAAgLgFgKQgEgLgHgEQgHgEgHAAQgEAAgFABg");
	this.shape_8.setTransform(18.4,408.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBJIAAiRIAsAAQAKAAAJADQAIADAGAFQAGAGADAIQADAIAAALQAAAWgMAJQgGAFgJADQgJADgKAAIgaAAIAAA7gAgbAAIAbAAQALAAAIgGQAIgHAAgPQAAgPgIgHQgDgDgGgCQgFgCgFAAIgbAAg");
	this.shape_9.setTransform(8.2,406.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAtA3IAAhAQAAgIgDgEQgDgEgHAAQgFAAgDACIgHAEIABADIAAADIAABEIgjAAIAAhAQAAgHgCgFQgDgEgHAAQgEAAgEACIgGAFIAABJIglAAIAAhrIAgAAIACAJQAEgEAHgDQAIgEAJAAQAJAAAHADQAGADAFAGQAHgGAIgDQAIgDAKAAQAUAAAKALQAFAFACAIQACAIAAAKIAABDg");
	this.shape_10.setTransform(82.3,386.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA0QgKgFgHgHQgHgIgEgKQgDgLAAgLQAAgLADgKQAEgLAHgHQAHgIAKgEQAKgEALAAQAMAAAKAEQAKAEAHAIQAHAHAEALQADAKAAALQAAALgDALQgEAKgHAIQgHAHgKAFQgKAEgMAAQgLAAgKgEgAgGgZQgDACgCAEQgFAHAAAMQAAAMAEAIQAFAIAHAAQAJAAAEgIQAEgIAAgMQAAgMgEgHQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_11.setTransform(66.9,386.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA0QgJgDgIgHQgHgIgEgKQgDgKAAgOQAAgMAEgKQAEgLAHgHQAHgHAKgEQAKgEAJAAQAKAAAHACQAHADAFAEQAGAEADAFIAGAKIgZARQgEgIgEgEQgEgEgGAAQgGAAgFAHIgEAIIgBALQAAAGACAFQABAFADAEQAFAHAJAAQAIAAAGgDQAGgDAFgFIALAbQgFAEgKAFQgLAEgOAAQgLAAgKgEg");
	this.shape_12.setTransform(56,386.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA2QgGgCgEgFQgFgEgCgGQgDgGAAgIQAAgIADgFQADgHAFgDQAFgDAGgCIAOgFIAKgBIALgBIAAgDQAAgHgEgCQgDgDgFgBQgGAAgGADIgNAFIgKgXIAHgEIAKgDIALgDIALgCQAKAAAIADQAIACAGAGQAMAKAAAVIAABDIgfAAIgDgIQgEAEgHADQgFACgKABQgHAAgGgCgAAFAGIgFABQgGABgDAEQgDAEAAAFQAAAEADADQADACAGAAQACAAADgBIAGgDIAAgVg");
	this.shape_13.setTransform(44.6,386.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBGQgIgFgGgHQgGgIgDgKQgDgKAAgMQAAgMADgJQADgKAHgIQAGgHAJgEQAIgFAMAAIAIABIAJADIAAgoIAkAAIAACRIggAAIgBgIQgEAEgFADQgGADgIAAQgLAAgIgEgAgDgGQgDACgDADIgEAHQgBAFAAAHQAAAGABAFQABAGADAEQAEAHAHAAQAEAAAEgBIAFgFIAAgtIgFgCIgGgBQgEAAgDACg");
	this.shape_14.setTransform(33,384.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA0QgKgFgHgHQgHgIgEgKQgDgLAAgLQAAgLADgKQAEgLAHgHQAHgIAKgEQAKgEALAAQAMAAAKAEQAKAEAHAIQAHAHAEALQADAKAAALQAAALgDALQgEAKgHAIQgHAHgKAFQgKAEgMAAQgLAAgKgEgAgGgZQgDACgCAEQgFAHAAAMQAAAMAEAIQAFAIAHAAQAJAAAEgIQAEgIAAgMQAAgMgEgHQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_15.setTransform(21.1,386.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBJIg4iRIArAAIAcBcIAfhcIAnAAIg1CRg");
	this.shape_16.setTransform(9,384.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,375,115.5,45.5);


(lib.TCs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAoQAKAAAGgDQAFgDAEgFIADgGIgbhIIANAAIATA8QAGgLAFgQIAKghIALAAQgHAbgGARIgLAZIgGALQgDAFgDAEQgEAFgHACQgHADgKAAg");
	this.shape.setTransform(159.8,357.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAtQgEgFAAgKIAAhPIALAAIAABRQAAAFABACQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQADAAAEgCIADAIIgFACIgGABQgHAAgDgFg");
	this.shape_1.setTransform(155.4,354.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAyIAAhhIAKAAIAAAFQAFgEAFgBQAEgCAEAAQALAAAGAGQAEADABAEIAEAHQACAJAAAIQgBAMgFAHQgGAKgHADQgIADgGAAQgHAAgFgBIAAAcgAgJgmQgEACgDAEIAAArIAEACIAGABIAGgBQAEgBADgCIAFgFIADgFQACgFABgHQgBgJgCgGQgCgHgFgDQgEgDgEAAQgFAAgEACg");
	this.shape_2.setTransform(149.7,357.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAyIAAhhIAKAAIAAAFQAFgEAFgBQAEgCAEAAQAKAAAHAGQAEADACAEIACAHQACAJAAAIQABAMgGAHQgFAKgIADQgIADgGAAQgIAAgFgBIAAAcgAgJgmQgEACgEAEIAAArIAFACIAGABIAGgBQAEgBADgCIAFgFIADgFQACgFABgHQgBgJgCgGQgCgHgFgDQgEgDgEAAQgEAAgFACg");
	this.shape_3.setTransform(142.2,357.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAjQgEgBgEgCQgCgDgCgFQgDgEAAgFQAAgGADgEQABgDAEgCQAHgGAKgCIAPgBIAAgBIgBgIQgBgDgCgCQgDgEgIAAIgHACQgFACgFAEIgDgJIAJgFQAGgDAGAAQAMAAAGAGQADAEACAFQACAEgBAIIAAAsIgKAAIAAgFQgEADgEACQgFACgDAAQgFAAgEgCgAAAAAQgHACgDADQgDAEAAAGQAAAFADADQACAEADAAIAFABQADgBAEgCIAIgEIAAgVIgPAAg");
	this.shape_4.setTransform(134.8,355.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAjIgJgDIgFgDIAFgJIAIAFQAEADAGAAQAGAAAEgDQADgCAAgHQABgDgFgDQgEgFgIgDQgJgCgEgEQgFgEAAgIQAAgJAGgFQAGgGAJAAQAHAAAGADQAFACAEADIgEAJQgEgEgEgBQgFgDgFAAQgFAAgCAEQgDADAAADQgBADAFADQAEAEAGADIAIAEIAHACQAEAFABAJIgCAHIgCAGQgEAEgGACQgFACgFAAQgFAAgEgCg");
	this.shape_5.setTransform(125.9,355.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAwIgHgDIgGgGQgFgGgDgJQgDgLAAgNQAAgRAHgNQADgHAEgEQAEgDAEgCQAJgFAGAAQAKABAHAEQAEACADADIAGAIIgIAIIgHgJIgHgEIgIgCQgLAAgHALQgEAFgBAIQgCAIAAAIQAAAJACAJQACAHAEAFQAEAFAFADQAEACAFAAQAIAAAGgCQAFgDAFgFIAEALQgFAFgJADQgIADgHAAQgGAAgHgEg");
	this.shape_6.setTransform(119,354.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAxQgFgDgDgEQgEgEgCgFQgBgEAAgFIABgIIADgHQADgGAGgDIAKgGIADgCIgCgCQgFgGgCgEQgCgEAAgGQABgGADgFQADgFAGgCQAGgCAGAAQADAAAFACQAEACAEACIAEAGIAEAFIgJAGQgFgIgEgDQgEgCgCAAQgHAAgDADQgDADAAAFQAAADACAEIAFAHIAZAhIAQgUIAIAFIgRAXIAQAXIgNAAIgKgOQgFAGgFADQgFAEgEABQgFACgFAAQgJAAgGgCgAgLAAIgJAFIgGAGQgDAGAAAHQAAAFACAEQACAFAFACQAEACAFAAQAFAAAFgDQADgCAEgEIAFgGIgTgcg");
	this.shape_7.setTransform(110.3,354.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAxIAAhXIgeAAIAAgLIBEAAIAAALIgdAAIAABXg");
	this.shape_8.setTransform(102.7,354.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAdIAAgWIgRANIgEgIIASgMIgSgMIAFgIIAQANIAAgVIAGAAIAAAVIARgMIAFAHIgSAMIASAMIgEAIIgSgNIAAAWg");
	this.shape_9.setTransform(96,351.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,344,74.4,20.8);


(lib.Plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbAXIAAgsIC3AAIAAAsg");
	this.shape.setTransform(15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBcIAAi3IAsAAIAAC3g");
	this.shape_1.setTransform(15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB9700").s().p("AhsBsQgsgsgBhAQABg/AsgtQAtgsA/gBQBAABAsAsQAuAtgBA/QABBAguAsQgsAuhAgBQg/ABgtgug");
	this.shape_2.setTransform(15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,30.8);


(lib.MotorolaLogo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MotoZLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,31);


(lib.mc_vc_icon_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vc_icon_02();
	this.instance.setTransform(-22.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.mc_smar_ts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBVIgOgEIgLgGIgJgGIAIgRQAKAIAKAEQAKAEANAAQAIAAAIgDQAIgEAEgHQADgHAAgHQAAgNgIgHQgJgHgSgIQgPgFgKgFQgKgHgFgJQgEgJAAgKQAAgQAJgLQAEgGAFgDIALgGQAMgDAIAAQAIAAAHABIAOAFQANAGAJAKIgKAPQgJgKgKgEQgLgFgMAAQgFAAgGABQgFACgEADQgIAHAAAMQAAAJAFAGQAGAHAJAEIAPAHQASAHAJAFQAJAGAEAJQAFAJAAAKQAAAKgDAHQgCAIgFAGQgJALgMAEQgNADgJAAQgIAAgIgBg");
	this.shape.setTransform(71.1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBGQgEgEgBgFQgCgFAAgIIAAhMIgUAAIAAgQIAUAAIAAggIAQAAIAAAgIAeAAIAAAQIgeAAIAABLQAAAIADADQADADAFAAQAIAAAJgHIAFAPQgEADgHACQgGADgIAAQgLAAgGgHg");
	this.shape_1.setTransform(56.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcA8IAAh1IARAAIACAMQAGgGAGgFQAHgDAIAAIALABIgCARIgKAAQgHgBgIAFQgGAFgFAFIAABXg");
	this.shape_2.setTransform(49.6,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRA8QgIgDgFgEQgFgFgEgHQgDgHAAgJQAAgJADgHQADgHAHgDQANgKAQgDQANgCAMgBIAAgBQAAgIgCgFQgCgFgDgDQgFgHgMAAQgFAAgJADQgIAEgIAFIgGgNQAHgGAJgEQAKgEAMAAQASAAAMAKQAEAFAEAJQACAIAAAMIAABMIgRAAIAAgKQgHAGgIAEQgHADgIAAQgHAAgGgCgAgBAAQgLADgGAGQgFAHgBAJQABAIAEAFQAFAGAFABIAIABQAGAAAHgDIANgJIAAgjQgQAAgKABg");
	this.shape_3.setTransform(39.2,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA/A8IAAhIQAAgHgBgHQgBgFgDgFQgGgHgOgBQgJABgJAEQgJAEgFAFQACAHAAANIAABGIgQAAIAAhIQAAgKgDgIQgDgHgFgDQgGgDgHgBQgIABgIAEIgOAJIAABaIgTAAIAAh1IARAAIABAKQAGgFAJgEQAJgDALAAQAJAAAIACQAIAEAEAIQAIgGAKgFQAKgDAMAAQAJAAAGABQAHACAEADQAKAIACAMQADALAAAMIAABGg");
	this.shape_4.setTransform(24.1,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBVIgOgEIgLgGIgJgGIAIgRQAKAIAKAEQAKAEANAAQAIAAAIgDQAIgEAEgHQADgHAAgHQAAgNgIgHQgJgHgSgIQgPgFgKgFQgKgHgFgJQgEgJAAgKQAAgQAJgLQAEgGAFgDIALgGQAMgDAIAAQAIAAAHABIAOAFQANAGAJAKIgKAPQgJgKgKgEQgLgFgMAAQgFAAgGABQgFACgEADQgIAHAAAMQAAAJAFAGQAGAHAJAEIAPAHQASAHAJAFQAJAGAEAJQAFAJAAAKQAAAKgDAHQgCAIgFAGQgJALgMAEQgNADgJAAQgIAAgIgBg");
	this.shape_5.setTransform(8.2,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,32);


(lib.mc_rhombus_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("EgQkAqCIgBAAIvovpIAAABI4d4eIAAj3MA3ug3uIPlPpIAAgBIPhPhIACACIAFAGIAAgBIaaaZMg5oA5qg");
	this.shape.setTransform(201.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.2,-369,725.5,738);


(lib.mc_price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtCFIgVhDIgFgPIgGgLQgDgEgGgBIgMgCIgnAAIAABkIgyAAIAAkJIBdAAQAOAAAQADQAQAFANAJQANAIAIAPQAIAQAAAYQAAAKgCAJQgDAKgFAIQgEAJgHAGQgHAGgKAFQALAFAHALQAHAKAHAXIAUBJgAgvgLIAkAAQAsAAAAglQAAgTgLgJQgFgFgJgCQgIgCgLgBIgkAAg");
	this.shape.setTransform(13.8,84.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdDNIgJgBIAHhBIAOACQAZAAAUgGQATgIAQgMQAbgbALgxQgKAIgPAEQgNAEgPAAQgbAAgVgKQgVgJgOgRQgPgSgIgWQgGgXgBgcQABgaAHgYQAJgYAQgSQAQgSAZgLQAZgLAeAAQAZAAAXAJQAYAJASATQASATAKAfQALAeAAAqQAAAygNAvQgIAWgJAVQgLATgNASQgNARgRAOQgQANgUAKQgSAJgXAFQgWAFgaAAgAgViCQgJAGgGAJQgHAJgDAKIgDAYQAAAaAOATQANARAXAAIAZgDQAMgDAKgGIADgPIABgSQAAgVgFgPQgEgQgHgJQgIgKgJgFQgKgEgJAAQgLAAgKAFg");
	this.shape_1.setTransform(103.4,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfDIQAMhVAlhRQAkhRA4hUIixAAIAAhDIEHAAIAABBQg9BUgkBPQgjBSgOBYg");
	this.shape_2.setTransform(73.2,79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzDIIgjgJIgcgMIgUgOIAfhDQAVAQAWAKQAWAKAbAAQANAAANgDQANgEALgIQAKgIAGgNQAGgNAAgTQAAglgXgRQgLgIgRgEQgOgDgWAAIgnADIgiAGIAAjRIDcAAIAABEIiYAAIAABDIAHgBIAKAAQBHAAAnAgQATARAKAXQAKAaAAAiQAAAlgLAbQgMAbgVARQgUARgbAIQgaAIgdAAg");
	this.shape_3.setTransform(41.4,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,43,127.9,71.2);


(lib.mc_pmx24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASBSIAAgqIhGAAIAAgRIBMhoIAMAAIAABpIARAAIAAAQIgRAAIAAAqgAgiAYIA0AAIAAhHg");
	this.shape.setTransform(111.9,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBUIAAgLQAAgQAEgIQAFgIANgMIAVgTQAOgMALgPQAEgJABgKQAAgOgIgIQgDgDgFgCQgGgCgEAAQgKAAgIAFQgKAEgMAMIgJgPIAQgNQAIgFAJgDQAJgDAHAAQAIAAAHACQAHACAFADQAKAIAFAJQAEAKAAAKQAAAQgHANQgDAGgHAFIgNANIgWAVQgMAKgFAHQgDAHAAAHIBMAAIAAASg");
	this.shape_1.setTransform(99,77.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBTIglhEIgmBEIgWAAIAyhVIgthQIAXAAIAgA8IAig8IAWAAIgtBPIAyBWg");
	this.shape_2.setTransform(86.6,77.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBUIgsiCIgGB/IgQAAIAHikIAXAAIAqCGIAtiGIAVAAIAHCkIgSAAIgGh/IgtCCg");
	this.shape_3.setTransform(71.6,77.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBTIAAilIAxAAQAMAAAKADQAKADAHAHQAGAGAEAKQADAJAAANQAAAYgOAKQgHAHgKADQgKADgLAAIgeAAIAABDgAgfAAIAfAAQAMAAAKgHQAJgIAAgRQAAgRgJgIQgEgEgGgCQgGgCgGAAIgfAAg");
	this.shape_4.setTransform(57.1,77.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,61,73.1,32);


(lib.mc_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA+QgEABgDgEQgDgDAAgFIAAhlQAAgFADgDQADgEAEAAIAAAAQAFAAADAEQADADAAAFIAABlQAAAFgDADQgDAEgFgBg");
	this.shape.setTransform(89.4,88.9,0.753,0.753,-135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA+QgEABgDgEQgDgDAAgFIAAhlQAAgFADgDQADgEAEAAIAAAAQAFAAADAEQADADAAAFIAABlQAAAFgDADQgDAEgFgBg");
	this.shape_1.setTransform(89.4,83.5,0.753,0.753,-45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOArIgOg2IgNA2IgSAAIgchVIAXAAIAPA1IANg1IAQAAIAOA1IAPg1IAXAAIgcBVg");
	this.shape_2.setTransform(69.4,86.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIArIgIgCQgIgFgGgGQgEgGgDgJQgCgIgBgHQABgHACgIQADgIAEgGQAGgHAIgDQAHgFAJAAQAKAAAIAFQAHADAFAHQAFAGADAIQADAIgBAHQABAHgDAIQgDAJgFAGQgFAGgHAFIgJACIgJABgAgHgXQgDACgDADQgDAEAAAFIgCAJQAAAEACAFQAAAFADADQADAFADACQADABAEAAQAFAAADgBQADgCADgFQADgDABgFQABgFAAgEIgBgJQgBgFgDgEQgDgDgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_3.setTransform(58.7,86.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAsIAAgvQAAgGgCgDQgBgEgBgCQgEgGgHAAQgEAAgEADIgIAFIAAA8IgWAAIAAhVIAUAAIACAHQAFgEAGgCQAEgCAHgBQAHAAAGACQAFADAEAEQAEAFADAGQACAIAAAJIAAAyg");
	this.shape_4.setTransform(49.1,86.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAoIAHAAIAIgCIAIgDIAGgFIABgCIACgCIgkhVIAYAAIAWBBIAFgNIAFgRIAFgRIAEgSIAWAAQgHAbgHAVQgHAUgIAPIgHAMQgEAHgEAFQgFAFgJADQgNADgKABg");
	this.shape_5.setTransform(36.4,88.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAiQgEgEgCgHQgCgHAAgJIAAgxIAWAAIAAAvQAAAJAEAFIAEAEQADACAEAAQAEAAAFgDIAHgFIAAg7IAWAAIAABUIgVAAIAAgHQgGAFgHACIgKABQgPAAgIgJg");
	this.shape_6.setTransform(26.9,86.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA7IAAh1IApAAQAGAAAGADQAHACAGADQAEAFAEAGQACAGAAAIQAAAHgEAGQgDAGgHAEQAKACAFAHIAEAIQACAFAAAGIgCAJQgBAEgDAFQgCAEgEADIgJAFIgJACIgIABgAgSAmIARAAIAHAAIAFgBQAEgDACgDQABgDABgDQgBgEgCgEQgCgEgEgCIgHgCIgFgBIgQAAgAgSgJIALAAIAHAAIAEgCQAEgCACgDQACgEAAgDQAAgFgDgDQgDgDgFgCIgBgBIgCAAIgEAAIgCAAIgKAAg");
	this.shape_7.setTransform(17.5,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C2AA0").s().p("AntC5QgegBgBgdIAAk1QABgdAeAAIPcAAQAdAAAAAdIAAE1QAAAdgdABg");
	this.shape_8.setTransform(53,86.3,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,68,103.9,36.6);


(lib.mc_1pxl_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(363.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,729,91);


(lib.Devices = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Device();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279,382);


(lib.Device2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Device2();
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.5,263.6);


(lib.CTBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgWuBY/MAAAix9MAtdAAAMAAACx9g");
	this.shape.setTransform(-0.4,-331.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-901.1,291.2,1139.2);


(lib.Copy03_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BPIAAgaIBMhmIhFAAIAAgeIBqAAIAAAbIhKBmIBMAAIAAAdg");
	this.shape.setTransform(64.7,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgKgFgHgJQgHgJgDgLQgEgLAAgKQAAgKAEgLQADgLAHgIQAHgJAKgFQALgFAMAAQANAAAKAFQALAFAHAJQAHAIADALQAEALAAAKQAAAKgEALQgDALgHAJQgHAJgKAFIgMAEIgMABgAgKggQgFADgDAFQgDAFgCAGQgCAHAAAGQAAAGACAHQACAGADAFQADAFAFACQAFAEAFAAQAGAAAFgEQAEgCAEgFQADgFACgGQACgHAAgGQAAgGgCgHQgCgGgDgFQgEgFgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(47.4,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBBQgDgFgCgFQgCgEgBgHIAAg+IgPAAIAAgYIAPAAIAAgeIAdAAIAAAeIAaAAIAAAYIgaAAIAAA4QgBAFADADQACACAFAAQAIAAAGgFIAIAVQgFAEgIADQgJACgJABQgOgBgHgIg");
	this.shape_2.setTransform(36.9,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgKgFgIgJQgGgJgEgLQgDgLAAgKQAAgKADgLQAEgLAGgIQAIgJAKgFQAKgFANAAQANAAAKAFQALAFAHAJQAHAIAEALQADALAAAKQAAAKgDALQgEALgHAJQgHAJgKAFIgMAEIgMABgAgKggQgFADgDAFQgDAFgCAGQgCAHAAAGQAAAGACAHQACAGADAFQADAFAFACQAFAEAFAAQAGAAAEgEQAFgCAEgFQADgFACgGQACgHAAgGQAAgGgCgHQgCgGgDgFQgEgFgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_3.setTransform(26.4,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBQIghhfIgFBeIgeAAIAIieIAfAAIAlBwIAjhwIAgAAIAICeIgfAAIgEhdIgdBeg");
	this.shape_4.setTransform(11,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.4,30.9);


(lib.Copy02_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA6IgOgDIgLgFIgHgFIALgXIAHAFIAJAFIALAEQAGABAEAAQALAAAEgDQAFgEAAgEIgBgFQgBgDgDgBIgIgEIgMgDIgQgFQgHgDgFgCQgFgFgCgFQgDgGAAgIQAAgQAMgKQAFgFAJgCQAJgCAJAAQAKAAAHABIANAEIAJAEIAFADIgKAWQgEgEgJgEQgJgDgLAAQgJAAgEADQgDAEAAAEIABAFIADADIAIADIAJACQAKACAHAEQAIADAFADQAFADADAHQACAFAAAJQAAAJgDAHQgEAHgGAFQgHAEgIACQgJACgKAAQgIAAgIgCg");
	this.shape.setTransform(165.6,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBMQgIgFgHgJQgGgIgDgLQgEgLAAgMQABgLADgJQADgLAHgIQAHgJAKgFQALgFALAAQAJAAALADIAAgtIAeAAIAACeIgcAAIgBgJQgEAFgHADQgHAEgGAAQgMAAgKgFgAgGgKQgFACgEAFQgDADgBAGQgCAHgBAGQAAAHACAHQABAHADAFQAEAEAFADQAFADAEAAQAGAAAGgDQAGgDACgEIAAg3QgJgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(153.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLA7IgMgEQgLgFgGgJQgHgJgDgLQgEgLAAgKQAAgKAEgLQADgLAHgIQAGgJALgFQAKgFANAAQANAAALAFQAKAFAHAJQAHAIADALQAEALAAAKQAAAKgEALQgDALgHAJQgHAJgKAFIgLAEIgNABgAgKggQgFADgDAFQgEAFgBAGQgCAHAAAGQAAAGACAHQABAGAEAFQADAFAFACQAFAEAFAAQAGAAAFgEQAFgCADgFQADgFACgGQACgHgBgGQABgGgCgHQgCgGgDgFQgDgFgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(141.2,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBQIghhfIgEBeIgfAAIAIieIAgAAIAlBwIAjhwIAfAAIAICeIgeAAIgFhdIgeBeg");
	this.shape_3.setTransform(125.8,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA7IgMgEQgLgFgGgJQgHgJgEgLQgDgLAAgKQAAgKADgLQAEgLAHgIQAGgJALgFQALgFAMAAQANAAALAFQAKAFAHAJQAHAIAEALQADALAAAKQAAAKgDALQgEALgHAJQgHAJgKAFIgLAEIgNABgAgKggQgFADgDAFQgEAFgBAGQgCAHAAAGQAAAGACAHQABAGAEAFQADAFAFACQAFAEAFAAQAGAAAEgEQAGgCADgFQADgFACgGQACgHgBgGQABgGgCgHQgCgGgDgFQgDgFgGgDQgEgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(106,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBBQgEgFgCgFQgCgEABgHIAAg+IgRAAIAAgYIARAAIAAgeIAbAAIAAAeIAbAAIAAAYIgbAAIAAA4QAAAFADADQACACAEAAQAJAAAGgFIAJAVQgGAEgJADQgHACgKABQgNgBgIgIg");
	this.shape_5.setTransform(95.5,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA7IgMgEQgLgFgGgJQgHgJgDgLQgEgLAAgKQAAgKAEgLQADgLAHgIQAGgJALgFQAKgFANAAQANAAAKAFQALAFAHAJQAHAIADALQAEALAAAKQAAAKgEALQgDALgHAJQgHAJgKAFIgLAEIgNABgAgKggQgFADgDAFQgEAFgBAGQgCAHAAAGQAAAGACAHQABAGAEAFQADAFAFACQAFAEAFAAQAGAAAFgEQAFgCADgFQADgFACgGQACgHgBgGQABgGgCgHQgCgGgDgFQgDgFgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(84.9,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBQIghhfIgEBeIgfAAIAIieIAgAAIAlBwIAjhwIAfAAIAICeIgeAAIgFhdIgeBeg");
	this.shape_7.setTransform(69.6,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQA4QgLgDgHgHQgIgIgFgLQgEgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAJgEQAKgEAKAAQALAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQABAPAJAGQAIAHALAAIAMgBIAJgDIAHgDIAEgDIAIAXIgGAEIgJADIgMAEIgRABQgJAAgKgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgHgBQgGAAgIAFQgDAEgCADQgCAFgBAGIAqAAIAAAAg");
	this.shape_8.setTransform(50.1,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBPQgGgBgFgEQgEgEgCgGQgCgFgBgJIAAiCIAcAAIAAB8QAAAHACACQADACAFAAIAFAAIAFgCIAEAXIgIADQgGACgJAAQgEAAgFgCg");
	this.shape_9.setTransform(40.9,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBOQgKgCgLgFIAAiXIAeAAIAAAsIAJgCIAKAAIALABIALAEQAKAFAHAIQAGAIAEALQADAIAAALQAAARgFAMQgEAMgIAHQgJAIgLADQgKAEgLAAQgLAAgLgDgAgUgLIAABBIAGABIAGABQAHAAAEgCQAGgDAEgFQAFgEACgHQACgHAAgJQAAgRgIgHQgFgEgFgCQgEgCgGAAQgHAAgHACg");
	this.shape_10.setTransform(30.8,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA5QgHgCgFgFQgGgEgDgHQgDgHAAgJQAAgIADgHQAEgHAFgCQAGgEAIgDQAHgEAIgBIALgCIALAAIAAgCQAAgKgFgEQgEgEgIAAIgJABIgIADIgGAEIgFADIgKgVIAGgEIAKgEIANgFQAHgBAGAAQAJAAAIACQAIADAGAFQAGAGADAIQADAJAAALIAABIIgbAAIgBgJQgFAGgHADQgHADgIAAQgHAAgHgDgAAIAEIgIABQgKADgDAEQgEAFAAAFQAAAGAEADQAEAEAIAAQAEAAAFgCQAGgCAEgEIAAgYg");
	this.shape_11.setTransform(18,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBPIAAhCQAAgHgCgGQgBgCgDgDQgFgHgIAAIgFABIgHACIgGAFIgEADIAABQIgeAAIAAieIAeAAIAAA0QAFgEAIgDQAHgDAJAAQALAAAIADQAIAEAFAHQAFAGACAJQADAIAAALIAABEg");
	this.shape_12.setTransform(5.9,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA4QgKgDgHgHQgIgIgEgLQgDgHgCgUQAAgOAFgLQAEgLAHgIQAIgHAJgFQAKgDAIAAQALAAAHACQAIADAFAEQAGAEADAFIAGAJIgWAPQgEgGgFgGQgGgFgIAAQgEAAgDACQgEACgEAFQgHAIAAARQAAARAHAJQAEAEAFACQADADAHAAQAGAAAGgCIAJgDIAGgDIAEgEIAIAYIgFAEIgJAEIgMADQgIACgJAAQgIAAgKgEg");
	this.shape_13.setTransform(-6.1,17.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWA5QgHgCgFgFQgGgEgDgHQgDgHAAgJQAAgIADgHQAEgHAFgCQAGgEAIgDQAHgEAIgBIALgCIALAAIAAgCQAAgKgFgEQgEgEgIAAIgJABIgIADIgGAEIgFADIgKgVIAGgEIAKgEIANgFQAHgBAGAAQAJAAAIACQAIADAGAFQAGAGADAIQADAJAAALIAABIIgbAAIgBgJQgFAGgHADQgHADgIAAQgHAAgHgDgAAIAEIgIABQgKADgDAEQgEAFAAAFQAAAGAEADQAEAEAIAAQAEAAAFgCQAGgCAEgEIAAgYg");
	this.shape_14.setTransform(-18,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBBQgDgFgDgFQgCgEAAgHIAAg+IgQAAIAAgYIAQAAIAAgeIAdAAIAAAeIAaAAIAAAYIgaAAIAAA4QAAAFACADQADACAEAAQAIAAAGgFIAIAVQgFAEgIADQgIACgKABQgOgBgHgIg");
	this.shape_15.setTransform(-27.6,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBBQgEgFgCgFQgBgEAAgHIAAg+IgRAAIAAgYIARAAIAAgeIAbAAIAAAeIAbAAIAAAYIgbAAIAAA4QABAFACADQACACAEAAQAJAAAHgFIAIAVQgGAEgJADQgIACgJABQgNgBgIgIg");
	this.shape_16.setTransform(-36,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA5QgHgCgFgFQgGgEgDgHQgDgHAAgJQAAgIADgHQAEgHAFgCQAGgEAIgDQAHgEAIgBIALgCIALAAIAAgCQAAgKgFgEQgEgEgIAAIgJABIgIADIgGAEIgFADIgKgVIAGgEIAKgEIANgFQAHgBAGAAQAJAAAIACQAIADAGAFQAGAGADAIQADAJAAALIAABIIgbAAIgBgJQgFAGgHADQgHADgIAAQgHAAgHgDgAAIAEIgIABQgKADgDAEQgEAFAAAFQAAAGAEADQAEAEAIAAQAEAAAFgCQAGgCAEgEIAAgYg");
	this.shape_17.setTransform(-46.5,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,0,227.4,30.9);


(lib.Copy02_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBPIAAhCQAAgHgCgGQgBgCgDgDQgFgHgIAAIgFABIgHACIgGAFIgEADIAABQIgeAAIAAieIAeAAIAAA0QAFgEAIgDQAHgDAJAAQALAAAIADQAIAEAFAHQAFAGACAJQADAIAAALIAABEg");
	this.shape.setTransform(209.2,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBBQgDgFgCgFQgCgEgBgHIAAg+IgPAAIAAgYIAPAAIAAgeIAdAAIAAAeIAaAAIAAAYIgaAAIAAA4QgBAFADADQACACAFAAQAIAAAGgFIAIAVQgFAEgIADQgJACgJABQgOgBgHgIg");
	this.shape_1.setTransform(198.5,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAcAAIAABygAgMgyQgEgFgBgHQABgGAEgFQAEgGAIAAQAIAAAFAGQAEAFABAGQgBAHgEAFQgFAFgIAAQgIAAgEgFg");
	this.shape_2.setTransform(191.3,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATA5IgThJIgSBJIgYAAIgmhxIAfAAIAUBHIAShHIAWAAIATBHIAUhHIAfAAIgmBxg");
	this.shape_3.setTransform(180.2,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRA4QgJgDgJgHQgHgIgEgLQgFgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAKgEQAKgEAIAAQALAAAKADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQACAPAIAGQAIAHALAAIALgBIAJgDIAIgDIAEgDIAIAXIgFAEIgJADIgOAEIgQABQgJAAgLgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgIgBQgFAAgIAFQgDAEgCADQgCAFAAAGIApAAIAAAAg");
	this.shape_4.setTransform(161.6,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBPQgHgBgDgEQgFgEgDgGQgBgFAAgJIAAiCIAbAAIAAB8QAAAHACACQADACAFAAIAFAAIAEgCIAGAXIgJADQgHACgIAAQgEAAgFgCg");
	this.shape_5.setTransform(152.4,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAbAAIAABygAgMgyQgFgFAAgHQAAgGAFgFQAFgGAHAAQAJAAAEAGQAFAFgBAGQABAHgFAFQgEAFgJAAQgHAAgFgFg");
	this.shape_6.setTransform(145.2,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBOQgKgCgLgFIAAiXIAeAAIAAAsIAJgCIAKAAIALABIALAEQAKAFAHAIQAGAIADALQAEAIAAALQAAARgFAMQgFAMgHAHQgJAIgLADQgLAEgKAAQgLAAgLgDgAgUgLIAABBIAGABIAGABQAHAAAEgCQAFgDAFgFQAEgEADgHQACgHAAgJQAAgRgIgHQgFgEgFgCQgEgCgGAAQgGAAgIACg");
	this.shape_7.setTransform(136.4,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLA7IgMgEQgKgFgIgJQgGgJgEgLQgDgLAAgKQAAgKADgLQAEgLAGgIQAIgJAKgFQALgFAMAAQANAAALAFQAKAFAHAJQAHAIAEALQADALAAAKQAAAKgDALQgEALgHAJQgHAJgKAFIgLAEIgNABgAgKggQgFADgDAFQgEAFgBAGQgCAHAAAGQAAAGACAHQABAGAEAFQADAFAFACQAFAEAFAAQAGAAAEgEQAGgCADgFQADgFACgGQABgHABgGQgBgGgBgHQgCgGgDgFQgDgFgGgDQgEgCgGAAQgFAAgFACg");
	this.shape_8.setTransform(123.4,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3A7IAAhCQAAgMgDgHQgDgDgEgCQgEgCgGAAIgHABIgGADIgFADIgFACIACAHIAAAIIAABEIgcAAIAAhCIgBgKIgCgIQgDgEgEgCQgDgCgFAAQgHAAgGAEIgKAHIAABRIgeAAIAAhyIAbAAIACAJQAGgFAHgDQAIgEAIAAQAIAAAIADQAIACAFAHQAIgFAJgEQAKgDALAAQAMAAAKAEQAJADAEAGQAGAGACAKQADAJAAALIAABEg");
	this.shape_9.setTransform(107.1,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQA4QgLgDgHgHQgIgIgFgLQgEgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAJgEQAKgEAKAAQALAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQABAPAJAGQAIAHALAAIAMgBIAJgDIAHgDIAEgDIAIAXIgGAEIgJADIgMAEIgRABQgJAAgKgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgHgBQgGAAgIAFQgDAEgCADQgCAFgBAGIAqAAIAAAAg");
	this.shape_10.setTransform(86.6,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA6IgOgDIgLgFIgHgFIALgXIAHAFIAJAFIALAEQAGABAEAAQALAAAEgDQAFgEAAgEIgBgFQgBgDgDgBIgIgEIgMgDIgQgFQgHgDgFgCQgFgFgCgFQgDgGAAgIQAAgQAMgKQAFgFAJgCQAJgCAJAAQAKAAAHABIANAEIAJAEIAFADIgKAWQgEgEgJgEQgJgDgLAAQgJAAgEADQgDAEAAAEIABAFIADADIAIADIAJACQAKACAHAEQAIADAFADQAFADADAHQACAFAAAJQAAAJgDAHQgEAHgGAFQgHAEgIACQgJACgKAAQgIAAgIgCg");
	this.shape_11.setTransform(75,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAcAAIAABygAgMgyQgEgFAAgHQAAgGAEgFQAFgGAHAAQAJAAAEAGQAEAFABAGQgBAHgEAFQgEAFgJAAQgHAAgFgFg");
	this.shape_12.setTransform(66.5,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4A7IAAhCQAAgMgFgHQgCgDgEgCQgEgCgFAAIgHABIgHADIgGADIgEACIABAHIABAIIAABEIgcAAIAAhCIAAgKIgEgIQgCgEgDgCQgEgCgFAAQgHAAgGAEIgKAHIAABRIgeAAIAAhyIAcAAIABAJQAGgFAHgDQAIgEAIAAQAIAAAIADQAIACAFAHQAIgFAKgEQAJgDALAAQAMAAAJAEQAKADAFAGQAFAGACAKQADAJgBALIAABEg");
	this.shape_13.setTransform(53.6,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAbAAIAABygAgMgyQgFgFABgHQgBgGAFgFQAEgGAIAAQAIAAAFAGQAFAFAAAGQAAAHgFAFQgFAFgIAAQgIAAgEgFg");
	this.shape_14.setTransform(40.6,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYA5IgYgkIgZAkIgfAAIApg5Igqg4IAiAAIAXAjIAagjIAeAAIgoA4IAqA5g");
	this.shape_15.setTransform(31.8,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWA5QgHgCgFgFQgGgEgDgHQgDgHAAgJQAAgIADgHQAEgHAFgCQAGgEAIgDQAHgEAIgBIALgCIALAAIAAgCQAAgKgFgEQgEgEgIAAIgJABIgIADIgGAEIgFADIgKgVIAGgEIAKgEIANgFQAHgBAGAAQAJAAAIACQAIADAGAFQAGAGADAIQADAJAAALIAABIIgbAAIgBgJQgFAGgHADQgHADgIAAQgHAAgHgDgAAIAEIgIABQgKADgDAEQgEAFAAAFQAAAGAEADQAEAEAIAAQAEAAAFgCQAGgCAEgEIAAgYg");
	this.shape_16.setTransform(19.8,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHBQIghhfIgEBeIgfAAIAIieIAgAAIAkBwIAkhwIAfAAIAICeIgfAAIgEhdIgeBeg");
	this.shape_17.setTransform(5.3,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,0,223.7,30.9);


(lib.Copy0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA4QgLgDgHgHQgIgIgFgLQgEgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAJgEQAKgEAKAAQALAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQABAPAJAGQAIAHALAAIAMgBIAJgDIAHgDIAEgDIAIAXIgGAEIgJADIgMAEIgRABQgJAAgKgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgHgBQgGAAgIAFQgDAEgCADQgCAFgBAGIAqAAIAAAAg");
	this.shape.setTransform(253.1,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA4QgKgDgHgHQgIgIgEgLQgDgHgCgUQAAgOAFgLQAEgLAHgIQAIgHAJgFQAKgDAIAAQALAAAHACQAIADAFAEQAGAEADAFIAGAJIgWAPQgEgGgFgGQgGgFgIAAQgEAAgDACQgEACgEAFQgHAIAAARQAAARAHAJQAEAEAFACQADADAHAAQAGAAAGgCIAJgDIAGgDIAEgEIAIAYIgFAEIgJAEIgMADQgIACgJAAQgIAAgKgEg");
	this.shape_1.setTransform(241.6,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA7IAAhAQAAgHgBgFQgBgFgDgEQgGgHgKAAQgFAAgFAEQgGADgFAFIAABQIgdAAIAAhyIAbAAIABAJQAHgGAJgDQAHgDAJAAQAJAAAHADQAIADAGAGQAFAGADAJQADAKAAANIAABDg");
	this.shape_2.setTransform(229.4,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA4QgLgDgHgHQgIgIgEgLQgFgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAKgEQAJgEAJAAQAMAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQABAPAJAGQAIAHALAAIALgBIAJgDIAIgDIAEgDIAIAXIgFAEIgJADIgOAEIgQABQgJAAgKgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgIgBQgGAAgHAFQgDAEgCADQgCAFgBAGIAqAAIAAAAg");
	this.shape_3.setTransform(216.8,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA6IAAhxIAbAAIACAMIAFgFIAFgFIAIgDIAJgCIAIABIAFABIgFAaIgEgBIgGAAQgIAAgHAFQgFAEgEAFIAABLg");
	this.shape_4.setTransform(207.3,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQA4QgLgDgHgHQgIgIgFgLQgEgMAAgPQAAgNAEgLQAEgMAIgHQAHgIAJgEQAKgEAKAAQALAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhKAAQABAPAJAGQAIAHALAAIAMgBIAJgDIAHgDIAEgDIAIAXIgGAEIgJADIgMAEIgRABQgJAAgKgEgAAVgMQAAgGgCgFQgCgEgDgDIgGgEIgHgBQgGAAgIAFQgDAEgCADQgCAFgBAGIAqAAIAAAAg");
	this.shape_5.setTransform(196.4,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBRIAAhZIgPAAIAAgYIAPAAIAAgHQAAgLADgIQADgIAFgEQAFgFAHgDQAFgCAIAAQALAAAHACIAJACIgEAaIgFgCQgFgCgHAAQgGAAgFAEQgDADAAAJIAAAGIAZAAIAAAYIgZAAIAABZg");
	this.shape_6.setTransform(187.1,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBRIAAhZIgQAAIAAgYIAQAAIAAgHQAAgLADgIQACgIAGgEQAFgFAHgDQAFgCAIAAQALAAAHACIAIACIgDAaIgGgCQgEgCgHAAQgGAAgEAEQgEADgBAJIAAAGIAZAAIAAAYIgYAAIAABZg");
	this.shape_7.setTransform(179.5,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAbAAIAABygAgMgyQgFgFABgHQgBgGAFgFQAFgGAHAAQAIAAAFAGQAEAFABAGQgBAHgEAFQgFAFgIAAQgHAAgFgFg");
	this.shape_8.setTransform(172.2,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXBMQgIgFgHgJQgGgIgDgLQgEgLAAgMQAAgLAEgJQADgLAHgIQAGgJALgFQALgFALAAQAKAAAKADIAAgtIAeAAIAACeIgcAAIgBgJQgEAFgGADQgIAEgGAAQgMAAgKgFgAgGgKQgFACgEAFQgDADgBAGQgCAHAAAGQAAAHABAHQABAHADAFQAEAEAFADQAFADAEAAQAGAAAGgDQAFgDADgEIAAg3QgJgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(162.6,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRA4QgJgDgJgHQgHgIgEgLQgFgMAAgPQAAgNAEgLQAFgMAGgHQAIgIAJgEQALgEAIAAQAMAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhJAAQABAPAIAGQAIAHALAAIALgBIAJgDIAHgDIAFgDIAIAXIgFAEIgKADIgMAEIgRABQgJAAgLgEgAAWgMQgBgGgCgFQgCgEgDgDIgHgEIgHgBQgGAAgGAFQgEAEgCADQgCAFAAAGIAqAAIAAAAg");
	this.shape_10.setTransform(146.1,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBPIAAhCQAAgHgCgGQgBgCgDgDQgFgHgIAAIgFABIgHACIgGAFIgEADIAABQIgeAAIAAieIAeAAIAAA0QAFgEAIgDQAHgDAJAAQALAAAIADQAIAEAFAHQAFAGACAJQADAIAAALIAABEg");
	this.shape_11.setTransform(133.5,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBBQgEgFgBgFQgDgEAAgHIAAg+IgPAAIAAgYIAPAAIAAgeIAdAAIAAAeIAaAAIAAAYIgaAAIAAA4QAAAFACADQADACAEAAQAIAAAGgFIAIAVQgFAEgIADQgJACgJABQgOgBgHgIg");
	this.shape_12.setTransform(122.8,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiA6IAAhxIAbAAIACAMIAFgFIAFgFIAIgDIAJgCIAIABIAFABIgFAaIgEgBIgGAAQgIAAgHAFQgFAEgEAFIAABLg");
	this.shape_13.setTransform(110.5,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRA4QgKgDgIgHQgHgIgEgLQgFgMAAgPQAAgNAEgLQAFgMAGgHQAIgIAKgEQAJgEAJAAQALAAAKADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhJAAQAAAPAJAGQAIAHALAAIALgBIAJgDIAHgDIAFgDIAIAXIgFAEIgJADIgOAEIgQABQgJAAgLgEgAAWgMQgBgGgCgFQgCgEgDgDIgHgEIgHgBQgFAAgHAFQgEAEgCADQgCAFAAAGIAqAAIAAAAg");
	this.shape_14.setTransform(99.6,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA5IgwhxIAfAAIAdBKIAdhKIAeAAIgvBxg");
	this.shape_15.setTransform(87.5,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgLgFgGgJQgHgJgDgLQgEgLAAgKQAAgKAEgLQADgLAHgIQAGgJALgFQAKgFANAAQANAAAKAFQALAFAHAJQAHAIADALQAEALAAAKQAAAKgEALQgDALgHAJQgHAJgKAFIgLAEIgNABgAgKggQgFADgDAFQgDAFgCAGQgCAHAAAGQAAAGACAHQACAGADAFQADAFAFACQAFAEAFAAQAGAAAFgEQAFgCADgFQADgFACgGQABgHAAgGQAAgGgBgHQgCgGgDgFQgDgFgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_16.setTransform(75.1,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA4QgKgDgHgHQgIgIgEgLQgDgHgCgUQAAgOAFgLQAEgLAHgIQAIgHAJgFQAKgDAIAAQALAAAHACQAIADAFAEQAGAEADAFIAGAJIgWAPQgEgGgFgGQgGgFgIAAQgEAAgDACQgEACgEAFQgHAIAAARQAAARAHAJQAEAEAFACQADADAHAAQAGAAAGgCIAJgDIAGgDIAEgEIAIAYIgFAEIgJAEIgMADQgIACgJAAQgIAAgKgEg");
	this.shape_17.setTransform(63.4,17.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPA6IgOgDIgLgFIgHgFIALgXIAHAFIAJAFIALAEQAGABAEAAQALAAAEgDQAFgEAAgEIgBgFQgBgDgDgBIgIgEIgMgDIgQgFQgHgDgFgCQgFgFgCgFQgDgGAAgIQAAgQAMgKQAFgFAJgCQAJgCAJAAQAKAAAHABIANAEIAJAEIAFADIgKAWQgEgEgJgEQgJgDgLAAQgJAAgEADQgDAEAAAEIABAFIADADIAIADIAJACQAKACAHAEQAIADAFADQAFADADAHQACAFAAAJQAAAJgDAHQgEAHgGAFQgHAEgIACQgJACgKAAQgIAAgIgCg");
	this.shape_18.setTransform(52.1,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBQIAAhyIAcAAIAABygAgMgyQgEgFgBgHQABgGAEgFQAEgGAIAAQAIAAAFAGQAEAFABAGQgBAHgEAFQgFAFgIAAQgIAAgEgFg");
	this.shape_19.setTransform(43.7,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWBMQgJgFgHgJQgGgIgDgLQgDgLAAgMQAAgLADgJQADgLAHgIQAHgJAKgFQAKgFAMAAQAKAAAKADIAAgtIAdAAIAACeIgbAAIgBgJQgEAFgGADQgIAEgGAAQgNAAgIgFgAgFgKQgGACgDAFQgEADgBAGQgCAHAAAGQgBAHACAHQACAHACAFQAEAEAFADQAFADAFAAQAFAAAGgDQAFgDADgEIAAg3QgJgDgHAAQgGAAgFADg");
	this.shape_20.setTransform(34.1,15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRA4QgKgDgIgHQgHgIgEgLQgFgMAAgPQAAgNAEgLQAFgMAGgHQAIgIAKgEQAKgEAIAAQALAAAKADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhJAAQAAAPAJAGQAIAHALAAIALgBIAJgDIAHgDIAFgDIAIAXIgFAEIgJADIgOAEIgQABQgJAAgLgEgAAWgMQgBgGgCgFQgCgEgDgDIgHgEIgHgBQgFAAgHAFQgEAEgCADQgCAFAAAGIAqAAIAAAAg");
	this.shape_21.setTransform(22.2,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaBPIgLgnIgDgJIgEgHQgCgDgDAAIgHgBIgXAAIAAA7IgeAAIAAieIA4AAQAHABAJACQAKACAIAFQAIAFAEAJQAFAKAAAOIgBALQgCAGgDAFQgCAFgFAEQgDADgHADQAHAEAFAFQAEAHADAOIANArgAgbgGIAVAAQAZAAAAgWQABgMgHgFQgDgDgFgBIgLgBIgVAAg");
	this.shape_22.setTransform(9.7,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265.7,30.9);


(lib.Copy01_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAuIAAgZIgWAOIgMgUIAZgPIgZgPIANgUIAVAOIAAgYIAUAAIAAAYIAWgOIANAUIgZAPIAZAPIgMAUIgXgOIAAAZg");
	this.shape.setTransform(210.5,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBPIgNgeQgEgMgCgEQgDgEgHAAIgJAAIAAAyIgeAAIAAieIAeAAIAABSIAHAAQAEAAAEgDQADAAACgJIAKgZIAgAAIgNAgQgFAJgJAGQAFACAEAEQADADADAHIAVAyg");
	this.shape_1.setTransform(200,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA6IAAhxIAbAAIACAMIAFgFIAFgFIAIgDIAJgCIAIABIAFABIgFAaIgEgBIgGAAQgIAAgHAFQgFAEgEAFIAABLg");
	this.shape_2.setTransform(189.9,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgKgFgIgJQgGgJgEgLQgDgLAAgKQAAgKADgLQAEgLAGgIQAIgJAKgFQAKgFANAAQANAAALAFQAKAFAHAJQAHAIAEALQADALAAAKQAAAKgDALQgEALgHAJQgHAJgKAFIgMAEIgMABgAgKggQgFADgDAFQgDAFgCAGQgCAHAAAGQAAAGACAHQACAGADAFQADAFAFACQAFAEAFAAQAGAAAEgEQAFgCAEgFQADgFACgGQABgHABgGQgBgGgBgHQgCgGgDgFQgEgFgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_3.setTransform(178.6,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA5IgThJIgSBJIgYAAIgmhxIAfAAIAUBHIAShHIAWAAIATBHIAUhHIAfAAIgmBxg");
	this.shape_4.setTransform(164.1,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBBQgDgFgCgFQgCgEAAgHIAAg+IgQAAIAAgYIAQAAIAAgeIAcAAIAAAeIAaAAIAAAYIgaAAIAAA4QgBAFADADQADACAEAAQAIAAAHgFIAHAVQgFAEgIADQgJACgJABQgOgBgHgIg");
	this.shape_5.setTransform(151.8,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA4QgJgDgJgHQgHgIgEgLQgFgMAAgPQAAgNAEgLQAFgMAGgHQAIgIAJgEQALgEAIAAQAMAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhJAAQABAPAIAGQAIAHALAAIALgBIAJgDIAHgDIAFgDIAIAXIgFAEIgKADIgMAEIgRABQgJAAgLgEgAAWgMQgBgGgCgFQgCgEgDgDIgHgEIgHgBQgGAAgGAFQgEAEgCADQgCAFAAAGIAqAAIAAAAg");
	this.shape_6.setTransform(141.6,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBPIhAhoIAABoIgeAAIAAieIAfAAIA8BjIAAhjIAeAAIAACeg");
	this.shape_7.setTransform(127.7,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBBQgEgFgBgFQgDgEAAgHIAAg+IgPAAIAAgYIAPAAIAAgeIAdAAIAAAeIAaAAIAAAYIgaAAIAAA4QAAAFACADQADACAEAAQAIAAAGgFIAIAVQgFAEgIADQgJACgJABQgOgBgHgIg");
	this.shape_8.setTransform(111.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA6IgOgDIgLgFIgHgFIALgXIAHAFIAJAFIALAEQAGABAEAAQALAAAEgDQAFgEAAgEIgBgFQgBgDgDgBIgIgEIgMgDIgQgFQgHgDgFgCQgFgFgCgFQgDgGAAgIQAAgQAMgKQAFgFAJgCQAJgCAJAAQAKAAAHABIANAEIAJAEIAFADIgKAWQgEgEgJgEQgJgDgLAAQgJAAgEADQgDAEAAAEIABAFIADADIAIADIAJACQAKACAHAEQAIADAFADQAFADADAHQACAFAAAJQAAAJgDAHQgEAHgGAFQgHAEgIACQgJACgKAAQgIAAgIgCg");
	this.shape_9.setTransform(101.3,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRA4QgJgDgJgHQgHgIgFgLQgEgMAAgPQAAgNAEgLQAFgMAGgHQAIgIAJgEQALgEAIAAQAMAAAJADQAJAEAHAIQAHAHAEAMQAEAMAAAPIAAAFIhJAAQABAPAIAGQAIAHALAAIALgBIAJgDIAHgDIAFgDIAIAXIgGAEIgIADIgNAEIgRABQgJAAgLgEgAAWgMQgBgGgCgFQgCgEgDgDIgHgEIgHgBQgGAAgGAFQgEAEgCADQgCAFAAAGIAqAAIAAAAg");
	this.shape_10.setTransform(89.9,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BPIAAieIA2AAQAKABAIADQAJACAIAGQAGAGADAHQAEAIABAKQgBAMgEAHQgFAJgJAFQAMADAIAJQAEAFABAHQACAGAAAHIgCANIgEAMQgEAFgFAEQgGAFgHADIgLACIgLABgAgZA0IAXAAIAKgBIAHgCQAFgDADgEQACgEAAgFQAAgFgDgFQgDgFgFgDIgJgDIgIgBIgWAAgAgZgNIAQAAIAJAAIAGgCQAFgDADgEQADgFgBgFQAAgFgDgGQgEgEgGgCIgDgBIgDgBIgFAAIgEgBIgNAAg");
	this.shape_11.setTransform(77.6,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPA6IgOgDIgLgFIgHgFIALgXIAHAFIAJAFIALAEQAGABAEAAQALAAAEgDQAFgEAAgEIgBgFQgBgDgDgBIgIgEIgMgDIgQgFQgHgDgFgCQgFgFgCgFQgDgGAAgIQAAgQAMgKQAFgFAJgCQAJgCAJAAQAKAAAHABIANAEIAJAEIAFADIgKAWQgEgEgJgEQgJgDgLAAQgJAAgEADQgDAEAAAEIABAFIADADIAIADIAJACQAKACAHAEQAIADAFADQAFADADAHQACAFAAAJQAAAJgDAHQgEAHgGAFQgHAEgIACQgJACgKAAQgIAAgIgCg");
	this.shape_12.setTransform(60.1,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAUIAIgIQADgFABgEQgGAAgFgDQgEgGAAgHQAAgHAEgFQAFgEAHgBQAHABAFAFQAEAHABAJQAAAIgGAJIgHALIgJAKg");
	this.shape_13.setTransform(52.1,10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApBPIgLgfIg7AAIgLAfIggAAIA6ieIAdAAIA5CegAAVAUIgVg9IgUA9IApAAg");
	this.shape_14.setTransform(42.1,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBRIgQgEIgLgGIgHgEIANgaIAGAEIAJAFIAMAEQAGACAHAAQALgBAGgFQAHgEAAgJIgBgIQgBgFgEgCQgEgEgHgDIgQgHIgSgHQgIgDgFgFQgGgGgDgGQgCgIAAgLQAAgJADgIQADgIAHgGQAHgGAKgEQAKgDALAAQALAAAJACQAJACAGAEIALAHIAHAHIgQAWIgGgHIgJgEIgLgFQgGgCgFAAQgLAAgGAGQgFAEAAAIQAAAEACADQABADAEACIAJAGIANAGQANAEAJAFQAJAEAFAFQAGAGADAHQACAIAAALQAAAMgEAJQgFAIgIAGQgIAGgKADQgKADgJAAQgKAAgJgCg");
	this.shape_15.setTransform(28.4,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVA7IAAhAQAAgHgBgFQgBgFgDgEQgGgHgKAAQgFAAgFAEQgGADgFAFIAABQIgdAAIAAhyIAbAAIABAJQAHgGAJgDQAHgDAJAAQAJAAAHADQAIADAGAGQAFAGADAJQADAKAAANIAABDg");
	this.shape_16.setTransform(11.2,17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLA7IgMgEQgKgFgIgJQgGgJgEgLQgDgLAAgKQAAgKADgLQAEgLAGgIQAIgJAKgFQALgFAMAAQANAAALAFQAKAFAHAJQAHAIAEALQADALAAAKQAAAKgDALQgEALgHAJQgHAJgKAFIgMAEIgMABgAgKggQgFADgDAFQgDAFgCAGQgCAHAAAGQAAAGACAHQACAGADAFQADAFAFACQAFAEAFAAQAGAAAEgEQAFgCAEgFQADgFACgGQABgHABgGQgBgGgBgHQgCgGgDgFQgEgFgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_17.setTransform(-1.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,0,228.1,30.9);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAkIAAgaIgWAPIgEgKIAWgPIgWgPIAFgKIAVAPIAAgZIAJAAIAAAZIAVgPIAGAJIgYAQIAYAPIgGAKIgVgPIAAAag");
	this.shape.setTransform(65,71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAuQgGgCgEgEQgEgEgCgFQgDgFAAgHQAAgHADgFQACgGAFgBQAKgIAMgCQAKgCAIAAIAAgBIgBgKQgBgEgCgDQgEgEgKAAQgDAAgGACQgHADgGAEIgEgLQAEgDAIgDQAHgEAJAAQAOAAAJAIQADAEACAGQADAHAAAJIAAA5IgOAAIAAgIQgFAFgGADQgFACgFAAQgGAAgFgBgAAAABQgJACgFAEQgDAFAAAHQAAAGADAEQADAFAEAAIAHABQAEAAAFgDIAJgGIAAgbQgMABgGABg");
	this.shape_1.setTransform(56.7,77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA1IgEgGIgBgKIAAg5IgPAAIAAgMIAPAAIAAgZIALAAIAAAZIAXAAIAAAMIgXAAIAAA4QAAAGADACQACADAEAAQAGAAAGgFIAEALIgIAEQgEABgGAAQgIAAgFgFg");
	this.shape_2.setTransform(49.8,76.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAuQgGgCgDgEQgEgEgDgFQgDgFABgHQgBgHADgFQACgGAFgBQAKgIAMgCQAKgCAJAAIAAgBIgBgKQgCgEgCgDQgFgEgIAAQgEAAgHACQgGADgGAEIgFgLQAGgDAHgDQAHgEAJAAQAPAAAHAIQAFAEACAGQABAHAAAJIAAA5IgMAAIgBgIQgEAFgGADQgGACgFAAQgGAAgFgBgAgBABQgIACgEAEQgEAFgBAHQAAAGAEAEQAEAFADAAIAGABQAFAAAFgDIAKgGIAAgbQgMABgIABg");
	this.shape_3.setTransform(42.4,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA/IAAh9IAfAAIANABQAHACAHADIAJAGIAHAHQAHAJADALQADAMAAALQAAAQgFANQgGAOgJAHQgEAEgFADIgJADQgHADgLAAgAgdAyIAPAAQAMAAAEgDQAIgEAHgHIAGgIIADgJQADgKAAgJIgBgPIgEgLQgFgKgIgGQgFgEgGgBIgNgCIgQAAg");
	this.shape_4.setTransform(33.3,75.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaCBIAAkCIBYAAQAQAAAPAFQAOAFALAJQALAJAGANQAGANAAAQQAAASgIANQgHANgPAJQAUAGAMAQQAGAHADALQADAKAAAMQAAAKgCAKQgDAKgGAKQgFAJgJAHQgIAHgLAEIgTAFIgTABgAgpBVIAkAAIASgBQAHgBAFgDQAIgFAEgGQAEgHAAgIQAAgJgFgIQgFgHgJgGIgNgFIgPAAIgjAAgAgpgWIAZAAIAQgBIAJgCQAJgFAFgHQAEgIAAgHQAAgKgGgIQgGgIgLgEIgEAAIgGgCIgIAAIgGgBIgVAAg");
	this.shape_5.setTransform(77.8,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfB+QgKgEgJgHQgJgGgIgKQgPgQgJgaQgEgMgCgPIgCgdQAAgQACgQQADgOAEgNIAKgXQAHgLAHgJQAPgRAUgIQAUgIAUAAQAQAAAOADQAOAEALAFQAVANALAUIgiAgIgIgLIgKgKQgHgEgIgDQgJgDgLAAQgJAAgLAGQgLAFgIALQgIALgFASQgFAQAAAWQAAAUAFARQAFAQAJALQAIAMANAFQAKAHAPAAIAZgCIALgDIAAgvIgoAAIAAgrIBXAAIAAB8IgKAFIgSAFIgZAFIghACQgXAAgWgJg");
	this.shape_6.setTransform(53.8,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrB5QgRgMgLgTQgLgTgFgYQgFgYABgXQgBgWAFgYQAFgYALgTQALgTARgMQATgNAYAAQAaAAASANQARAMALATQAMATAEAYQAFAYgBAWQABAXgFAYQgEAYgMATQgLATgRAMQgSANgaAAQgYAAgTgNgAgShRQgIAHgFAMQgFAMgCAQQgDAQAAASQAAASADAQQACAQAGANQAEAMAIAHQAJAHAJAAQALAAAHgHQAJgHAFgMQAFgNADgQQACgQAAgSQAAgSgCgQQgDgQgFgMQgFgMgJgHQgHgHgLAAQgJAAgJAHg");
	this.shape_7.setTransform(32.1,52.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJCAIAAjEIgsAeIgYgmIBQgzIAmAAIAAD/g");
	this.shape_8.setTransform(10.5,52.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLA6QgEgHAAgNIAAhlIANAAIAABoQAAAFACAEQAAACAEAAQAEAAAFgCIADAKIgGACIgIABQgJAAgEgFg");
	this.shape_9.setTransform(83.5,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAtQgFgCgEgDQgEgDgDgGQgCgFAAgIQAAgGACgFQACgGAFgBQAKgIAMgCQAKgCAIAAIAAgBIgBgKQAAgEgDgCQgEgGgKAAQgEABgFACQgHACgGAFIgFgLQAFgDAIgEQAHgDAJAAQAOAAAJAIQAEAEACAGQACAHAAAJIAAA5IgOAAIAAgIQgEAFgHACQgFADgFAAQgGAAgFgCgAgBAAQgJACgDAFQgFAFAAAHQABAGADAEQAEAEADABIAGABQAFAAAFgCIAJgHIAAgaQgLAAgIAAg");
	this.shape_10.setTransform(76.3,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAuIAAg3QAAgLgEgHQgDgDgEgCQgEgBgGAAQgEAAgHADQgGADgFAEIAABFIgOAAIAAhZIAMAAIACAHQAFgEAHgDQAHgCAGAAQASAAAHAJQAHAKAAARIAAA3g");
	this.shape_11.setTransform(67.4,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQArQgIgEgEgHQgFgHgDgIQgCgJAAgIIABgMIAEgMQAGgMAJgFQAFgCAFgCIAIgBQAOAAAJAIQAJAIAEALQAEAMAAAHQAAAHgCAGQgBAHgDAFIgHALQgEAEgFACIgJAEIgJABQgJAAgHgEgAgIghQgDACgEADQgGAHgCAIQgCAHAAAGQAAAKAEAJQADAJAHAEQAGADAFAAQAEABAEgCQAEgCADgDQAHgGACgIQACgJAAgGQAAgJgEgJQgEgJgGgDQgGgFgGAAQgEAAgEACg");
	this.shape_12.setTransform(57.7,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgDgBgEQABgEACgCQADgDACAAQADAAADADQADACgBAEQABAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_13.setTransform(51,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA1IgEgGIgBgKIAAg5IgPAAIAAgMIAPAAIAAgZIALAAIAAAZIAXAAIAAAMIgXAAIAAA4QAAAGADACQACADAEAAQAGAAAGgFIAEALIgIAEQgEABgGAAQgIAAgFgFg");
	this.shape_14.setTransform(46.1,27.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgDgDABgEQgBgEADgCQADgDACAAQAEAAACADQACACABAEQgBAEgCADQgCACgEAAQgCAAgDgCg");
	this.shape_15.setTransform(41.2,26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOA8QgHgEgEgGQgFgHgDgIQgCgJAAgKQAAgIABgGQABgEADgGQAHgLAJgFQAJgFAIAAIAMABIAHACIAAglIAPAAIAAB9IgNAAIgCgIQgEAFgGADQgFACgGAAQgHAAgIgEgAgCgQQgFACgDADIgGAHIgEAFQgCAJAAAGIABAMIADAJQAEAJAGADQAGADAFAAQAGAAAEgCQAGgDADgFIAAg3IgIgDIgIgBQgGAAgCABg");
	this.shape_16.setTransform(34.4,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA8QgHgEgEgGQgFgHgDgIQgCgJAAgKQAAgIABgGQABgEADgGQAHgLAJgFQAJgFAIAAIAMABIAHACIAAglIAPAAIAAB9IgNAAIgCgIQgEAFgGADQgFACgGAAQgHAAgIgEgAgCgQQgFACgDADIgGAHIgEAFQgCAJAAAGIABAMIADAJQAEAJAGADQAGADAFAAQAGAAAEgCQAGgDADgFIAAg3IgIgDIgIgBQgGAAgCABg");
	this.shape_17.setTransform(24.9,26.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAjA/IgOgnIgqAAIgOAnIgPAAIAth9IAKAAIAuB9gAAQAKIgQgyIgRAyIAhAAg");
	this.shape_18.setTransform(15.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E60000").s().p("AlPFPQiKiKgBjFQABjECKiLQCLiLDEAAQDEAACLCLQCLCLABDEQgBDFiLCKQiLCMjEAAQjEAAiLiMg");
	this.shape_19.setTransform(47.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,95.1);


(lib.Attachments_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Attachments();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298,207);


(lib.power2u = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vodapower();
	this.instance.setTransform(23.8,-44.2,1,1,0,0,0,29.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,319,115.5,45.5);


(lib.mc_smarts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_smar_ts();
	this.instance.setTransform(42.3,69.1,1,1,0,0,0,30.2,12.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnhOIBPBOIhOBPg");
	this.shape.setTransform(5,74.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,57,175.1,32);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_264 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(264).call(this.frame_264).wait(1));

	// Button
	this.button = new lib.CTBTN();
	this.button.setTransform(363.8,18.8,2.5,0.079,0,180,0,-0.5,0.7);
	this.button.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.button).wait(265));

	// Border
	this.instance = new lib.mc_1pxl_border();
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(265));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg43AHCIAAuDMBxvAAAIAAODg");
	mask.setTransform(364,45);

	// Price
	this.instance_1 = new lib.mc_price();
	this.instance_1.setTransform(60.7,113.2,0.626,0.626,0,0,0,40,21.2);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({regX:40.1,regY:21,x:60.3,y:30.9},9,cjs.Ease.get(1)).wait(29));

	// PMX24
	this.instance_2 = new lib.mc_pmx24();
	this.instance_2.setTransform(97.9,101.5,0.626,0.626,0,0,0,27.1,12);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(231).to({_off:false},0).to({x:98,y:19.2},9,cjs.Ease.get(1)).wait(25));

	// Smart S
	this.instance_3 = new lib.mc_smarts();
	this.instance_3.setTransform(135.8,119.3,0.626,0.626,0,0,0,36,12.1);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(236).to({_off:false},0).to({regY:12.2,x:135.4,y:36.7},9,cjs.Ease.get(1)).wait(20));

	// Buton
	this.instance_4 = new lib.mc_btn();
	this.instance_4.setTransform(218.1,72.5,0.899,0.899,0,0,0,42.8,14);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240).to({_off:false},0).to({y:0.5},9,cjs.Ease.get(1)).wait(16));

	// Power
	this.instance_5 = new lib.power2u();
	this.instance_5.setTransform(341.2,-237.5,0.619,0.619,0,0,0,32.5,14.5);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(244).to({_off:false},0).to({regX:32.4,x:341.1,y:-173.3},9,cjs.Ease.get(1)).wait(12));

	// TCs
	this.instance_6 = new lib.TCs();
	this.instance_6.setTransform(598,-232.6,0.899,0.899,0,0,0,23.2,7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(253).to({_off:false},0).to({alpha:1},8).wait(4));

	// Bubble
	this.instance_7 = new lib.Bubble();
	this.instance_7.setTransform(691.1,35.1,0.014,0.013,0,0,0,48.1,44.5);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(229).to({_off:false},0).to({regX:47.6,regY:47.6,scaleX:0.63,scaleY:0.63,y:35.2},7,cjs.Ease.get(1)).to({scaleX:0.52,scaleY:0.52,y:35.1},2,cjs.Ease.get(1)).wait(27));

	// Plus
	this.instance_8 = new lib.Plus();
	this.instance_8.setTransform(618.4,63,0.026,0.026,0,0,0,15.1,17);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240).to({_off:false},0).to({regX:15.5,regY:15.5,scaleX:0.47,scaleY:0.47},5,cjs.Ease.get(1)).to({scaleX:0.43,scaleY:0.43,x:618.3,y:62.9},2,cjs.Ease.get(1)).wait(18));

	// Copy03_02
	this.instance_9 = new lib.Tween5("synched",0);
	this.instance_9.setTransform(-134.1,36.7,0.899,0.899);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.setTransform(131.2,36.7,0.899,0.899);

	this.instance_9.mask = this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},225).to({state:[{t:this.instance_10}]},11).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(225).to({_off:false},0).to({_off:true,x:131.2},11,cjs.Ease.get(1)).wait(29));

	// Copy03_01
	this.instance_11 = new lib.Copy03_01();
	this.instance_11.setTransform(-157.3,15.3,0.899,0.899,0,0,0,84.9,15.5);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(223).to({_off:false},0).to({x:108,y:15.2},11,cjs.Ease.get(1)).wait(31));

	// Copy02_02
	this.instance_12 = new lib.Copy02_02();
	this.instance_12.setTransform(339.6,-18.2,1,1,0,0,0,80.2,15.5);
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(112).to({_off:false},0).to({y:53.5},15,cjs.Ease.get(1)).wait(76).to({y:-18.2},15,cjs.Ease.get(1)).wait(47));

	// Copy02_01
	this.instance_13 = new lib.Copy02_01();
	this.instance_13.setTransform(299.5,-36.2,1,1,0,0,0,84.7,15.5);
	this.instance_13._off = true;

	this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114).to({_off:false},0).to({y:35.5},15,cjs.Ease.get(1)).wait(72).to({y:-36.2},15,cjs.Ease.get(1)).wait(49));

	// Attachments
	this.instance_14 = new lib.Attachments_1();
	this.instance_14.setTransform(830.1,42.6,0.425,0.425,0,0,0,149,103.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(110).to({_off:false},0).to({x:642.6},15,cjs.Ease.get(1)).wait(74).to({x:830.1},15,cjs.Ease.get(1)).wait(51));

	// Device2
	this.instance_15 = new lib.Device2_1();
	this.instance_15.setTransform(789.7,73,0.63,0.63,0,0,0,96.2,131.8);
	this.instance_15._off = true;

	this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(231).to({_off:false},0).to({x:602.6},11,cjs.Ease.get(1)).wait(23));

	// Device
	this.instance_16 = new lib.Devices();
	this.instance_16.setTransform(789.8,73,0.432,0.432,0,0,0,139.6,191);
	this.instance_16._off = true;

	this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({regX:139.5,x:631.2},15,cjs.Ease.get(1)).wait(74).to({x:789.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(141));

	// MotoZLogo01
	this.instance_17 = new lib.MotorolaLogo1();
	this.instance_17.setTransform(383.6,106.5,0.727,0.727,0,0,0,65,15.6);
	this.instance_17._off = true;

	this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(17).to({_off:false},0).to({y:65.1},15,cjs.Ease.get(1)).wait(74).to({scaleX:0.44,scaleY:0.44,x:543.2,y:78.2},15,cjs.Ease.get(1)).wait(144));

	// Copy01-02
	this.instance_18 = new lib.Copy01_02();
	this.instance_18.setTransform(340.3,-22,0.727,0.727,0,0,0,92.5,15.5);
	this.instance_18._off = true;

	this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({_off:false},0).to({y:44},15,cjs.Ease.get(1)).wait(76).to({y:-22},15,cjs.Ease.get(1)).to({_off:true},7).wait(141));

	// Copy01_01
	this.instance_19 = new lib.Copy0101();
	this.instance_19.setTransform(294.2,-39.4,0.727,0.727,0,0,0,77.1,15.5);
	this.instance_19._off = true;

	this.instance_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({y:26.6},15,cjs.Ease.get(1)).wait(72).to({y:-39.4},15,cjs.Ease.get(1)).to({_off:true},9).wait(141));

	// VC icon
	this.instance_20 = new lib.mc_vc_icon_02();
	this.instance_20.setTransform(120.8,30.8,0.88,0.88);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},9,cjs.Ease.get(1)).wait(209).to({x:430.8},10,cjs.Ease.get(1)).wait(37));

	// VC Rhombus Masker (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("EgB7A7FI4e4dIAAgBIvnvnIAAgBIvovnMA5og5oIaaaZIgBAAIAGAGIACACIPhPgIgBAAIPpPmMg3uA3ug");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgNFA5VIzD84IAAAAIsLycIAAgBIsKyaMBECgs5IUkfLIAAAAIAEAHIACACIMFSUIgBAAIMLSaMhBvArYg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgXAA1sItT/8IAAAAIog0ZIAAgBIof0XMBLQgfVMAOWAieIAAAAIADAHIABADIIcUNIgBAAIIgUaMhItAeSg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgfeAwsMgHjghwIAAgBIk11hIABgBIk11kMBPjgRyMAIJAkcIAAAAIACAIIABACIEyVYIgBAAIE1VkMhM3ARMg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgmbAq2MgCDgiiIAAAAIhU2CIAAAAIhU2DMBRXgE2MACOAlSIAAgBIABAIIAAADIBTV3IAAAAIBUWEMhOnAErg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgphAlTIigi/MADAgibIABgBIB62AIABgBIB72AMBRMAHHMgDQAlKIAAAAIAAAIIgBADIh6V2IAAAAIh7WBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EguRAffIiGjSMAHjghvIAAAAIE01kIABAAIE01kMBPjARyMgIJAkbIgBgBIgBAIIgBADIkyVaIAAgBIk0Vlg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Egx1AZ0IhsjgMALfggmIABgBIHV01IAAAAIHW02MBM4AbFMgMaAjMIAAAAIgCAIIgBACInSUsIgBAAInVU2g");
	var mask_1_graphics_17 = new cjs.Graphics().p("Eg0ZAUhIhUjrIO1/OIABAAIJez9IABAAIJez+MBJoAi/MgQBAhtIAAgBIgDAIIgCACIpaT0IAAAAIpeT+g");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eg2KAPvIg+jxIRn9wIAAAAILQzBIAAAAILQzCMBGKAphMgTBAgHIAAgBIgEAIIgBACIrLS4IAAAAIrPTCg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Eg3SALlIgsj1IT28TIAAgBIMryGIAAAAIMryGMBCxAuxI1bejIAAAAIgEAHIgCACIslR+IAAgBIsrSHg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eg3/AIJIgbj4IVk7AIABAAINyxRIAAAAINyxRMA/sAy3I3SdKIAAAAIgFAGIgCACItsRJIAAAAItyRRg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eg4XAFcIgQj5IW457IAAAAIOnwkIABAAIOmwlMA9JA17I4sb/IAAgBIgFAGIgCADIuhQcIAAAAIunQlg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eg4jADgIgHj3IXw5JIABAAIPLwEIABAAIPLwDMA7NA4BI5pbHIAAgBIgGAHIgCACIvEP8IAAgBIvMQEg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg4pACVIgBj3IYS4oIAAAAIPhvvIAAAAIPhvvMA6BA5QI6NajIAAAAIgGAGIgCACIvZPnIAAAAIvfPvg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg4qAB8IAAj3IYd4dIAAAAIPovoIAAAAIPovoMA5oA5oI6ZaZIAAAAIgGAGIgCACIvhPhIAAgBIvmPpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:148.3,y:378.1}).wait(1).to({graphics:mask_1_graphics_10,x:74.1,y:372}).wait(1).to({graphics:mask_1_graphics_11,x:7.7,y:353.1}).wait(1).to({graphics:mask_1_graphics_12,x:-49.4,y:325}).wait(1).to({graphics:mask_1_graphics_13,x:-96.7,y:290.8}).wait(1).to({graphics:mask_1_graphics_14,x:-133.6,y:267.9}).wait(1).to({graphics:mask_1_graphics_15,x:-161.3,y:228.5}).wait(1).to({graphics:mask_1_graphics_16,x:-181.5,y:190.2}).wait(1).to({graphics:mask_1_graphics_17,x:-195.5,y:154.5}).wait(1).to({graphics:mask_1_graphics_18,x:-204.6,y:122.5}).wait(1).to({graphics:mask_1_graphics_19,x:-210,y:94.8}).wait(1).to({graphics:mask_1_graphics_20,x:-212.9,y:71.9}).wait(1).to({graphics:mask_1_graphics_21,x:-214.1,y:53.9}).wait(1).to({graphics:mask_1_graphics_22,x:-214.5,y:41.1}).wait(1).to({graphics:mask_1_graphics_23,x:-214.5,y:33.3}).wait(1).to({graphics:mask_1_graphics_24,x:-214.4,y:30.8}).wait(1).to({graphics:null,x:0,y:0}).wait(240));

	// VC rhombus
	this.instance_21 = new lib.mc_rhombus_02();
	this.instance_21.setTransform(127.8,30.8,1,1,180,0,0,-154.7,0);
	this.instance_21._off = true;

	this.instance_21.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).wait(209).to({x:437.8},10,cjs.Ease.get(1)).wait(37));

	// BG
	this.instance_22 = new lib.BG_728x90();

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;