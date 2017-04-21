var THREE = require("three");
var $ = require("jquery");
var spikeyModel = require('./spikey_model.js');

var Inject3dModel = function() {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var mouseX = 0;
	var mouseY = 0;
	var targetX = 0;
	var targetY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	var mobile = window.innerWidth > 768 ? false : true;

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
		if (mobile) {
			model.rotation.x += 0.001;
			model.rotation.y += 0.001;
		} else {
			targetX = mouseX * .001;
			targetY = mouseY * .001;
			model.rotation.x += 0.05 * ( targetY - model.rotation.x );
			model.rotation.y += 0.05 * ( targetX - model.rotation.y );
		}
	  renderer.render(scene, camera);
	};

	// function render() {
	// 	targetX = mouseX * .001;
	// 	targetY = mouseY * .001;
	// 	if ( model ) {
	// 		model.rotation.y += 0.05 * ( targetX - model.rotation.y );
	// 		model.rotation.x += 0.05 * ( targetY - model.rotation.x );
	// 	}
	// 	renderer.render( scene, camera );
	// }


	// EVENTS

	// Keep 3D model centered when window resizes
	window.addEventListener( 'resize', onWindowResize, false );

	// Mouse Movement
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	function onWindowResize() {
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( document.getElementById('app').offsetWidth, window.innerHeight );
		// console.log('width', document.getElementById('app').offsetWidth);
	};

	function onDocumentMouseMove( event ) {
		mouseX = ( event.clientX - windowHalfX );
		mouseY = ( event.clientY - windowHalfY );
		// console.log(mouseX, mouseY);
	}

	render();
}

module.exports = Inject3dModel;
