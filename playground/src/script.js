import "./style.css";
import * as THREE from "three";
import { Vector3 } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.7, 1, -1.2);
// mesh.position.normalize();
mesh.scale.set(1, 1.7, 0.3);
mesh.rotation.reorder('YXZ')
mesh.rotation.y = ((1 / 3) * 22) / 7;
mesh.rotation.x = ((1 / 3) * 22) / 7;

console.log("length", mesh.position.length());
scene.add(mesh);

// axes helper

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;

camera.position.x = 1;
scene.add(camera);

camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
