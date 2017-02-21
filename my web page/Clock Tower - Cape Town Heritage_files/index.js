(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/Device.png?1486023132880", id:"Device"},
		{src:"assets/vc_icon_02.png?1486023132880", id:"vc_icon_02"}
	]
};



// symbols:



(lib.Device = function() {
	this.initialize(img.Device);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,246);


(lib.vc_icon_02 = function() {
	this.initialize(img.vc_icon_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.Vodacom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAbIAAgdQAAgGgCgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgEgBIgDAAIgDACIgDABIgBABIAAADIAAAEIAAAeIgLAAIAAgdIgBgFIgBgEIgDgCIgEgBQgDAAgDACIgEADIAAAkIgOAAIAAgzIANAAIAAAEIAGgEIAHgCQAEAAAEACQAEABABADIAIgEQAEgCAFAAQAGAAAEACIAGAEQADADABAEIABAKIAAAeg");
	this.shape.setTransform(41,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAbIgFgCQgEgCgDgEIgGgJIgBgKQAAgEABgFQACgFAEgDQADgEAEgDQAFgCAFAAQAGAAAFACQAFADADAEQACADACAFQACAFAAAEIgCAKIgEAJQgDAEgFACIgGACIgFAAgAgEgNQgCABgBACIgDAFIgBAFIABAGIADAFQABACACABQACACACAAQADAAABgCQADgBACgCIACgFIAAgGIAAgFIgCgFQgCgCgDgBQgBgCgDAAQgCAAgCACg");
	this.shape_1.setTransform(33.5,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAaQgEgCgEgDQgDgEgCgFIgCgMQAAgFACgFQACgGADgDQAEgEAEgBQAEgCADAAQAFAAADABIAGADIAEAEIADAEIgKAHIgEgFQgDgDgEAAIgCABIgDADQgDAEAAAHQAAAHADAFIAEADIADABIAGgBIAEgBIADgCIABgBIAEALIgCABIgEACIgGACIgHAAQgDAAgFgBg");
	this.shape_2.setTransform(28.1,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAaIgGgDIgEgFQgBgDAAgEQAAgEABgDIAEgEQADgCAEgBIAHgCIAEgBIAFAAIAAgBQAAgEgCgCQgDgCgDAAIgDAAIgEACIgDACIgCABIgEgKIACgBIAFgDIAGgBIAFgBIAIABQADABADADIAEAGQABAEAAAFIAAAgIgMAAIgBgEQgCADgDABIgGABIgGgBgAADACIgDABQgEAAgBADQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQACACADAAQABAAADgBIAEgDIAAgLg");
	this.shape_3.setTransform(22.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAjQgFgDgCgEQgDgDgCgFQgCgFAAgGQAAgFACgEQABgEAEgEQADgEAFgCQAFgDADAAIAJACIAAgVIAPAAIAABIIgNAAIgBgEIgEADQgEACgCAAQgFAAgEgCgAgBgEIgFAEIgCADIgBAGIABAGIACAFIAEAEQACABABAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgZIgHgBQgCAAgBABg");
	this.shape_4.setTransform(17.1,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAbIgGgCQgEgCgEgEIgEgJQgCgFAAgFQAAgEACgFQACgFACgDQAEgEAEgDQAFgCAFAAQAGAAAEACQAGADACAEQAEADACAFQABAFAAAEIgBAKIgGAJQgCAEgGACIgEACIgGAAgAgDgNQgDABgCACIgCAFIAAAFIAAAGIACAFQACACADABQACACABAAQACAAADgCQACgBABgCIADgFIABgGIgBgFIgDgFQgBgCgCgBQgDgCgCAAQgBAAgCACg");
	this.shape_5.setTransform(11.5,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAkIgbhHIAQAAIAQA1IASg1IAPAAIgaBHg");
	this.shape_6.setTransform(5.3,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,16.3);


(lib.TCs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAYQAGAAAEgCIAGgFIABgDIgQgrIAHAAIALAkIAHgQIAGgUIAHAAIgIAbIgHAOIgDAGIgDAGIgHAEQgEACgGAAg");
	this.shape.setTransform(42.6,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAbQgBgDAAgHIAAguIAGAAIAAAwIAAAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAEgBIACAFIgEACIgDAAQgEAAgCgDg");
	this.shape_1.setTransform(39.8,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAeIAAg6IAGAAIAAADIAGgDIAEgBQAGAAAFAEIADAEIABAEIACAKQAAAHgDAFQgEAFgFACQgEACgCAAQgFAAgEgBIAAARgAgFgWIgFADIAAAZIADACIAEAAIADAAIAEgCIADgDIACgDIACgHQAAgEgCgFQgBgDgDgCQgDgCgCgBQgDAAgCACg");
	this.shape_2.setTransform(36.3,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAeIAAg6IAGAAIABADIAFgDIAEgBQAHAAADAEIAEAEIACAEIABAKQAAAHgEAFQgDAFgEACQgFACgCAAQgGAAgCgBIAAARgAgFgWIgEADIAAAZIACACIAEAAIADAAIADgCIAEgDIACgDIABgHQABgEgCgFQgBgDgEgCQgCgCgCgBQgCAAgDACg");
	this.shape_3.setTransform(31.9,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAVQgDAAgCgDIgDgEIgBgGIABgFIADgDQAFgDAFgBIAIgBIAAAAIAAgFIgCgDQgCgDgEAAIgEACQgDABgDACIgBgFIAFgEQADgBAEAAQAGAAAEADIADAGIABAHIAAAaIgGAAIAAgEIgFAEIgFABIgEgBgAAAAAQgDABgCACQgCACgBADQAAAEACACQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAIACAAQACABACgCIAEgDIAAgMIgIAAg");
	this.shape_4.setTransform(27.4,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAVIgFgCIgDgCIACgFIAGADQACACADgBQAEABACgCQACgCAAgEQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgDgDgDgCQgGgBgDgCQgCgDAAgEQAAgGADgDQAFgDAEAAQAEAAADABIAGAEIgCAFIgGgDIgFgCQgCABgCACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABABQADABADACIAEACIAEABQADADAAAFIgBAFIgBACQgCADgEACIgGABIgFgBg");
	this.shape_5.setTransform(22.1,8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAdIgEgCIgDgDQgEgFgCgFQgCgGAAgIQABgKAEgHIAEgHIAGgDQAFgCACgBQAHAAAEADIAEADIAEAFIgGAEIgDgEIgFgDIgFgBQgFAAgFAHIgDAHIgBAJIABAKIAEAIQACADADABQACACADAAQAFAAADgCQADgBADgDIADAHQgEADgEABIgJABQgDAAgFgBg");
	this.shape_6.setTransform(18,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAdIgGgEIgDgFIgBgGIABgFIABgEIAGgFIAFgDIADgBIgCgBIgEgHQgBgCAAgDQAAgEACgDQACgDAEgBIAGgBIAFABIAFACIACADIACAEIgFAEIgFgHIgEgCQgDAAgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIACAFIAPATIAJgMIAFACIgLAOIAKAOIgHAAIgGgIIgHAFQgDADgBAAIgGABQgGAAgCgBgAgGAAIgGACIgDAEQgCAEAAAEIABAGQABACADABIAGACIAGgCIADgDIADgEIgLgQg");
	this.shape_7.setTransform(12.8,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAdIAAg0IgSAAIAAgFIAoAAIAAAFIgSAAIAAA0g");
	this.shape_8.setTransform(7.8,7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBARIAAgNIgKAHIgDgEIALgHIgLgGIADgFIAKAHIAAgMIADAAIAAAMIAKgHIADAFIgLAGIALAHIgDAFIgKgIIAAANg");
	this.shape_9.setTransform(3.8,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,14.1);


(lib.PTY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAZQgDgBgCgDQgEgFgBgKIAAgfIAIAAIAAAfIABAGIACAEQAEAEAFAAQACAAAEgCQAEgCADgCIAAgnIAIAAIAAAyIgIAAIAAgEIgHAEIgHABIgJgBg");
	this.shape.setTransform(54.9,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAZQgFgDgDgDIgEgJIgCgKIABgGIADgHQADgHAFgDIAGgCIAEgBQAHAAAGAFQAFAFACAGQACAGAAAEIAAAIIgDAHIgDAFIgGAFIgFACIgFAAQgFAAgDgCgAgEgSIgEADQgEADgBAFIgBAHQAAAGACAFQACAFAEADQADABADAAIAEAAIAFgDQADgEABgEIACgJQAAgFgDgEQgCgGgDgCQgDgCgEAAIgEABg");
	this.shape_1.setTransform(49.3,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAdQAJAAADgCQAEgCADgDIACgFIgTg0IAJAAIANArQAFgIAEgLIAHgYIAJAAIgKAgIgJASIgFAIQgBAEgCADQgDADgFACQgFABgIAAg");
	this.shape_2.setTransform(44,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAZQgEgDgDgDIgEgJIgBgKIAAgGIACgHQADgHAGgDIAGgCIAEgBQAIAAAFAFQAGAFACAGQACAGAAAEIgBAIIgCAHIgFAFIgEAFIgGACIgFAAQgEAAgFgCgAgDgSIgFADQgDADgBAFIgBAHQAAAGACAFQACAFADADQADABADAAIAFAAIADgDQAEgEACgEIABgJQAAgFgCgEQgCgGgEgCQgEgCgDAAIgDABg");
	this.shape_3.setTransform(36.8,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAeIgCgDIgBgFIAAghIgIAAIAAgHIAIAAIAAgOIAGAAIAAAOIANAAIAAAHIgNAAIAAAgQABADABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQADAAAEgDIACAGIgFACIgGABQgEAAgDgDg");
	this.shape_4.setTransform(32.3,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAaIAAgyIAHAAIABAFIAEgFQADgCAEAAIAEABIgBAIIgEgBQgDAAgEACIgDAFIAAAlg");
	this.shape_5.setTransform(27.3,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAUQgGgHAAgNIAAgHIACgHIAFgGQABgCADgBQAGgDADAAIAGABQAEABADACQAEAFACAGQADAGAAAFIgiAAQAAAJADAGQACACAEACQADACACgBQAFAAADgBIAHgFIACAHQgCADgFACIgKABQgKAAgGgHgAANgFQgBgFgCgDQgCgEgDgBIgFgBQgDAAgEADQgCABgBADIgCAHIAZAAIAAAAg");
	this.shape_6.setTransform(22.7,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAaIgLgkIgKAkIgHAAIgQgzIAIAAIALAnIAOgnIACAAIANAnIALgnIAIAAIgQAzg");
	this.shape_7.setTransform(16.6,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAZQgFgDgDgDIgEgJIgCgKIABgGIADgHQADgHAFgDIAGgCIAEgBQAIAAAFAFQAFAFACAGQACAGABAEIgBAIIgDAHIgDAFIgGAFIgFACIgFAAQgEAAgEgCgAgEgSIgEADQgDADgCAFIgBAHQAAAGADAFQABAFAEADQAEABACAAIAFAAIADgDQAEgEACgEIABgJQAAgFgDgEQgBgGgEgCQgEgCgDAAIgEABg");
	this.shape_8.setTransform(10.4,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAkIAAhHIAVAAQAFAAAEABQAEACADACQADADACAEQABAFAAAFQAAALgGADQgDADgFABQgEACgEAAIgNAAIAAAdgAgNAAIANAAQAFAAAEgCQAEgEAAgHQAAgIgEgDIgEgDIgFgBIgNAAg");
	this.shape_9.setTransform(5.1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.9,16.3);


(lib.Price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BzIgFAAIAEglIAHABQAPAAALgDQALgEAIgIQAQgPAGgbQgGAEgIACQgHADgJAAQgPAAgMgGQgMgFgIgKQgIgKgEgLQgEgOAAgPQAAgPAFgOQAEgNAJgKQAJgLAPgGQANgGARAAQAOAAANAFQANAFALALQAKALAGARQAGARAAAXQAAAdgIAZQgDAOgHALQgFAMgIAKQgIAJgJAHQgJAIgLAGQgKAFgNADQgMADgPAAgAgLhJQgFADgEAFQgEAFgCAGIgCAOQABAPAHAJQAIAKAMAAIAPgBQAGgCAGgDIABgIIABgLQAAgMgDgJQgCgIgEgFQgEgGgGgCQgFgDgFAAQgFAAgGADg");
	this.shape.setTransform(38,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BzIgGAAIAFglIAHABQAOAAAMgDQALgEAJgIQAOgPAHgbQgGAEgIACQgHADgIAAQgQAAgMgGQgMgFgIgKQgIgKgEgLQgEgOAAgPQAAgPAEgOQAFgNAJgKQAJgLAOgGQAOgGARAAQAOAAANAFQANAFALALQAKALAGARQAGARAAAXQAAAdgIAZQgEAOgGALQgFAMgIAKQgHAJgKAHQgJAIgMAGQgIAFgNADQgOADgOAAgAgLhJQgFADgEAFQgDAFgCAGIgCAOQgBAPAIAJQAIAKAMAAIAPgBQAGgCAGgDIABgIIABgLQAAgMgCgJQgDgIgEgFQgEgGgGgCQgFgDgFAAQgGAAgFADg");
	this.shape_1.setTransform(20.6,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA4IgJgcIgCgHIgDgEIgDgDIgEAAIgRAAIAAAqIgVAAIAAhvIAnAAIAMABQAGACAGAEQAGAEADAGQADAHAAAJIgBAJIgDAIQgBADgEACIgHAFQAFACADAEQADAEADAKIAIAfgAgTgEIAPAAQASAAAAgPQAAgIgFgEIgGgDIgHgBIgPAAg");
	this.shape_2.setTransform(7.4,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,42.1);


(lib.PMX24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMA3IAAgcIgvAAIAAgMIAzhFIAIAAIAABGIAMAAIAAALIgMAAIAAAcgAgXAQIAjAAIAAgwg");
	this.shape.setTransform(44,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA5IAAgIQAAgKADgGQAEgFAIgIIAPgOQAIgHAIgKQADgGAAgHQAAgKgFgFQgCgCgEgBQgDgCgDAAQgGAAgGADQgHAEgHAHIgHgJIALgJQAFgEAGgCQAGgCAFAAQAFAAAFACQAEABAEACQAHAFADAHQADAHAAAGQAAALgFAJIgGAGIgKAKIgOAOQgIAHgDAEQgDAFAAAFIA0AAIAAAMg");
	this.shape_1.setTransform(35.3,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA4IgZguIgZAuIgPAAIAig5Igfg2IAPAAIAWApIAXgpIAPAAIgfA1IAiA6g");
	this.shape_2.setTransform(26.9,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEA5IgdhYIgFBWIgLAAIAGhvIAOAAIAdBaIAehaIAPAAIAEBvIgMAAIgEhVIgeBXg");
	this.shape_3.setTransform(16.7,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA4IAAhvIAhAAQAIAAAGACQAHACAEAEQAFAFACAGQACAHAAAIQABARgKAGQgEAEgIADQgGACgIAAIgUAAIAAAtgAgVAAIAVAAQAJAAAFgEQAHgFAAgMQAAgMgGgFIgHgEIgIgBIgVAAg");
	this.shape_4.setTransform(6.8,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.6,23.1);


(lib.Plan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMApIgJgDIgEgDIAEgJIAJAFQAFADAHAAQAEAAAEgDQAEgCACgFQACgEAAgFQAAgJgFgFQgDgCgFgBQgDgBgEAAIgJAAIgFABIAAgoIAoAAIAAAJIgfAAIAAAWIAGgBQAGAAAGACQAFACAEAEQAIAFAAANQAAALgFAHIgFAGIgGADQgGACgFAAQgFAAgGgCg");
	this.shape.setTransform(89.6,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApIgJgDIgEgDIAEgJIAJAFQAFADAHAAQADAAAFgDQAEgCACgFQACgEAAgFQAAgJgFgFQgDgCgFgBQgDgBgFAAIgIAAIgEABIAAgoIAnAAIAAAJIgeAAIAAAWIAFgBQAGAAAGACQAFACAEAEQAIAFAAANQAAALgFAHIgFAGIgGADQgGACgFAAQgGAAgFgCg");
	this.shape_1.setTransform(83,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAqIAAg8IAHAAIAAA8gAgDgeQgCgCAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_2.setTransform(76,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAeIgOgXIgNAXIgLAAIAUgeIgSgeIAKAAIAMAWIANgWIAKAAIgSAeIATAeg");
	this.shape_3.setTransform(72.2,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAXQgIgIAAgPIABgJIADgIIAFgHIAFgEQAHgDAEAAIAIABIAHAEQAGAEACAIQADAIAAAGIgpAAQAAALAFAGQACADAEACQAEACADAAQAFAAAFgCIAIgFIACAIQgDADgGACQgGACgGAAQgLAAgIgJgAAPgHQAAgFgDgEQgCgEgEgCIgGgBQgEAAgEADIgEAGIgCAHIAdAAIAAAAg");
	this.shape_4.setTransform(66.6,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAnQgCgEAAgJIAAhEIAKAAIAABFIAAAHQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAHgCIACAHIgEACIgGAAQgGAAgDgEg");
	this.shape_5.setTransform(62.2,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAtAAIAAAJIgjAAIAAAdIAZAAIAAAHIgZAAIAAAog");
	this.shape_6.setTransform(57.9,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAXQgIgIAAgPIABgJIADgIIAFgHIAFgEQAHgDAEAAIAIABIAHAEQAGAEACAIQADAIAAAGIgpAAQAAALAFAGQACADAEACQAEACADAAQAFAAAFgCIAIgFIACAIQgDADgGACQgGACgGAAQgLAAgIgJgAAPgHQAAgFgDgEQgCgEgEgCIgGgBQgEAAgEADIgEAGIgCAHIAdAAIAAAAg");
	this.shape_7.setTransform(49.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAeIgHgCIgFgDIAEgIIAIAEQADADAFAAQAGAAADgDQACgCAAgFQAAgDgDgDQgEgEgGgCQgJgCgDgEQgEgEAAgGQAAgIAFgEQAGgFAHAAQAGAAAFACQAFACAEADIgFAIIgHgGQgEgBgEAAQgEAAgCACQgDADAAAEQAAACAEADQAEADAEACIAIAEIAFACQAEAEAAAHIAAAGIgDAGQgDAEgFABQgFACgEAAQgEAAgEgCg");
	this.shape_8.setTransform(43.5,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAdQgFgDgEgFQgEgEgBgGQgCgFAAgGIABgHIADgJQAEgIAGgDIAHgDIAFgBQAJAAAHAGQAGAFACAHQADAIAAAFIgBAJIgDAIQgCAFgDACQgCADgDACIgGACIgHABQgFAAgFgDgAgEgWIgFAEQgFAEgBAFIgCAJQABAHACAFQACAHAFACQAEADADAAIAGgBIAEgEQAEgEACgFIABgKQABgGgDgGQgDgGgEgDQgEgCgEAAIgEABg");
	this.shape_9.setTransform(37.6,10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAdQgGgDgDgFQgDgEgCgGQgCgFAAgGIABgHIADgJQAEgIAGgDIAHgDIAFgBQAKAAAGAGQAHAFACAHQACAIAAAFIgBAJIgDAIQgCAFgDACQgCADgEACIgFACIgHABQgFAAgFgDgAgFgWIgEAEQgFAEgBAFIgBAJQgBAHADAFQADAHAEACQAEADADAAIAGgBIAEgEQAEgEACgFIACgKQgBgGgCgGQgCgGgFgDQgEgCgEAAIgFABg");
	this.shape_10.setTransform(31,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgHgDgEQgEgEgHAAQgDAAgEACIgIAFIAAAvIgJAAIAAhVIAJAAIAAAeQAEgDAEgCQAFgCAEAAQAFAAAEACQAFABADAEQACADABAEQABAFAAAEIAAAng");
	this.shape_11.setTransform(24.4,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAqIgGgDIgFgFQgEgFgDgJQgDgIAAgMQAAgPAGgKQADgGAEgDQADgEAEgCQAIgDAEAAQAJAAAGADQAEACADAEIAFAHIgIAFIgFgGQgDgDgEgCQgDgBgEAAQgJAAgGAKQgDAEgCAHQgBAGAAAHQAAAJACAGQABAHAEAEQADAFAEACQAEACAEAAQAHAAAFgCQAFgDAEgDIAEAJQgFAFgHACQgIACgFAAQgGgBgGgCg");
	this.shape_12.setTransform(17.6,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAeQgEgCgCgDQgFgGgBgMIAAglIAKAAIAAAmIABAHQABADACABQADAEAHAAQADAAAFgCQAEgCADgDIAAguIAKAAIAAA8IgJAAIgBgFQgDADgFABQgEACgEAAQgGAAgFgBg");
	this.shape_13.setTransform(10.7,10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZgsIAzAsIgzAtg");
	this.shape_14.setTransform(2.6,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.3,18.6);


(lib.mc_vc_icon_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vc_icon_02();
	this.instance.setTransform(-22.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.mc_rhombus_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("EgQkAqCIgBAAIvovpIAAABI4d4eIAAj3MA3ug3uIPlPpIAAgBIPhPhIACACIAFAGIAAgBIaaaZMg5oA5qg");
	this.shape.setTransform(201.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.2,-369,725.5,738);


(lib.mc_1pxl_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(363.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,729,91);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AozAAIRnAA");
	this.shape.setTransform(63.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,114.9,2);


(lib.ICON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4.9,1,1).p("AB8AxIAAkbQAAgPgLgMQgLgLgQAAInVAAQgPAAgLALQgLAMAAAPIAAFyQAAAPALAMQALAKAPAAIBCAAQgEAMAAANQAAAfAWAVQAVAXAfAAQAfAAAWgXQAVgVAAgfQAAgNgEgMIFiAAQgFAMAAANQAAAfAWAVQAWAWAfAAQAfAAAVgWQAWgVAAgfQAAgNgEgMIBDAAQAPAAALgKQALgMAAgPIAAiIIgliHQgFgSgJgKQgKgJgNAAIhjAA");
	this.shape.setTransform(42.2,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,89.2,59.4);


(lib.Device_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Device();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,246);


(lib.CTBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgWuBY/MAAAix9MAtdAAAMAAACx9g");
	this.shape.setTransform(-0.4,-331.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-901.1,291.2,1139.2);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA1QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAgBgBIACgEIArgsIgqgqQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCACgBQADABABACIAvAvQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAACgBACIgBABIgvAwQgBACgDAAQgCAAgDgCg");
	this.shape.setTransform(68.9,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAhIgLgqIgKAqIgOAAIgWhBIASAAIALApIALgpIAMAAIALApIAMgpIASAAIgWBBg");
	this.shape_1.setTransform(54.9,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAiIgGgCQgHgDgEgFQgEgFgCgHQgCgGAAgGQAAgFACgHQACgGAEgFQAEgFAHgDQAGgDAGAAQAHAAAHADQAFADAFAFQAEAFACAGQACAHAAAFQAAAGgCAGQgCAHgEAFQgEAFgGADIgHACIgHABgAgFgSQgDACgCADQgCACgBAEIgBAHIABAHIADAHQACADADABQADACACAAQADAAADgCQADgBACgDIADgHIABgHIgBgHIgDgGQgCgDgDgCQgDgBgDAAQgCAAgDABg");
	this.shape_2.setTransform(46.5,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAiIAAglIAAgGIgDgGQgDgDgGAAQgCAAgDACIgGAEIAAAuIgSAAIAAhCIAQAAIABAGQAEgEAFgCQADgBAGAAQAFAAAEABQAFACADAEQADADACAGQACAFAAAIIAAAmg");
	this.shape_3.setTransform(38.9,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAfIAHAAIAFgBIAGgDIAGgEIABgBIABgBIgchDIASAAIARAzIAEgKIAEgNIAEgOIAEgOIARAAIgMAmQgGAPgGALIgFALQgCAEgEAFQgEAEgHACQgLADgHAAg");
	this.shape_4.setTransform(29,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAbQgDgEgCgFQgBgFgBgIIAAgmIARAAIAAAlQABAGACAEIAEAEIAFABQADAAADgCIAGgEIAAguIASAAIAABBIgRAAIAAgFQgFAEgFABQgDACgEAAQgNAAgFgHg");
	this.shape_5.setTransform(21.6,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAhbIAfAAQAFAAAFACQAFABAEAEQAEADACAFQACAEAAAGQAAAGgCAFQgDAFgFADQAHABAEAFIADAHIABAIIgBAHIgDAHIgFAGIgHAEIgGACIgHAAgAgOAeIANAAIAFAAIAFgCQADgBABgDIABgFIgBgGIgFgFIgFgBIgEgBIgNAAgAgOgHIAJAAIAFAAIADgBQADgCACgCIABgGQAAgDgCgDQgCgDgEgBIgBgBIgBAAIgDAAIgCAAIgIAAg");
	this.shape_6.setTransform(14.1,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B2CA0").s().p("Al5CKQgeAAAAgeIAAjXQAAgeAeAAILzAAQAeAAAAAeIAADXQAAAegeAAg");
	this.shape_7.setTransform(41.3,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.2,81.6,27.8);


(lib.Copy04_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape.setTransform(109,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_1.setTransform(103.9,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBFQgMgEgGgGIAHgPQAIAIAIACQAIAEALAAQAHAAAHgEQAHgEAEgHQADgHAAgJQAAgMgGgIQgEgGgJgBQgIgCgFAAIgPABIAAgLQAHgMANgNQAKgPAJgFIg8AAIAAgQIBOAAIAAARQgJAGgLANQgNAMgFALIACAAQAOAAALAFQAEADAEAEQAEACACAFQAEAKABALQAAAIgCAHQgCAGgFAGIgIAKQgFAEgFACQgLAFgIAAQgSgCgGgDg");
	this.shape_2.setTransform(91.3,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBJIAAhHIgvhKIATAAIAkA7IAmg7IASAAIgxBKIAABHg");
	this.shape_3.setTransform(80.3,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBJIAAhoIAaAAIAABogAgLguQgEgEAAgHQAAgFAEgFQAEgFAHAAQAIAAAEAFQAEAFAAAFQAAAHgEAEQgEAFgIAAQgHAAgEgFg");
	this.shape_4.setTransform(67.8,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAzQgKgCgGgIQgHgHgFgKQgEgKAAgOQABgMADgKQAEgLAHgGQAHgIAIgDQAJgEAIAAQAKAAAJADQAJADAGAIQAGAGAEAMQAEAKAAAOIAAAEIhEAAQACAOAHAFQAHAHAKAAIAKgBIAJgDIAHgDIADgDIAIAWIgFAEIgIADIgNACQgGACgIAAQgJAAgJgEgAAUgLIgDgKIgEgHQgDgCgEgBIgGgBQgFgBgGAGQgEADgCAEIgCAJIAnAAIAAAAg");
	this.shape_5.setTransform(59.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA0IgShCIgQBCIgXAAIgihoIAcAAIASBCIAShCIATAAIARBCIAThCIAcAAIgjBog");
	this.shape_6.setTransform(46.7,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA0QgHgCgEgEQgFgEgDgHQgDgGAAgIQAAgHADgHQADgFAFgDIAMgHQAHgCAIgBIAJgCIALgBIAAgCQAAgJgFgEQgEgDgHAAIgIABIgIACIgFAEIgFADIgJgTIAGgEIAJgEIALgEQAHgBAFAAQAJAAAHACQAIADAFAEQAFAGADAHQADAIAAALIAABBIgZAAIgBgIQgEAFgHADQgGADgHAAQgHAAgGgDgAAHAEIgHABQgJACgDAEQgEAEAAAGQAAAFAEADQAEADAHAAQAEAAAFgCIAIgGIAAgVg");
	this.shape_7.setTransform(33.6,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAqQgFgFgCgIQgDgJAAgMIAAg9IAcAAIAAA6QAAAMAEAGQABAEAEACQADACAFAAQAGgBAGgDIAIgGIAAhKIAcAAIAABoIgZAAIgBgIQgIAGgHACQgGACgIAAQgSAAgKgLg");
	this.shape_8.setTransform(22.4,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBJIAAg+Ig1AAIAAA+IgdAAIAAiRIAdAAIAAA6IA1AAIAAg6IAcAAIAACRg");
	this.shape_9.setTransform(9.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.7,28.7);


(lib.Copy03_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwA6QAQAAAIgEQAIgEAFgHIAFgIIgohrIATAAIAdBZQAJgRAHgXQAIgYAGgZIARAAQgKAngKAZQgJAXgHAPIgJAQQgEAIgFAGQgHAGgJADQgKAEgPAAg");
	this.shape.setTransform(140.9,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA1IAAhnIAOAAIACALIAKgKQAHgDAHAAIAJABIgCAPIgIAAQgHAAgGAEQgFAEgFAFIAABMg");
	this.shape_1.setTransform(133.6,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAoQgOgOAAgaQAAgIACgIQACgIADgGQAEgHAEgFQAEgEAFgDQALgEAIAAQAIAAAGABQAHACAFAFQAKAHAEANQAEAOAAALIhHAAQAAASAJALQAEAGAGADQAHADAGAAQAJAAAIgEQAHgDAGgFIAEAOQgEAFgKADQgKADgLAAQgUAAgNgOgAAagNQgBgJgEgGQgEgHgHgCQgGgDgEAAQgIAAgHAGQgEADgCAGIgEAMIAzAAIAAAAg");
	this.shape_2.setTransform(124.3,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IgkhnIARAAIAcBVIAehVIAQAAIgmBng");
	this.shape_3.setTransform(114.3,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBIIAAhnIAPAAIAABngAgGg0QgDgDAAgFQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(107.4,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBCQgFgHAAgPIAAh1IAQAAIAAB4QAAAHACADQAAADAFAAQAEAAAGgDIAEANIgHADIgJABQgLAAgFgIg");
	this.shape_5.setTransform(103,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAoQgOgOAAgaQAAgIACgIQACgIADgGQAEgHAEgFQAEgEAFgDQALgEAIAAQAIAAAGABQAHACAFAFQAKAHAEANQAEAOAAALIhHAAQAAASAJALQAEAGAGADQAHADAGAAQAJAAAIgEQAHgDAGgFIAEAOQgEAFgKADQgKADgLAAQgUAAgNgOgAAagNQgBgJgEgGQgEgHgHgCQgGgDgEAAQgIAAgHAGQgEADgCAGIgEAMIAzAAIAAAAg");
	this.shape_6.setTransform(94.5,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBGQgIgEgGgIQgGgHgDgLQgCgKAAgMQAAgIABgHQACgGAEgHQAHgNALgFQAKgGAKAAIAOABIAJADIAAgrIAPAAIAACQIgOAAIgBgIQgGAGgGACQgHADgHAAQgIAAgJgEgAgDgTQgEACgFAEIgHAHIgEAHQgCAKAAAIIABANIADALQAFAKAGAEQAIADAFAAQAHAAAGgCQAGgEAFgFIAAhBIgKgDIgKgBQgGAAgEABg");
	this.shape_7.setTransform(83.4,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwA6QAQAAAIgEQAIgEAFgHIAFgIIgohrIATAAIAdBZQAJgRAHgXQAIgYAGgZIARAAQgKAngKAZQgJAXgHAPIgJAQQgEAIgFAGQgHAGgJADQgKAEgPAAg");
	this.shape_8.setTransform(68.9,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA1QgGgCgFgFQgFgEgDgGQgDgGAAgJQAAgHADgGQADgGAFgCQAMgKAOgCQAMgCAKAAIAAgCQAAgGgCgFQgBgEgDgDQgFgGgKAAQgFAAgHADQgIADgGAFIgGgNIAOgIQAJgEAKABQARgBAJAKQAFAEACAHQADAIAAAKIAABDIgPAAIgBgJQgFAFgHAEQgHACgGAAQgGABgGgCgAgBAAQgKADgFAGQgFAFAAAIQAAAHAFAFQAEAEAEABIAHABQAFAAAHgDIALgHIAAgfQgOAAgJABg");
	this.shape_9.setTransform(58.9,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBGQgIgEgFgIQgGgHgEgLQgCgKAAgMQAAgIACgHQABgGAEgHQAHgNAKgFQALgGAKAAIANABIAJADIAAgrIAQAAIAACQIgOAAIgCgIQgFAGgGACQgGADgIAAQgIAAgJgEgAgDgTQgEACgFAEIgHAHIgEAHQgDAKAAAIIACANIADALQAFAKAGAEQAIADAGAAQAGAAAGgCQAGgEAEgFIAAhBIgKgDIgJgBQgGAAgEABg");
	this.shape_10.setTransform(48.6,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA9QgDgCgCgGQgBgEgBgGIAAhDIgRAAIAAgOIARAAIAAgcIAPAAIAAAcIAaAAIAAAOIgaAAIAABBQAAAHACADQADADAEAAQAIAAAHgGIAEANIgJAFQgFACgHgBQgKABgFgHg");
	this.shape_11.setTransform(35.8,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYA0IgYgoIgWAoIgSAAIAgg0IgfgzIASAAIAVAlIAXglIARAAIggAzIAiA0g");
	this.shape_12.setTransform(28.1,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAoQgOgOAAgaQAAgIACgIQACgIADgGQAEgHAEgFQAEgEAFgDQALgEAIAAQAIAAAGABQAHACAFAFQAKAHAEANQAEAOAAALIhHAAQAAASAJALQAEAGAGADQAHADAGAAQAJAAAIgEQAHgDAGgFIAEAOQgEAFgKADQgKADgLAAQgUAAgNgOgAAagNQgBgJgEgGQgEgHgHgCQgGgDgEAAQgIAAgHAGQgEADgCAGIgEAMIAzAAIAAAAg");
	this.shape_13.setTransform(18.7,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZA1IAAg/QABgOgGgHQgDgEgEgCQgFgCgGAAQgHAAgHAEIgNAIIAABQIgQAAIAAhnIAOAAIACAJQAGgFAIgDQAIgDAHAAQAVAAAIAKQAJALAAAVIAAA/g");
	this.shape_14.setTransform(7.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.3,28.7);


(lib.Copy03_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBJIAAiRIBeAAIAAAbIhBAAIAAAhIA1AAIAAAZIg1AAIAAAhIBGAAIAAAbg");
	this.shape.setTransform(118,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBJIAAiRIBeAAIAAAbIhBAAIAAAhIA1AAIAAAZIg1AAIAAAhIBGAAIAAAbg");
	this.shape_1.setTransform(105.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBJIgLglIgDgIIgDgGIgFgDIgGgBIgVAAIAAA3IgcAAIAAiRIA0AAIAPACQAJACAHAFQAHAFAEAIQAFAJAAANIgBAKIgEAKIgHAIIgJAGQAGADAEAFQAEAGAEANIALAogAgZgGIAUAAQAXAAAAgUQAAgKgGgFQgDgDgFgBIgJgBIgUAAg");
	this.shape_2.setTransform(93.3,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBJIAAiRIBdAAIAAAbIhAAAIAAAiIAzAAIAAAZIgzAAIAAA7g");
	this.shape_3.setTransform(81.5,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA9QgDgCgBgGQgBgEAAgGIAAhDIgRAAIAAgOIARAAIAAgcIANAAIAAAcIAbAAIAAAOIgbAAIAABBQAAAHAEADQACADAEAAQAIAAAHgGIAFANIgJAFQgGACgHgBQgJABgHgHg");
	this.shape_4.setTransform(67.6,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAoQgOgOAAgaQAAgIACgIQACgIADgGQAEgHAEgFQAEgEAFgDQALgEAIAAQAIAAAGABQAHACAFAFQAKAHAEANQAEAOAAALIhHAAQAAASAJALQAEAGAGADQAHADAGAAQAJAAAIgEQAHgDAGgFIAEAOQgEAFgKADQgKADgLAAQgUAAgNgOgAAagNQgBgJgEgGQgEgHgHgCQgGgDgEAAQgIAAgHAGQgEADgCAGIgEAMIAzAAIAAAAg");
	this.shape_5.setTransform(58.9,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBJQgMgDgDgDIADgOQAGADAIACQAIADAKAAQAFAAAGgCQAGgCADgEQAEgEACgFQACgGgBgGIAAgLQgFAGgGADQgHACgHAAQgJAAgIgDQgIgEgFgIQgHgHgCgKQgEgIAAgMQAAgKAEgKQADgJAGgJQAHgHAJgEQAKgFAKAAIASABQAJACAJADIAABkQgBAHgBAHQgCAGgDAEQgGALgLAEQgLAEgJAAQgKAAgKgCgAgCg7QgGACgEAEIgHAHIgEAJQgCAKgBAIIABANQABAGADACQAEAKAIADQAGAEAHAAQAGAAAGgDQAGgDAEgGIAAhAQgIgEgLABQgGAAgDABg");
	this.shape_6.setTransform(47.8,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA0QgIgCgEgDIgHgEIAGgOIAMAIQAHAEAJAAQAJAAAGgEQAFgEAAgIQAAgGgHgGQgGgFgLgFQgPgEgGgGQgHgHAAgLQAAgNAJgHQAJgJAOABQALgBAIAEQAIAEAGAEIgHANQgFgFgHgDQgHgDgHAAQgIAAgEAFQgEAEAAAFQAAAFAGAFQAGAFAKAEIAMAGQAGABADADQAIAHAAANQAAAGgCAFIgEAIQgGAGgIAEQgIACgHAAQgIAAgHgCg");
	this.shape_7.setTransform(34.2,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAzQgGgDgFgFQgJgKAAgVIAAhAIARAAIAABBQAAAHABAFQABAFAEADQAFAHANAAQAFAAAHgEQAJgDAEgFIAAhQIARAAIAABnIgPAAIgBgIQgHAEgHADQgGADgKAAQgJAAgIgCg");
	this.shape_8.setTransform(24.2,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNBCQgFgHAAgPIAAh1IAQAAIAAB4QAAAHACADQAAADAFAAQAEAAAGgDIAEANIgHADIgJABQgLAAgFgIg");
	this.shape_9.setTransform(16.4,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBJIAAiRIAsAAQAKAAAJADQAIADAGAFQAGAGADAIQADAIAAALQAAAWgMAJQgGAFgJADQgJADgKAAIgaAAIAAA7gAgbAAIAbAAQALAAAIgGQAIgHAAgPQAAgPgIgHQgDgDgGgCQgFgCgFAAIgbAAg");
	this.shape_10.setTransform(8.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.9,28.7);


(lib.Copy02_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTArIAAhTIALAAIABAIIAIgHQAGgDAGgBIAHACIgBAMIgHAAQgGAAgFADQgEADgEAEIAAA+g");
	this.shape.setTransform(218.7,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQApQgGgCgEgEQgHgIAAgRIAAg0IANAAIAAA1QAAAGACAEQABADACADQAFAGAKgBQAEAAAGgCQAHgDAEgEIAAhBIANAAIAABTIgMAAIgBgGQgFAEgGACQgGACgGAAQgIAAgGgCg");
	this.shape_1.setTransform(210.8,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPApQgHgFgFgFQgFgHgCgIQgDgIABgIIABgLIADgMQAGgLAJgFIAJgDIAIgCQAMAAAKAIQAJAIADAKQAEALgBAHIgBANQgBAFgDAGQgDAGgDAEQgFAEgEACIgJADIgIABQgIAAgHgDgAgHgfQgEABgDADQgGAHgCAIIgCAMQAAAJAEAJQADAJAHADQAFAEAFgBIAIgBQADgCADgCQAGgGACgIQACgJABgFQAAgIgFgJQgDgJgGgDQgGgEgFABQgDAAgEABg");
	this.shape_2.setTransform(201.7,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLA2QgDgGAAgMIAAhfIAMAAIAABhQAAAGACADQAAACAEAAQADAAAFgCIADAKIgFACIgIABQgJAAgEgGg");
	this.shape_3.setTransform(195.4,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPApQgHgFgFgFQgFgHgCgIQgDgIABgIIABgLIADgMQAGgLAJgFIAJgDIAIgCQANAAAIAIQAKAIADAKQAEALgBAHIgBANQgCAFgCAGQgDAGgDAEQgEAEgFACIgJADIgIABQgIAAgHgDgAgHgfQgEABgDADQgGAHgCAIIgCAMQABAJADAJQADAJAHADQAFAEAFgBIAIgBQADgCADgCQAGgGACgIQACgJABgFQAAgIgFgJQgDgJgGgDQgGgEgFABQgDAAgEABg");
	this.shape_4.setTransform(188.1,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqQgGgDgGgGQgFgFgDgIQgDgJAAgLQAAgPAGgLQAHgLAIgDQAJgDAFgBQAJAAAHAEQAGAEAEAEIAEAGIgJAHQgEgGgFgEQgEgDgIAAQgGgBgGAGQgFAFgDAIQgCAHAAAHQAAAHACAHQACAGADAEQAEAFAEACQAEADAEgBQAJABAFgDQAGgDAEgEIAEALQgFAEgHADQgIACgIAAQgGAAgHgCg");
	this.shape_5.setTransform(179.6,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAyIgEgGIgBgJIAAg3IgOAAIAAgLIAOAAIAAgXIALAAIAAAXIAWAAIAAALIgWAAIAAA2QAAAGACACQADACADAAQAGAAAGgFIAEAKQgDADgFACQgEABgGAAQgHAAgFgFg");
	this.shape_6.setTransform(169.3,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVArIAAg0QAAgKgEgHQgDgDgEgBQgEgBgFAAQgFAAgFADIgLAGIAABBIgNAAIAAhTIAMAAIABAGQAFgEAHgCQAGgDAFAAQARAAAIAJQAGAIAAASIAAAzg");
	this.shape_7.setTransform(161.8,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMArIgJgFQgEgEgCgEQgDgGAAgHQAAgFADgGQACgEAEgCQAKgIALgCQAKgCAIAAIAAAAIgBgJQgBgEgDgDQgEgFgIABQgEAAgGACQgGACgFAFIgFgKIAMgHQAHgDAIgBQAOAAAHAIQAEAEACAFQACAHAAAIIAAA2IgMAAIgBgHQgEAEgGADQgFACgFAAQgFAAgFgBgAAAAAQgJACgEAEQgDAGAAAGQAAAFADAFQADADAEABIAGABQAEAAAFgCIAJgHIAAgZQgMABgGAAg");
	this.shape_8.setTransform(152.9,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTArIAAhTIALAAIABAIIAIgHQAGgDAGgBIAHACIgBAMIgHAAQgGAAgFADQgEADgEAEIAAA+g");
	this.shape_9.setTransform(147.2,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVA6IgMgEIAAhxIANAAIAAAkIAKgDIAKgCQAJAAAJAHQAJAGAEALQADANAAAGQAAAIgBAHQgCAGgDAGQgHALgJAEQgKADgGAAQgKAAgHgCgAgLgPIgJAEIAAA6IAHABIAHABQAGABAEgDQAGgCAEgFQAIgJAAgQQAAgLgFgGQgEgIgGgDQgGgDgEAAIgIABg");
	this.shape_10.setTransform(139.6,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFA7IAAhUIALAAIAABUgAgFgrQgCgCAAgEQAAgEACgDQADgCACAAQADAAADACQACADAAAEQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_11.setTransform(133.1,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAqIgehTIAOAAIAXBFIAYhFIAOAAIggBTg");
	this.shape_12.setTransform(127.5,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIAAg0QAAgKgEgHQgDgDgEgBQgDgBgGAAQgEAAgGADIgLAGIAABBIgNAAIAAhTIAMAAIABAGQAFgEAHgCQAGgDAFAAQASAAAGAJQAHAIAAASIAAAzg");
	this.shape_13.setTransform(115.7,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA7IAAhUIALAAIAABUgAgEgrQgDgCAAgEQAAgEADgDQACgCACAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_14.setTransform(109.2,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAhQgKgMAAgVQgBgHACgFQABgHADgFQACgGAEgDQAEgFAEgBQAJgEAGgBQAGAAAFACQAGACAEADQAIAHADAKQAEALAAAJIg6AAQAAAPAHAJQAEAEAFADQAFADAFgBQAHAAAHgCQAGgDAFgEIADALQgEAEgIADQgIACgJAAQgQABgLgMgAAVgLQgBgGgDgGQgEgFgEgCQgFgCgEAAQgGAAgHAEQgCADgCAEIgEAKIAqAAIAAAAg");
	this.shape_15.setTransform(99.7,13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMA9IAAhJIgMAAIAAgLIAMAAIAAgGIABgLIADgIQADgHAFgCQAFgDAGAAQAHAAAHADIgBALIgGgBIgGgBQgFAAgCABQgDABgBADQgBAFAAAJIAAAGIASAAIAAALIgSAAIAABJg");
	this.shape_16.setTransform(93.2,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFA7IAAhUIALAAIAABUgAgEgrQgDgCAAgEQAAgEADgDQACgCACAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_17.setTransform(88.5,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLA2QgDgGAAgMIAAhfIAMAAIAABhQAAAGACADQAAACAEAAQADAAAGgCIACAKIgGACIgHABQgJAAgEgGg");
	this.shape_18.setTransform(84.9,12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVQAAgHACgFQABgHADgFQADgGADgDQADgFAFgBQAJgEAGgBQAGAAAGACQAFACAEADQAJAHACAKQADALAAAJIg4AAQgBAPAIAJQADAEAFADQAFADAFgBQAHAAAHgCQAGgDAFgEIADALQgEAEgIADQgIACgIAAQgRABgLgMgAAVgLQgBgGgDgGQgDgFgGgCQgFgCgDAAQgHAAgFAEQgDADgDAEIgCAKIApAAIAAAAg");
	this.shape_19.setTransform(74.6,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAqQgGgDgGgGQgFgFgDgIQgDgJAAgLQAAgPAGgLQAHgLAIgDQAJgDAFgBQAJAAAHAEQAGAEAEAEIAEAGIgJAHQgEgGgFgEQgEgDgIAAQgGgBgGAGQgFAFgDAIQgCAHAAAHQAAAHACAHQACAGADAEQAEAFAEACQAEADAEgBQAJABAFgDQAGgDAEgEIAEALQgFAEgHADQgIACgIAAQgGAAgHgCg");
	this.shape_20.setTransform(66.2,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVArIAAg0QAAgKgFgHQgCgDgDgBQgFgBgEAAQgFAAgHADIgKAGIAABBIgNAAIAAhTIAMAAIABAGQAFgEAGgCQAHgDAGAAQARAAAGAJQAHAIAAASIAAAzg");
	this.shape_21.setTransform(57.5,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVQAAgHACgFQABgHADgFQADgGADgDQADgFAFgBQAIgEAHgBQAGAAAGACQAFACAEADQAJAHACAKQADALAAAJIg4AAQgBAPAIAJQADAEAFADQAFADAFgBQAIAAAGgCQAGgDAFgEIADALQgEAEgIADQgIACgIAAQgRABgLgMgAAVgLQgBgGgDgGQgDgFgGgCQgFgCgDAAQgHAAgFAEQgEADgCAEIgDAKIAqAAIAAAAg");
	this.shape_22.setTransform(48.6,13.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFA7IAAhUIALAAIAABUgAgEgrQgDgCAAgEQAAgEADgDQACgCACAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_23.setTransform(42.4,12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUArIAAhTIAMAAIACAIIAIgHQAFgDAGgBIAHACIgBAMIgHAAQgFAAgGADQgEADgDAEIAAA+g");
	this.shape_24.setTransform(38.5,13.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAhQgKgMAAgVQgBgHACgFQABgHADgFQACgGAEgDQADgFAFgBQAIgEAHgBQAGAAAFACQAGACAEADQAIAHAEAKQADALAAAJIg6AAQABAPAGAJQAEAEAFADQAFADAFgBQAHAAAHgCQAGgDAFgEIADALQgEAEgIADQgIACgJAAQgQABgLgMgAAVgLQAAgGgEgGQgEgFgEgCQgFgCgEAAQgGAAgHAEQgDADgBAEIgEAKIAqAAIAAAAg");
	this.shape_25.setTransform(31,13.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghA9IAAh2IALAAIACAGQAFgEAGgCQAFgCAFgBQANAAAIAIQAEAEACAEIAEAJQACALAAAIQAAAQgGAJQgHAMgJAEQgJADgHAAQgKAAgGgDIAAAkgAgLguQgFADgEAEIAAA1IAFACQAEACAEgBQAFABACgCQAFgBADgCIAGgHIAEgGQADgGAAgJQAAgKgDgIQgDgIgFgEQgGgDgEAAQgGAAgFACg");
	this.shape_26.setTransform(22.3,15.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAqIgTggIgSAgIgPAAIAbgqIgagpIAPAAIARAdIASgdIAOAAIgZApIAbAqg");
	this.shape_27.setTransform(14.2,13.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiA7IAAh1IBBAAIAAAMIgzAAIAAAnIAkAAIAAAKIgkAAIAAAsIA3AAIAAAMg");
	this.shape_28.setTransform(6.9,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.9,24.2);


(lib.Copy01_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape.setTransform(111.2,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_1.setTransform(105.2,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBJQgHgBgGgCQgMgFgIgIIALgXQAJAHAIAEQAJAEAKAAIAIgBQAFgBADgDQAEgDACgEQACgFAAgGQAAgHgCgEQgDgFgEgDQgIgFgMAAIgGAAIgHAAIAAgQIAGgIIAGgJIAIgJIAIgIIg2AAIAAgZIBZAAIAAAYIgJAHIgKAIIgJAJIgHAIQAJAAAHADQAHACAHAFQAFAFAEAGQADAJAAAMQAAAMgEAJQgEAKgIAGQgGAGgLADQgJADgJAAg");
	this.shape_2.setTransform(92.2,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBJIAAg7IgvhWIAfAAIAcA6IAdg6IAfAAIguBWIAAA7g");
	this.shape_3.setTransform(80.7,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBJIAAhoIAaAAIAABogAgLguQgEgEAAgHQAAgFAEgFQAEgFAHAAQAIAAAEAFQAEAFAAAFQAAAHgEAEQgEAFgIAAQgHAAgEgFg");
	this.shape_4.setTransform(67.8,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAzQgKgCgGgIQgHgHgFgKQgEgKAAgOQABgMADgKQAEgLAHgGQAHgIAIgDQAJgEAIAAQAKAAAJADQAJADAGAIQAGAGAEAMQAEAKAAAOIAAAEIhEAAQACAOAHAFQAHAHAKAAIAKgBIAJgDIAHgDIADgDIAIAWIgFAEIgIADIgNACQgGACgIAAQgJAAgJgEgAAUgLIgDgKIgEgHQgDgCgEgBIgGgBQgFgBgGAGQgEADgCAEIgCAJIAnAAIAAAAg");
	this.shape_5.setTransform(59.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA0IgShCIgQBCIgXAAIgihoIAcAAIASBCIAShCIATAAIARBCIAThCIAcAAIgjBog");
	this.shape_6.setTransform(46.7,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA0QgHgCgEgEQgFgEgDgHQgDgGAAgIQAAgHADgHQADgFAFgDIAMgHQAHgCAIgBIAJgCIALgBIAAgCQAAgJgFgEQgEgDgHAAIgIABIgIACIgFAEIgFADIgJgTIAGgEIAJgEIALgEQAHgBAFAAQAJAAAHACQAIADAFAEQAFAGADAHQADAIAAALIAABBIgZAAIgBgIQgEAFgHADQgGADgHAAQgHAAgGgDgAAHAEIgHABQgJACgDAEQgEAEAAAGQAAAFAEADQAEADAHAAQAEAAAFgCIAIgGIAAgVg");
	this.shape_7.setTransform(33.6,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAqQgFgFgCgIQgDgJAAgMIAAg9IAcAAIAAA6QAAAMAEAGQABAEAEACQADACAFAAQAGgBAGgDIAIgGIAAhKIAcAAIAABoIgZAAIgBgIQgIAGgHACQgGACgIAAQgSAAgKgLg");
	this.shape_8.setTransform(22.4,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBJIAAg+Ig1AAIAAA+IgdAAIAAiRIAdAAIAAA6IA1AAIAAg6IAcAAIAACRg");
	this.shape_9.setTransform(9.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.5,28.7);


(lib.Copy01_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAzQgJgCgIgIQgHgHgEgKQgDgKAAgOQgBgMAEgKQAEgLAGgGQAHgIAJgDQAJgEAIAAQALAAAIADQAIADAHAIQAGAGAEAMQAEAKgBAOIAAAEIhCAAQABAOAHAFQAIAHAKAAIAKgBIAJgDIAGgDIADgDIAIAWIgFAEIgJADIgMACQgGACgIAAQgJAAgJgEgAATgLIgCgKIgEgHQgDgCgDgBIgHgBQgFgBgGAGQgDADgDAEIgCAJIAmAAIAAAAg");
	this.shape.setTransform(63.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBJIAAg9QgBgHgBgFQgCgCgCgDQgFgGgGAAIgGABIgFACIgGAEIgEADIAABKIgcAAIAAiRIAcAAIAAAwQAFgEAHgDQAGgDAJAAQAKAAAHADQAIAEAEAGQAFAGACAIQACAHAAAKIAAA/g");
	this.shape_1.setTransform(51.9,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA7QgEgEgBgFQgCgEAAgFIAAg6IgPAAIAAgWIAPAAIAAgbIAZAAIAAAbIAYAAIAAAWIgYAAIAAA0QAAAFACACQADACADAAQAIAAAGgFIAHAUQgFAEgHACQgIACgIAAQgMABgHgJg");
	this.shape_2.setTransform(42,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA7QgEgEgBgFQgCgEAAgFIAAg6IgPAAIAAgWIAPAAIAAgbIAZAAIAAAbIAYAAIAAAWIgYAAIAAA0QAAAFACACQADACADAAQAIAAAGgFIAHAUQgFAEgHACQgIACgIAAQgMABgHgJg");
	this.shape_3.setTransform(30.2,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAzQgKgCgGgIQgHgHgFgKQgDgKAAgOQAAgMADgKQAEgLAGgGQAIgIAIgDQAJgEAIAAQAKAAAJADQAJADAGAIQAGAGAEAMQAEAKAAAOIAAAEIhDAAQABAOAHAFQAIAHAKAAIAJgBIAJgDIAHgDIADgDIAIAWIgFAEIgIADIgNACQgGACgIAAQgIAAgKgEgAATgLIgCgKIgEgHQgDgCgDgBIgHgBQgFgBgGAGQgEADgCAEIgCAJIAmAAIAAAAg");
	this.shape_4.setTransform(20.9,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBHQgGgCgFgEIgJgJQgJgJgFgPIgDgPIgBgRIABgQIAEgQIAGgNIAHgLQAJgKALgEQALgFALAAQAJAAAIACQAIACAGAEQAMAGAGAMIgUASIgEgHIgGgFQgDgCgFgCQgFgCgGAAQgFAAgGADQgGAEgEAFQgFAHgDAJQgDAKAAALQAAAMADAJQADAKAFAGQAFAHAHADQAFADAIAAIAOgBIAHgBIAAgbIgXAAIAAgXIAxAAIAABEIgGADIgKAEIgOACIgSABQgNAAgMgFg");
	this.shape_5.setTransform(8.6,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.1,28.7);


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

	// T&Cs
	this.instance_1 = new lib.TCs();
	this.instance_1.setTransform(694.6,111,1,1,0,0,0,23.4,7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(212).to({_off:false},0).to({y:78,alpha:1},5,cjs.Ease.get(1)).wait(48));

	// PTY
	this.instance_2 = new lib.PTY();
	this.instance_2.setTransform(307.7,116.4,1,1,0,0,0,29.9,8.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(211).to({_off:false},0).to({y:27.9},5,cjs.Ease.get(1)).wait(49));

	// Vodacom
	this.instance_3 = new lib.Vodacom();
	this.instance_3.setTransform(301.7,104.4,1,1,0,0,0,23.9,8.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(210).to({_off:false},0).to({y:15.9},5,cjs.Ease.get(1)).wait(50));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(318.5,113.3,1,1,0,0,0,40.8,13.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},0).to({y:67.3},5,cjs.Ease.get(1)).wait(51));

	// Plan
	this.instance_5 = new lib.Plan();
	this.instance_5.setTransform(164.8,67.4,1,1,0,0,0,58.8,9.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(207).to({_off:false},0).to({y:74.9,alpha:1},5,cjs.Ease.get(1)).wait(53));

	// PMX24
	this.instance_6 = new lib.PMX24();
	this.instance_6.setTransform(168.3,57.7,1,1,0,0,0,25.3,11.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(205).to({_off:false},0).to({x:174.6,alpha:1},5,cjs.Ease.get(1)).wait(55));

	// Price
	this.instance_7 = new lib.Price();
	this.instance_7.setTransform(-163.3,50.8,1,1,0,0,0,33.2,21.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(195).to({_off:false},0).to({x:136},15,cjs.Ease.get(1)).wait(55));

	// Line
	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(-133.1,36.6,1,1,0,0,0,63.4,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(192).to({_off:false},0).to({x:161.6},15,cjs.Ease.get(1)).wait(58));

	// Copy04_01
	this.instance_9 = new lib.Copy04_01();
	this.instance_9.setTransform(-128.7,19.5,1,1,0,0,0,67.8,14.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(188).to({_off:false},0).to({x:170.3},15,cjs.Ease.get(1)).wait(62));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_183 = new cjs.Graphics().p("EgOGAqBIAAAAIvgvgIgCgCIgGgGIAAAAI6Z6ZMA5og5pIPnPoIABAAIPnPpIABAAIXXXXQgNgCgPABQgfAAgcAIQhCAGgxAxQg4A3AABNQAABPA4A3QAtAtA8AJQAgAMAlAAIAWgBMg2iA2hg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(183).to({graphics:mask_graphics_183,x:131.1,y:35.9}).wait(17).to({graphics:null,x:0,y:0}).wait(65));

	// ICON
	this.instance_10 = new lib.ICON();
	this.instance_10.setTransform(296.6,42.3,1,1,0,0,0,42.1,27.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110).to({_off:false},0).to({x:366.1,alpha:1},15,cjs.Ease.get(1)).wait(58).to({x:569.7},15).to({_off:true},2).wait(65));

	// Copy03_02
	this.instance_11 = new lib.Copy03_02();
	this.instance_11.setTransform(-91.8,56.3,1,1,0,0,0,76.2,14.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({x:178.2},15,cjs.Ease.get(1)).wait(58).to({x:-91.8},15,cjs.Ease.get(1)).to({_off:true},8).wait(65));

	// Copy03_01
	this.instance_12 = new lib.Copy03_01();
	this.instance_12.setTransform(-105.1,34.2,1,1,0,0,0,62.9,14.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(102).to({_off:false},0).to({x:164.9},15,cjs.Ease.get(1)).wait(58).to({x:-105.1},15,cjs.Ease.get(1)).to({_off:true},10).wait(65));

	// Device
	this.instance_13 = new lib.Device_1();
	this.instance_13.setTransform(780.2,64.3,0.56,0.56,0,0,0,83,123);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({x:605.6},15,cjs.Ease.get(1)).wait(226));

	// Copy02_01
	this.instance_14 = new lib.Copy02_01();
	this.instance_14.setTransform(-254.7,67.4,1,1,0,0,0,54.3,12.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).to({x:158.4},15,cjs.Ease.get(1)).wait(58).to({x:-254.7},15,cjs.Ease.get(1)).to({_off:true},3).wait(154));

	// Copy01-02
	this.instance_15 = new lib.Copy01_02();
	this.instance_15.setTransform(-232,45.5,1,1,0,0,0,77,14.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off:false},0).to({x:181.1},15,cjs.Ease.get(1)).wait(58).to({x:-232},15,cjs.Ease.get(1)).to({_off:true},5).wait(154));

	// Copy01-01
	this.instance_16 = new lib.Copy01_01();
	this.instance_16.setTransform(-247.9,23.3,1,1,0,0,0,61.1,14.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({x:165.2},15,cjs.Ease.get(1)).wait(58).to({x:-247.9},15,cjs.Ease.get(1)).to({_off:true},7).wait(154));

	// VC icon
	this.instance_17 = new lib.mc_vc_icon_02();
	this.instance_17.setTransform(483.9,36.3,0.88,0.88);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},9,cjs.Ease.get(1)).wait(256));

	// VC Rhombus Masker (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("EAJLA7gI4c4dIAAAAIvovoIAAAAIvovoMA5og5oIaaaaIAAAAIAGAFIACACIPgPhIAAAAIPoPmMg3tA3tg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgHLA5xIzD84IAAgBIsKycIAAAAIsLybMBEDgs4IUkfLIgBAAIAFAGIABACIMFSUIAAAAIMLSbMhBwArYg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgUsA2HItT/7IAAgBIog0ZIAAAAIof0XMBLPgfWMAOXAieIAAAAIADAHIABADIIcUOIgBAAIIgUZMhItAeSg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgfUAxHMgHjghwIAAAAIk01iIAAAAIk11kMBPjgRyMAIKAkcIgBgBIACAIIABADIEyVYIAAAAIE1VkMhM3ARMg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgmbArRMgCDgihIAAgBIhU2BIAAAAIhU2EMBRXgE1MACOAlRIAAAAIABAIIAAADIBTV3IAAAAIBUWEMhOnAErg");
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
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg4qAB8IAAj3IYd4eIAAAAIPovnIAAAAIPovoMA5oA5oI6aaaIAAgBIgFAGIgCACIvhPhIAAgBIvmPpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:440.2,y:380.9}).wait(1).to({graphics:mask_1_graphics_10,x:399.3,y:374.7}).wait(1).to({graphics:mask_1_graphics_11,x:356,y:355.9}).wait(1).to({graphics:mask_1_graphics_12,x:312.6,y:327.7}).wait(1).to({graphics:mask_1_graphics_13,x:266.4,y:293.5}).wait(1).to({graphics:mask_1_graphics_14,x:229.5,y:273.4}).wait(1).to({graphics:mask_1_graphics_15,x:201.7,y:234}).wait(1).to({graphics:mask_1_graphics_16,x:181.5,y:195.7}).wait(1).to({graphics:mask_1_graphics_17,x:167.5,y:160}).wait(1).to({graphics:mask_1_graphics_18,x:158.4,y:128}).wait(1).to({graphics:mask_1_graphics_19,x:153,y:100.3}).wait(1).to({graphics:mask_1_graphics_20,x:150.2,y:77.4}).wait(1).to({graphics:mask_1_graphics_21,x:148.9,y:59.4}).wait(1).to({graphics:mask_1_graphics_22,x:148.6,y:46.6}).wait(1).to({graphics:mask_1_graphics_23,x:148.6,y:38.8}).wait(1).to({graphics:mask_1_graphics_24,x:148.6,y:36.3}).wait(1).to({graphics:null,x:0,y:0}).wait(240));

	// VC rhombus
	this.instance_18 = new lib.mc_rhombus_02();
	this.instance_18.setTransform(490.8,36.3,1,1,180,0,0,-154.7,0);
	this.instance_18._off = true;

	this.instance_18.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({_off:false},0).wait(256));

	// BackGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuCMBxvAAAIAAOCg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;