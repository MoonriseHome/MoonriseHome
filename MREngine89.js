import { E0Engine } from './E0Engine88alpha6.js'; 

class MREngine {
    constructor() {
        // Initialization code here
    }

    runner(rsettings) {
        const newE0Engine = new E0Engine('engineName');
        newE0Engine.showandhideAI();
        newE0Engine.config(rsettings);
        let scene = newE0Engine.init(100.0, 800.0, -80.0, "EditOff");
        // let FOG_COLOR = 0x99bbcc;
        let skyMapNow = rsettings.skymap;
        newE0Engine.createSkybox(skyMapNow);
        newE0Engine.createEnvironment(skyMapNow);
        newE0Engine.createControls();
        newE0Engine.createLight();
        //newE0Engine.createWater();
        if (rsettings.displaywater != "yes"){
            let waterplane = newE0Engine.createWater();
            waterplane.position.z = -280000.2;
            waterplane.scale.x = 0.1;
            waterplane.scale.y = 0.1;
        }

        if (rsettings.displaywater == "yes"){
            let waterplane = newE0Engine.createWater();
        }

 
//         newE0Engine.createWaterPosY(180000.0);
        newE0Engine.createlensflares();

        // Maybe got to input audiovid into method for controling audio of the playing video
        //checkKeys(xnewengine, xcontrols, transformcontrols, audiovid) 

        newE0Engine.startEngine();
        newE0Engine.animate();

        let MREexport = {
            renderengine: newE0Engine,
            scene: scene,
            camera: newE0Engine.camera,
            renderer: newE0Engine.renderer

        };
        return MREexport;
    }
}

export default MREngine;
