var THREE = require("three");
var $ = require("jquery");
var spikey = require('./spikey.js');

var threeExample = function() {
	var THREE = require("three");

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	// attributes: field of view, aspect ratio, near clipping pane, far clipping pane
	// var camera = new THREE.PerspectiveCamera( 75, document.getElementById('showcase').innerWidth() / document.getElementById('showcase').innerHeight(), 0.1, 1000 );

	// var renderer = new THREE.WebGLRenderer();
	var renderer = new THREE.WebGLRenderer( { alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x000000, 0 ); // the default (clear background)
	document.getElementById("showcase").appendChild(renderer.domElement);

	// MODEL
	var loader = new THREE.ObjectLoader();
	var model = loader.parse( spikey );
	scene.add( model )

	// LIGHT (directional)
	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( 0, 1, 1 ).normalize();
	scene.add(light);

	// LIGHT (ambient)
	var ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
	scene.add( ambientLight );

	// CAMERA
	camera.position.z = 2; // place camera (displaced from center)
	camera.position.x = 0.6;

	var render = function () {
	  requestAnimationFrame( render );

	  model.rotation.x += 0.001;
	  model.rotation.y += 0.001;

	  renderer.render(scene, camera);
	};

	render();
}

module.exports = threeExample;