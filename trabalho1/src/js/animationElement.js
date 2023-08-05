var steps = [];
animationType = [];
var count = 0;
var elementSelect;

const animation = (objects) => {
    switch(animationType[count].movementType){
        case 'translation':
            switch(animationType[count].axysType){
                case 'x':
                    objects[elementSelect].translation.x += animationType[count].value;
                    break;
                case 'y':
                    objects[elementSelect].translation.y += animationType[count].value;
                    break;
                case 'z': 
                    objects[elementSelect].translation.z += animationType[count].value;
                    break; 
            }
            break;
        case 'rotation':
            switch(animationType[count].axysType){
                case 'x':
                    objects[elementSelect].rotation.x += animationType[count].value;
                    break;
                case 'y':
                    objects[elementSelect].rotation.y += animationType[count].value;
                    break;  
                case 'z': 
                    objects[elementSelect].rotation.z += animationType[count].value;
                    break; 
            }
                  break;
            case 'default':
            break;
    }
};
