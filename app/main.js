// import jquery
var $ = require("jquery");
var THREE = require("three");

// import styles
require("./global.scss");

// import external js files
cats = require('./cats.js');
spikey = require('./spikey.js');

// test for external js import
console.log(cats);

// test for jquery
$(function() {
	console.log('app loaded');


	// CREATE THE SCENE
	var scene = new THREE.Scene();

	// attributes: field of view, aspect ratio, near clipping pane, far clipping pane
	var camera = new THREE.PerspectiveCamera( 75, $('#showcase').width() / $('#showcase').height(), 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( { alpha: true });
	renderer.setSize( $('#showcase').width(), $('#showcase').height() );
	renderer.setClearColor( 0x000000, 0 ); // the default (clear background)
	document.getElementById("showcase").appendChild(renderer.domElement);

	// material -> takes object of properties (color)
	// var material = new THREE.MeshBasicMaterial( { color: 0x99ffdd } );
	var material = new THREE.MeshPhongMaterial( { color: 0x99ffdd, specular: 0x555555, shininess: 0 } );


	// MODEL
	// instantiate a loader
	var loader = new THREE.ObjectLoader();
	var object = loader.parse( spikey );
	scene.add( object );


	// LIGHTING
	// add a light
	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( 0, 1, 1 ).normalize();
	scene.add(light);

	// add ambient light
	var ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
	scene.add( ambientLight );

	// CAMERA
	// add a camera
	camera.position.z = 2.5; // place camera (displaced from center)


	// RENDER THE SCENE
	// This creates a loop that causes the renderer to draw the scene 60 times per second
	function render() {
		requestAnimationFrame( render );
		object.rotation.x += 0.001;
		object.rotation.y += 0.001;
		renderer.render( scene, camera );
	}
	window.addEventListener( 'resize', onWindowResize, false );
	render();

	function onWindowResize() {
	    camera.aspect = $('#showcase').width() / $('#showcase').height();
	    camera.updateProjectionMatrix();
	    renderer.setSize( $('#showcase').width(), $('#showcase').height() );
	    render();
	}
});