import * as THREE from 'three';
import MREngine from './MREngine89.js';
import AudioPlayer from './jsm/moonaudioplayer.js';

let rsettings = { 
    renderquality: "ultra", speed: 350, showinfo: "no",
    sunflare: "low", showcontrols: "no", homepagemode: "yes", cameratype: "FPS1",
    skymap: "FluffballDay2k.hdr", displaywater: "yes", settonemapping: "ACESFilmicToneMapping"
};
//bluecolin2.hdr FluffballDay2k.hdr
// Initialize the MoonEngine. Always use this code to start the engine
const moonstart = new MREngine();
const MREConfig = moonstart.runner(rsettings); // start the runner
const moon = MREConfig.renderengine;
const scene = MREConfig.scene;
let camera = MREConfig.camera;
let renderer = MREConfig.renderer; // three js renderer

console.log("Camera: "+ camera);
console.log("Renderer: "+ renderer);
camera.position.x = -820.0;
camera.position.z = 12070.0;
camera.position.y = 350.0;
camera.lookAt(new THREE.Vector3(9000, 9000, 9000));

// Add a Light
moon.createDirlightPro(0xccbbbb, 1.5, -800, 5000, -600, 'no');
/*
loadModel (posx, posy, posz, modelfile ) {
    await moon.loadModelGasync(posx, posy, posz, modelfile, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
} 
*/
let testisland1 = await moon.loadModelGasync(3000.0, -5.5, 4800.0, 'moonLongIsland.glb', 0.0, 90.0, 0.0, 150.0, 20.0, 150.0);
let testhouse = await moon.loadDragModelGasync(15.0, 25.5, 9500.0, 'NewHouse01.glb', 0.0, 90.0, 0.0, 100.0, 100.0, 100.0);
//let testhousee5 = await moon.loadDragModelGasync(15.0, 25.5, 5500.0, 'room10.glb', 0.0, 90.0, 0.0, 10.0, 10.0, 10.0);


let testisland3 = await moon.loadModelGasync(1000.0, -25.5, 10800.0, 'islandaiflattestfaded2.glb', 0.0, 90.0, 0.0, 50.0, 40.0, 50.0);
await moon.loadModelGRandomProWide(80, 20.0, 32.0, 10000.0, 'PalmTreeBended03optdarker3-256-v2.glb', 0.0, +0.0, -0.0, 15.0, 15.0, 15.0, 55, 1500);

let testisland2 = await moon.loadModelGasync(-90.0, -20.5, -2200.0, 'Tropical1024.glb', 0.0, 90.0, 0.0, 10.0, 5.0, 10.0);
//----await moon.loadModelGRandomProWide(30, -500.0, -15.0, -2430.0, 'PalmTreeBended03optdarker3-256-v2.glb', 0.0, +0.0, -0.0, 25.0, 25.0, 25.0, 25, 900);
   
moon.checkKeys(moon, moon.controls, moon.ObjectControls);
const audioPlayer = new AudioPlayer();
  audioPlayer.init();
  //audioPlayer.playNextSound();

//      loadModelGRandomProWide(Numberofmodels, modelposx, modelposz, modelposy, gltfFilename, modelrotx, modelrotz, modelroty,
//               modelscalex, modelscalez, modelscaley, scaleRandom, areasize) 