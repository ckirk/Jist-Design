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
	// scene.background = new THREE.Color( 0xffffff ); // background color

	// attributes: field of view, aspect ratio, near clipping pane, far clipping pane
	var camera = new THREE.PerspectiveCamera( 75, $('#showcase').width() / $('#showcase').height(), 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( { alpha: true });
	renderer.setSize( $('#showcase').width(), $('#showcase').height() );
	renderer.setClearColor( 0x000000, 0 ); // the default (clear background)
	document.getElementById("showcase").appendChild(renderer.domElement);


	// CREATE THE CUBE
	var geometry = new THREE.BoxGeometry( 1, 1, 1 ); // (1,1,1) size of cube

	// material -> takes object of properties (color)
	// var material = new THREE.MeshBasicMaterial( { color: 0x99ffdd } );
	var material = new THREE.MeshPhongMaterial( { color: 0x99ffdd, specular: 0x555555, shininess: 0 } );
	var cube = new THREE.Mesh( geometry, material ); // create cube
	// scene.add( cube ); // add the cube to the scene at (0,0,0)

	      

	console.log(spikey);
	// ADD SPIKEY MODEL

	// instantiate a loader
	var loader = new THREE.ObjectLoader();

	// assuming we loaded a JSON structure from elsewhere
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

	// add a camera
	camera.position.z = 2.5; // place camera (displaced from center)


	// RENDER THE SCENE
	// This creates a loop that causes the renderer to draw the scene 60 times per second
	function render() {
		requestAnimationFrame( render );
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
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