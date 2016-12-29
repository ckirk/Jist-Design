// imports
var THREE = require("three");
var $ = require("jquery");
var spikey = require('./spikey.js');

var inject3dModel = function() {
  console.log('3D Model Injection Initiated');

  // CREATE THE SCENE
  var scene = new THREE.Scene();

  // attributes: field of view, aspect ratio, near clipping pane, far clipping pane
  var camera = new THREE.PerspectiveCamera( 75, $('#test').width() / $('#test').height(), 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer( { alpha: true });
  renderer.setSize( $('#test').width(), $('#test').height() );
  renderer.setClearColor( 0x000000, 0 ); // the default (clear background)
  document.getElementById("test").appendChild(renderer.domElement);

  // material -> takes object of properties (color)
  // var material = new THREE.MeshBasicMaterial( { color: 0x99ffdd } );
  var material = new THREE.MeshPhongMaterial( { color: 0x99ffdd, specular: 0x555555, shininess: 0 } );


  // MODEL
  // instantiate a loader
  var loader = new THREE.ObjectLoader();
  var model = loader.parse( spikey );
  scene.add( model );


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
    model.rotation.x += 0.001;
    model.rotation.y += 0.001;
    renderer.render( scene, camera );
  }
  window.addEventListener( 'resize', onWindowResize, false );
  render();

  function onWindowResize() {
      camera.aspect = $('#test').width() / $('#test').height();
      camera.updateProjectionMatrix();
      renderer.setSize( $('#test').width(), $('#test').height() );
      render();
  }
};

module.exports = inject3dModel;