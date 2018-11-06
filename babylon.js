// Set Up
var canvas = document.getElementById("render-canvas");
var engine = new BABYLON.Engine(canvas);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);
var light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), scene);

var renderLoop = function () {
    scene.render();
};
engine.runRenderLoop(renderLoop);

// Create Rings
// 
//center ring
var ring = BABYLON.Mesh.CreateTorus("ring", 2, 0.5, 15, scene);
ring.position.x = 0;
ring.rotation.x = 1.5;

var ringMaterial = new BABYLON.StandardMaterial("material", scene);
ringMaterial.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring.material = ringMaterial;

//left center ring
var ring2 = BABYLON.Mesh.CreateTorus("ring2", 2, 0.5, 15, scene);
ring2.position.x = -3;
ring2.rotation.x = 1.5;

var ring2Material = new BABYLON.StandardMaterial("material2", scene);
ring2Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring2.material = ring2Material;

//right center ring
var ring3 = BABYLON.Mesh.CreateTorus("ring3", 2, 0.5, 15, scene);
ring3.position.x = 3;
ring3.rotation.x = 1.5;

var ring3Material = new BABYLON.StandardMaterial("material3", scene);
ring3Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring3.material = ring3Material;

//lower center ring
var ring4 = BABYLON.Mesh.CreateTorus("ring4", 2, 0.5, 15, scene);
ring4.position.x = 0;
ring4.position.y = -1.5;
ring4.rotation.x = 1.5;

var ring4Material = new BABYLON.StandardMaterial("material4", scene);
ring4Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring4.material = ring4Material;

//upper center ring
var ring5 = BABYLON.Mesh.CreateTorus("ring5", 2, 0.5, 15, scene);
ring5.position.x = 0;
ring5.position.y = 1.5;
ring5.rotation.x = 1.5;

var ring5Material = new BABYLON.StandardMaterial("material5", scene);
ring5Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring5.material = ring5Material;

//second left center ring
var ring6 = BABYLON.Mesh.CreateTorus("ring6", 2, 0.5, 15, scene);
ring6.position.x = -6;
ring6.rotation.x = 1.5;

var ring6Material = new BABYLON.StandardMaterial("material6", scene);
ring6Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring6.material = ring6Material;

//second right center ring
var ring7 = BABYLON.Mesh.CreateTorus("ring7", 2, 0.5, 15, scene);
ring7.position.x = 6;
ring7.rotation.x = 1.5;

var ring7Material = new BABYLON.StandardMaterial("material7", scene);
ring7Material.emissiveColor = new BABYLON.Color3(1, 0.6, 0.8);
ring7.material = ring7Material;



//animation
var t = 0;
var renderLoop = function () {
    scene.render();
    t -= 0.01;
    
    ring.rotation.y = t*2;
    ring.scaling.z = Math.abs(Math.sin(t*2))+0.5;
    
    ring2.scaling.z = Math.abs(Math.sin(t*2))-0.5;
    ring2.position.y = Math.sin(t*5);
    
    ring3.scaling.z = Math.abs(Math.sin(t*2))-0.5;
    ring3.position.y = Math.sin(t*5);
    
    ring4.rotation.y = t*-2;
    ring4.scaling.z = Math.abs(Math.sin(t*2))+0.5;
    
    ring5.rotation.y = t*-2;
    ring5.scaling.z = Math.abs(Math.sin(t*2))+0.5;
    
    ring6.scaling.z = Math.abs(Math.sin(t*2))-0.5;
    ring6.position.y = Math.sin(t*5);
    
    ring7.scaling.z = Math.abs(Math.sin(t*2))-0.5;
    ring7.position.y = Math.sin(t*5);
    
    
};
engine.runRenderLoop(renderLoop);


