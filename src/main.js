/*
    Portfolio temporario do Dunkel (matheus dutreus snow flakes junior)
    historico de atualizações:

    14-07-25
    Estrutura inicial adicionada ao projeto. parte 3D feita.
*/

//#region project setup
import * as THREE from 'three';

import { GLTFLoader, ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
//#endregion
//#region  scene setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true,
    antialias: false,
});
renderer.setSize(window.innerWidth, window.innerHeight);
const orbitalcamera = new OrbitControls(camera, renderer.domElement);
orbitalcamera.target.set(0,0,0);
orbitalcamera.update();
orbitalcamera.minZoom = 5;
orbitalcamera.enableDamping = true;
orbitalcamera.dampingFactor = 0.1
orbitalcamera.maxPolarAngle = Math.PI / 2;
orbitalcamera.maxDistance = 5;
orbitalcamera.minDistance = 2;
orbitalcamera.enablePan = false;
//#endregion
//#region scene assets 
const loader = new GLTFLoader();
loader.load("/Model.glb", function(gltf) {
    const model = gltf.scene;
    model.traverse(function(object){
        if (object.isMesh) console.log(object.name);
    })
    model.position.set(0,0,0);
    // model.scale.set(1,1,1);

    scene.add(model);
}, undefined, function(error) { 
    console.log(error);
});
camera.position.z = 3;
camera.position.x = 2;
camera.rotation.y = 0.5;


const light = new THREE.DirectionalLight(0xffffff,1);
scene.add(light);
const ambient = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambient);

const arealight1 = new THREE.RectAreaLight(0xB32C28, 15, 0.92,0.7);
arealight1.position.set (-0.64,0.7,-0.55);
arealight1.rotation.x = Math.PI + 0.2;
scene.add(arealight1);
const arealight2 = new THREE.RectAreaLight(0xFFFFFF, 10, 1.5,0.7);
arealight2.position.set (0,0.7,-0.55);
arealight2.rotation.x = Math.PI + 0.2;
scene.add(arealight2);
const arealight3 = new THREE.RectAreaLight(0xA0A8FF, 15, 0.5,0.7);
arealight3.position.set (0.25,0.7,-0.55);
arealight3.rotation.x = Math.PI + 0.2;
scene.add(arealight3);
const arealight4 = new THREE.RectAreaLight(0xFFB094, 15, 0.5,0.7);
arealight4.position.set (0.9,0.7,-0.55);
arealight4.rotation.x = Math.PI + 0.2;
scene.add(arealight4);

// const lighthelp = new RectAreaLightHelper(arealight1);
// arealight1.add(lighthelp);
// const lighthelp2 = new RectAreaLightHelper(arealight2);
// arealight2.add(lighthelp2);
// const lighthelp3 = new RectAreaLightHelper(arealight3);
// arealight2.add(lighthelp3);
// const lighthelp4 = new RectAreaLightHelper(arealight4);
// arealight2.add(lighthelp4);
//#endregion


function update(){
    renderer.render(scene,camera);
}
renderer.setAnimationLoop( update );