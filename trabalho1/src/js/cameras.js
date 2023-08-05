var cameras = [];
var createdCameras = 1;

var guiCam = {
    index: 0,
  };

const addCamera = () =>{

    const camera = { 
        name: `Camera ${createdCameras}`,
        position: createdCameras,
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        translation: {
            x: 1,
            y: 1,
            z: 1,
        },
        active: false,
        Animation1: () => {
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'y', value: 1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'y', value: -1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'x', value: 1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'x', value: -1});
        },
        Animation2: () => {
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'rotation', axysType: 'x', value: 1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'rotation', axysType: 'y', value: 1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'rotation', axysType: 'z', value: 1});
        },
        Animation3: () => {
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'x', value: 1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'y', value: -1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'x', value: -1});
          stepsCam.push(30);
          animationTypeCam.push({movementType: 'translation', axysType: 'y', value: 1});
        },
    };

    cameras.push(camera);
    createdCameras++; 
};

activateCamera = (lookCamera) => {
    cameras = cameras.map((camera, i) => {
      i === lookCamera ? (camera.active = true) : (camera.active = false);
      return camera;
    });
  
    cameras.forEach((camera,lookAt) => {
      if(camera.active) {
        guiCam.index = lookCamera;
      }
    });
  };