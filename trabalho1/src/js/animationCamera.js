var stepsCam = [];
animationTypeCam = [];
var countCam = 0;

const animationCam = (Cameras) => {
    switch(animationTypeCam[countCam].movementType){
        case 'translation':
            switch(animationTypeCam[countCam].axysType){
                case 'x':
                    Cameras[config.lookCamera].translation.x += animationTypeCam[countCam].value;
                    break;
                case 'y':
                    Cameras[config.lookCamera].translation.y += animationTypeCam[countCam].value;
                    break;
                case 'z': 
                    Cameras[config.lookCamera].translation.z += animationTypeCam[countCam].value;
                    break; 
            }
            break;
        case 'rotation':
            switch(animationTypeCam[countCam].axysType){
                case 'x':
                    Cameras[config.lookCamera].rotation.x += animationTypeCam[countCam].value;
                    break;
                case 'y':
                    Cameras[config.lookCamera].rotation.y += animationTypeCam[countCam].value;
                    break;  
                case 'z': 
                    Cameras[config.lookCamera].rotation.z += animationTypeCam[countCam].value;
                    break; 
            }
                  break;
            case 'default':
            break;
    }
};
