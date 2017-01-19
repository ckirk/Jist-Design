var THREE = require("three");
var $ = require("jquery");
var spikeyModel = require('./spikey_model.js');

var Inject3dModel = function() {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	// attributes: field of view, aspect ratio, near clipping pane, far clipping pane
	// var camera = new THREE.PerspectiveCamera( 75, document.getElementById('showcase').innerWidth() / document.getElementById('showcase').innerHeight(), 0.1, 1000 );

	// var renderer = new THREE.WebGLRenderer();
	var renderer = new THREE.WebGLRenderer( { alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x000000, 0 ); // the default (clear background)
	document.getElementById("3dInject").appendChild(renderer.domElement);

	// MODEL
	var loader = new THREE.ObjectLoader();
	var model = loader.parse(spikeyModel);
	scene.add(model)

	// LIGHT (directional)
	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( 0, 1, 1 ).normalize();
	scene.add(light);

	// LIGHT (ambient)
	var ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
	scene.add( ambientLight );

	// CAMERA
	// place camera (displaced from center)
	camera.position.z = 2;
	camera.position.x = 0; // centered

	// RENDER THE SCENE
  // This creates a loop that causes the renderer to draw the scene 60 times per second
	var render = function () {
	  requestAnimationFrame(render);
	  model.rotation.x += 0.001;
	  model.rotation.y += 0.001;
	  renderer.render(scene, camera);
	};

	// Keep 3D model centered when window resizes
	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize() {
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	};

	render();
}

module.exports = Inject3dModel;
